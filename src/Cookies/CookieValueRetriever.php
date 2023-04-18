<?php

declare(strict_types=1);

namespace MissionControlFrontend\Cookies;

use HttpSoft\Cookie\CookieInterface;
use HttpSoft\Cookie\CookieManagerInterface;

use function assert;

readonly class CookieValueRetriever
{
    public function __construct(private CookieManagerInterface $cookieManager)
    {
    }

    public function retrieve(
        string $name,
        string|null $default = null,
    ): string|null {
        if ($this->cookieManager->has($name)) {
            $cookie = $this->cookieManager->get($name);

            assert($cookie instanceof CookieInterface);

            return $cookie->getValue();
        }

        return $_COOKIE[$name] ?? $default;
    }
}
