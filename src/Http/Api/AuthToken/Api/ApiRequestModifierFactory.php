<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api;

use Psr\Http\Message\ServerRequestInterface;

use function mb_strlen;
use function mb_substr;
use function str_starts_with;

class ApiRequestModifierFactory
{
    public function modify(
        ServerRequestInterface $request,
    ): ServerRequestInterface {
        $originalPath = $request->getUri()->getPath();

        if (! str_starts_with($originalPath, ApiRequestAction::BASE_PATH)) {
            return $request;
        }

        return $request->withUri($request->getUri()->withPath(
            mb_substr(
                $originalPath,
                mb_strlen(ApiRequestAction::BASE_PATH),
            ),
        ));
    }
}
