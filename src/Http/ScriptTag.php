<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http;

use MissionControlFrontend\Http\ValueObjects\Src;
use MissionControlFrontend\Http\ValueObjects\Type;

readonly class ScriptTag
{
    public function __construct(
        public Src $src,
        public Type $type = new Type('text/javascript'),
    ) {
    }
}
