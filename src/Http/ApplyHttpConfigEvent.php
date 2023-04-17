<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http;

class ApplyHttpConfigEvent
{
    public function __construct(private HttpConfig $config)
    {
    }

    public function config(): HttpConfig
    {
        return $this->config;
    }

    public function addCssTagFromNative(string $href): self
    {
        $this->config = $this->config->withCssTagFromNative($href);

        return $this;
    }

    public function addCssTag(CssTag $cssTag): self
    {
        $this->config = $this->config->withCssTag($cssTag);

        return $this;
    }

    public function addScriptTagFromNative(
        string $src,
        string|null $type = null,
    ): self {
        $this->config = $this->config->withScriptTagFromNative(
            $src,
            $type,
        );

        return $this;
    }

    public function addScriptTag(ScriptTag $scriptTag): self
    {
        $this->config = $this->config->withScriptTag($scriptTag);

        return $this;
    }
}
