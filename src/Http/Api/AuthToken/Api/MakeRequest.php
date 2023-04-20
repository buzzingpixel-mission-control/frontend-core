<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api;

use MissionControlFrontend\Http\Api\AuthToken\Api\AuthToken\AuthTokenIsHit;
use MissionControlFrontend\Http\Api\AuthToken\Api\Refresh\RefreshAccessToken;
use MissionControlFrontend\Http\Api\AuthToken\Api\Refresh\RefreshedAccessTokenTempStore;
use MissionControlFrontend\Http\Api\AuthToken\Api\Refresh\TokenRefreshLock;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

use function assert;

readonly class MakeRequest
{
    public function __construct(
        private GetAuthToken $getAuthToken,
        private SendApiRequest $sendApiRequest,
        private TokenRefreshLock $tokenRefreshLock,
        private RefreshAccessToken $refreshAccessToken,
        private CreateAccessDeniedResponse $createAccessDeniedResponse,
        private RefreshedAccessTokenTempStore $refreshedAccessTokenTempStore,
    ) {
    }

    public function run(ServerRequestInterface $request): ResponseInterface
    {
        $token = $this->getAuthToken->get();

        if (! $token->isHit()) {
            return $this->createAccessDeniedResponse->make();
        }

        assert($token instanceof AuthTokenIsHit);

        $response = $this->sendApiRequest->run(
            $request,
            $token,
        );

        if ($response->getStatusCode() !== 401) {
            return $response;
        }

        $tries = 0;

        while ($tries < 2 && $response->getStatusCode() === 401) {
            $tokenToRefresh = $token->accessToken();

            $this->tokenRefreshLock->acquireLock($tokenToRefresh);

            $newToken = $this->refreshedAccessTokenTempStore->get(
                $tokenToRefresh,
            );

            if ($newToken !== false) {
                $token = $token->withAccessToken($newToken);
            } else {
                $token = $this->refreshAccessToken->refresh(
                    $token,
                );
            }

            $this->tokenRefreshLock->releaseLock($tokenToRefresh);

            $response = $this->sendApiRequest->run(
                $request,
                $token,
            );

            $tries += 1;
        }

        return $response;
    }
}
