<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use Psr\Http\Message\UriInterface;
use Slim\App;
use Slim\Interfaces\RouteGroupInterface;
use Slim\Interfaces\RouteInterface;

readonly class ApplyRoutesEvent
{
    public function __construct(private App $app)
    {
    }

    public function getBasePath(): string
    {
        return $this->app->getBasePath();
    }

    public function get(
        string $pattern,
        callable|string $callable,
    ): RouteInterface {
        return $this->app->get($pattern, $callable);
    }

    public function post(
        string $pattern,
        callable|string $callable,
    ): RouteInterface {
        return $this->app->post($pattern, $callable);
    }

    public function put(
        string $pattern,
        callable|string $callable,
    ): RouteInterface {
        return $this->app->put($pattern, $callable);
    }

    public function patch(
        string $pattern,
        callable|string $callable,
    ): RouteInterface {
        return $this->app->patch($pattern, $callable);
    }

    public function delete(
        string $pattern,
        callable|string $callable,
    ): RouteInterface {
        return $this->app->delete($pattern, $callable);
    }

    public function options(
        string $pattern,
        callable|string $callable,
    ): RouteInterface {
        return $this->app->options($pattern, $callable);
    }

    public function any(
        string $pattern,
        callable|string $callable,
    ): RouteInterface {
        return $this->app->any($pattern, $callable);
    }

    /** @param string[] $methods */
    public function map(
        array $methods,
        string $pattern,
        callable|string $callable,
    ): RouteInterface {
        return $this->app->map(
            $methods,
            $pattern,
            $callable,
        );
    }

    public function group(
        string $pattern,
        callable|string $callable,
    ): RouteGroupInterface {
        return $this->app->group($pattern, $callable);
    }

    public function redirect(
        string $from,
        string|UriInterface $to,
        int $status = 302,
    ): RouteInterface {
        return $this->app->redirect($from, $to, $status);
    }
}
