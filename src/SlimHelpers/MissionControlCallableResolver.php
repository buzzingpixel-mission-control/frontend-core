<?php

declare(strict_types=1);

namespace MissionControlFrontend\SlimHelpers;

use Psr\Container\ContainerInterface;
use Slim\CallableResolver;
use Slim\Interfaces\AdvancedCallableResolverInterface;
use Throwable;

/**
 * Slim's callable resolver does some weird things which ultimately suppress the
 * real errors. That's super annoying. So we fall back to calling the container
 * to throw the real error going on
 */
readonly class MissionControlCallableResolver implements AdvancedCallableResolverInterface
{
    public function __construct(
        private ContainerInterface $container,
        private CallableResolver $slimCallableResolver,
    ) {
    }

    /** @inheritDoc */
    public function resolve($toResolve): callable
    {
        try {
            return $this->slimCallableResolver->resolve($toResolve);
        } catch (Throwable) {
            /** @phpstan-ignore-next-line */
            return $this->container->get($toResolve);
        }
    }

    /** @inheritDoc */
    public function resolveRoute($toResolve): callable
    {
        try {
            return $this->slimCallableResolver->resolveRoute(
                $toResolve,
            );
        } catch (Throwable) {
            /** @phpstan-ignore-next-line */
            return $this->container->get($toResolve);
        }
    }

    /** @inheritDoc */
    public function resolveMiddleware($toResolve): callable
    {
        try {
            return $this->slimCallableResolver->resolveMiddleware(
                $toResolve,
            );
        } catch (Throwable) {
            /** @phpstan-ignore-next-line */
            return $this->container->get($toResolve);
        }
    }
}
