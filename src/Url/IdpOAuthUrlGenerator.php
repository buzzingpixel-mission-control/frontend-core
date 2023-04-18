<?php

declare(strict_types=1);

namespace MissionControlFrontend\Url;

use MissionControlFrontend\Http\HttpConfig;

readonly class IdpOAuthUrlGenerator implements UrlGenerator
{
    public function __construct(
        private HttpConfig $httpConfig,
        private GenerateUrl $generateUrl,
    ) {
    }

    public function generate(
        string $path,
        QueryParams|null $queryParams = null,
    ): string {
        return $this->generateUrl->fromBasePath(
            $this->httpConfig->idpOauthUrl,
            $path,
            $queryParams,
        );
    }
}
