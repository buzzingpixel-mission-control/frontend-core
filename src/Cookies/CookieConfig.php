<?php

declare(strict_types=1);

namespace MissionControlFrontend\Cookies;

readonly class CookieConfig
{
    public function __construct(
        public string|null $cookieDomain,
    ) {
    }
}
