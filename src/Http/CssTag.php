<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http;

use MissionControlFrontend\Http\ValueObjects\Href;

readonly class CssTag
{
    public function __construct(public Href $href)
    {
    }
}
