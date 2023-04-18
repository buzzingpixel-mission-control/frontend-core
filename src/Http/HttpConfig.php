<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http;

use MissionControlFrontend\Http\ValueObjects\Href;
use MissionControlFrontend\Http\ValueObjects\Src;
use MissionControlFrontend\Http\ValueObjects\Type;
use Spatie\Cloneable\Cloneable;

use function array_map;
use function array_merge;
use function array_values;

readonly class HttpConfig
{
    use Cloneable;

    /** @var CssTag[] */
    public array $cssTags;

    /** @var ScriptTag[] */
    public array $scriptTags;

    /**
     * @param CssTag[]    $cssTags
     * @param ScriptTag[] $scriptTags
     */
    public function __construct(
        array $cssTags = [],
        array $scriptTags = [],
        public string $appUrl = '',
        public string $idpOauthUrl = '',
        public string $webClientId = '',
        public string $webClientSecret = '',
        public string $webClientRedirectUri = '',
        public string $accessTokenPostUrl = '',
    ) {
        $this->cssTags = array_values(array_map(
            static fn (CssTag $t) => $t,
            $cssTags,
        ));

        $this->scriptTags = array_values(array_map(
            static fn (ScriptTag $s) => $s,
            $scriptTags,
        ));
    }

    public function withCssTagFromNative(string $href): HttpConfig
    {
        return $this->withCssTag(new CssTag(
            Href::fromNative($href),
        ));
    }

    public function withCssTag(CssTag $cssTag): HttpConfig
    {
        return $this->with(cssTags: array_merge(
            $this->cssTags,
            [$cssTag],
        ));
    }

    public function withScriptTagFromNative(
        string $src,
        string|null $type = null,
    ): HttpConfig {
        $srcObj = Src::fromNative($src);

        if ($type === null) {
            return $this->withScriptTag(new ScriptTag($srcObj));
        }

        return $this->withScriptTag(new ScriptTag(
            $srcObj,
            Type::fromNative($type),
        ));
    }

    public function withScriptTag(ScriptTag $scriptTag): HttpConfig
    {
        return $this->with(scriptTags: array_merge(
            $this->scriptTags,
            [$scriptTag],
        ));
    }

    public function withAppUrl(string $appUrl): HttpConfig
    {
        return $this->with(appUrl: $appUrl);
    }

    public function withIdpOauthUrl(string $idpOauthUrl): HttpConfig
    {
        return $this->with(idpOauthUrl: $idpOauthUrl);
    }

    public function withWebClientId(string $webClientId): HttpConfig
    {
        return $this->with(webClientId: $webClientId);
    }

    public function withWebClientSecret(string $webClientSecret): HttpConfig
    {
        return $this->with(webClientSecret: $webClientSecret);
    }

    public function withWebClientRedirectUri(
        string $webClientRedirectUri,
    ): HttpConfig {
        return $this->with(webClientRedirectUri: $webClientRedirectUri);
    }

    public function withAccessTokenPostUrl(
        string $accessTokenPostUrl,
    ): HttpConfig {
        return $this->with(accessTokenPostUrl: $accessTokenPostUrl);
    }
}
