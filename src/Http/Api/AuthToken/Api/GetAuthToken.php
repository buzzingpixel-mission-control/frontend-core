<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api;

use MissionControlFrontend\Cookies\CookieValueRetriever;
use MissionControlFrontend\Http\Api\AuthToken\Api\AuthToken\AuthToken;
use MissionControlFrontend\Http\Api\AuthToken\Api\AuthToken\AuthTokenIsHit;
use MissionControlFrontend\Http\Api\AuthToken\Api\AuthToken\AuthTokenIsNotHit;
use Throwable;

use function json_decode;

readonly class GetAuthToken
{
    public function __construct(private CookieValueRetriever $cookieValueRetriever)
    {
    }

    public function get(): AuthToken
    {
        $cookie = $this->cookieValueRetriever->retrieve('auth_token');

        if ($cookie === null) {
            return new AuthTokenIsNotHit();
        }

        try {
            return AuthTokenIsHit::fromArray(
                /** @phpstan-ignore-next-line  */
                (array) json_decode($cookie, true),
            );
        } catch (Throwable) {
            return new AuthTokenIsNotHit();
        }
    }
}
