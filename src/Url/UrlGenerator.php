<?php

declare(strict_types=1);

namespace MissionControlFrontend\Url;

interface UrlGenerator
{
    public function generate(
        string $path,
        QueryParams|null $queryParams = null,
    ): string;
}
