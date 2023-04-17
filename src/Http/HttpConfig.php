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
}
