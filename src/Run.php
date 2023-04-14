<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use Psr\Http\Message\ServerRequestInterface;
use Slim\App;
use Slim\ResponseEmitter;

use function assert;

readonly class Run
{
    public function __construct(
        private App $app,
        private ServerRequestInterface $request,
    ) {
    }

    public function runApplication(
        ResponseEmitter|null $responseEmitter = null,
    ): void {
        $responseEmitter ??= $this->app->getContainer()?->get(
            ResponseEmitter::class,
        );

        assert($responseEmitter instanceof ResponseEmitter);

        $responseEmitter->emit($this->app->handle(
            $this->request,
        ));
    }
}
