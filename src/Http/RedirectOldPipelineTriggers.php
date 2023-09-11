<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http;

use MissionControlFrontend\ApplyRoutesEvent;
use MissionControlFrontend\Url\ApiUrlGenerator;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

use function assert;
use function is_string;

readonly class RedirectOldPipelineTriggers
{
    public static function registerRoute(ApplyRoutesEvent $event): void
    {
        $event->any('/pipelines/webhook/trigger/{id}', self::class);
    }

    public function __construct(private ApiUrlGenerator $apiUrlGenerator)
    {
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response,
    ): ResponseInterface {
        $id = $request->getAttribute('id');
        assert(is_string($id));

        return $response->withStatus(301)
            ->withHeader('Location', $this->apiUrlGenerator->generate(
                '/pipelines/webhook/trigger/' . $id,
            ));
    }
}
