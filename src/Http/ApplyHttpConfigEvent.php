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

    public function addAppUrl(string $appUrl): self
    {
        $this->config = $this->config->withAppUrl($appUrl);

        return $this;
    }

    public function addIdpOauthUrl(string $idpOauthUrl): self
    {
        $this->config = $this->config->withIdpOauthUrl(
            $idpOauthUrl,
        );

        return $this;
    }

    public function addWebClientId(string $webClientId): self
    {
        $this->config = $this->config->withWebClientId(
            $webClientId,
        );

        return $this;
    }

    public function addWebClientSecret(string $webClientSecret): self
    {
        $this->config = $this->config->withWebClientSecret(
            $webClientSecret,
        );

        return $this;
    }

    public function addWebClientRedirectUri(
        string $webClientRedirectUri,
    ): self {
        $this->config = $this->config->withWebClientRedirectUri(
            $webClientRedirectUri,
        );

        return $this;
    }

    public function addAccessTokenPostUrl(
        string $accessTokenPostUrl,
    ): self {
        $this->config = $this->config->withAccessTokenPostUrl(
            $accessTokenPostUrl,
        );

        return $this;
    }
}
