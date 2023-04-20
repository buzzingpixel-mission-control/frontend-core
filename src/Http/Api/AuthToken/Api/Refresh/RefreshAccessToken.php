<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api\Refresh;

use DateInterval;
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;
use HttpSoft\Cookie\CookieManagerInterface;
use MissionControlFrontend\Cookies\CookieCreator;
use MissionControlFrontend\Http\Api\AuthToken\Api\AuthToken\AuthTokenIsHit;
use MissionControlFrontend\Http\HttpConfig;
use Psr\Clock\ClockInterface;
use Throwable;

use function json_decode;

readonly class RefreshAccessToken
{
    public function __construct(
        private Client $guzzle,
        private ClockInterface $clock,
        private HttpConfig $httpConfig,
        private CookieCreator $cookieCreator,
        private CookieManagerInterface $cookieManager,
    ) {
    }

    public function refresh(AuthTokenIsHit $authTokenIsHit): AuthTokenIsHit
    {
        try {
            $httpResponse = $this->guzzle->post(
                $this->httpConfig->accessTokenPostUrl,
                [
                    RequestOptions::HTTP_ERRORS => false,
                    RequestOptions::FORM_PARAMS => [
                        'grant_type' => 'refresh_token',
                        'refresh_token' => $authTokenIsHit->refreshToken(),
                        'client_id' => $this->httpConfig->webClientId,
                        'client_secret' => $this->httpConfig->webClientSecret,
                    ],
                ],
            );

            $bodyContents = $httpResponse->getBody()->getContents();

            /** @phpstan-ignore-next-line */
            $authToken = AuthTokenIsHit::fromArray(json_decode(
                $bodyContents,
                true,
            ));

            $this->cookieManager->set($this->cookieCreator->create(
                'auth_token',
                $bodyContents,
                $this->clock->now()->add(
                    new DateInterval('P1Y'),
                ),
                httpOnly: false,
            ));

            return $authToken;
        } catch (Throwable) {
            return $authTokenIsHit;
        }
    }
}
