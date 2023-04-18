<?php

declare(strict_types=1);

namespace MissionControlFrontend\Cookies;

class ApplyCookieConfigEvent
{
    public function __construct(public CookieConfig|null $config = null)
    {
    }

    public function addConfig(CookieConfig $config): self
    {
        $this->config = $config;

        return $this;
    }
}
