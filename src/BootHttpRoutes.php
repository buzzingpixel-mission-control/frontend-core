<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use Psr\EventDispatcher\EventDispatcherInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\App;

readonly class BootHttpRoutes
{
    public function __construct(
        private App $app,
        private ServerRequestInterface $request,
        private EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function applyRoutes(): BootHttpMiddleware
    {
        $this->eventDispatcher->dispatch(new ApplyRoutesEvent(
            $this->app,
        ));

        return new BootHttpMiddleware(
            $this->app,
            $this->request,
            $this->eventDispatcher,
        );
    }
}
