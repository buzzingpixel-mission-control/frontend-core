<?php

declare(strict_types=1);

namespace MissionControlFrontend\Cookies;

use DateTimeInterface;
use HttpSoft\Cookie\CookieCreator as CookieCreatorSource;
use HttpSoft\Cookie\CookieInterface;
use InvalidArgumentException;

readonly class CookieCreator
{
    public function __construct(private CookieConfig $config)
    {
    }

    /** @throws InvalidArgumentException if one or more arguments are not valid. */
    public function create(
        string $name,
        string $value = '',
        DateTimeInterface|int|string|null $expire = null,
        string|null $path = '/',
        bool|null $secure = true,
        bool|null $httpOnly = true,
        string|null $sameSite = CookieInterface::SAME_SITE_LAX,
    ): CookieInterface {
        return CookieCreatorSource::create(
            $name,
            $value,
            $expire,
            $this->config->cookieDomain,
            $path,
            $secure,
            $httpOnly,
            $sameSite,
        );
    }

    /**
     * @throws InvalidArgumentException if one or more arguments are not valid.
     *
     * @codeCoverageIgnore
     */
    public function createFromString(string $string): CookieInterface
    {
        return CookieCreatorSource::createFromString($string);
    }
}
