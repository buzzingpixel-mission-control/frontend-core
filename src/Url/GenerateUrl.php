<?php

declare(strict_types=1);

namespace MissionControlFrontend\Url;

use function ltrim;
use function rtrim;

class GenerateUrl
{
    public function fromBasePath(
        string $baseUrl,
        string $path,
        QueryParams|null $queryParams = null,
    ): string {
        $queryParams ??= new QueryParams();

        $baseUrl = rtrim($baseUrl, '/');

        $path = ltrim($path, '/');

        $url = $baseUrl . '/' . $path;

        if ($queryParams->count() < 1) {
            return $url;
        }

        return $url . '?' . $queryParams->asString();
    }
}
