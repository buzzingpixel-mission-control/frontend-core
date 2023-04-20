<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api;

use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface;

use function json_encode;

use const JSON_PRETTY_PRINT;

readonly class CreateAccessDeniedResponse
{
    public function __construct(
        private ResponseFactoryInterface $responseFactory,
    ) {
    }

    public function make(): ResponseInterface
    {
        $response = $this->responseFactory
            ->createResponse(401)
            ->withHeader('Content-type', 'application/json');

        $response->getBody()->write((string) json_encode([
            'error' => 'access_denied',
            'error_description' => 'The user is not logged in',
            'message' => 'You must log in to access this resource',
        ], JSON_PRETTY_PRINT));

        return $response;
    }
}
