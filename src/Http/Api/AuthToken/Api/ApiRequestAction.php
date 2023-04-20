<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api;

use MissionControlFrontend\ApplyRoutesEvent;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

readonly class ApiRequestAction
{
    public const BASE_PATH = '/api/request';

    public static function registerRoute(ApplyRoutesEvent $event): void
    {
        $event->any(
            self::BASE_PATH .
                '/[{segment1}[/{segment2}[/{segment3}[/{segment4}[/{segment5}[/{segment6}[/{segment7}[/{segment8}[/{segment9}[/{segment10}]]]]]]]]]]',
            self::class,
        );
    }

    public function __construct(
        private MakeRequest $makeRequest,
        private ApiRequestModifierFactory $apiRequestModifierFactory,
    ) {
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response,
    ): ResponseInterface {
        return $this->makeRequest->run(
            $this->apiRequestModifierFactory->modify($request),
        );
    }
}
