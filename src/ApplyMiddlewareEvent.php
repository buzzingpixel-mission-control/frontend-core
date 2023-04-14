<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use Psr\Http\Server\MiddlewareInterface;
use Slim\App;

readonly class ApplyMiddlewareEvent
{
    public function __construct(private App $app)
    {
    }

    public function add(
        MiddlewareInterface|string|callable $middleware,
    ): self {
        $this->app->add($middleware);

        return $this;
    }

    public function addMiddleware(MiddlewareInterface $middleware): self
    {
        $this->app->addMiddleware($middleware);

        return $this;
    }
}
