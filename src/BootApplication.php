<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use MissionControlFrontend\SlimHelpers\MissionControlCallableResolver;
use Psr\Container\ContainerInterface;
use Psr\EventDispatcher\EventDispatcherInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Factory\AppFactory;
use Slim\Factory\ServerRequestCreatorFactory;

readonly class BootApplication
{
    public function __construct(
        private ContainerInterface $container,
        private EventDispatcherInterface $eventDispatcher,
        private MissionControlCallableResolver $callableResolver,
    ) {
    }

    public function buildHttpApplication(
        ServerRequestInterface|null $request = null,
    ): BootHttpRoutes {
        $app = AppFactory::create(
            container: $this->container,
            callableResolver: $this->callableResolver,
        );

        $request ??= ServerRequestCreatorFactory::create()
            ->createServerRequestFromGlobals();

        return new BootHttpRoutes(
            $app,
            $request,
            $this->eventDispatcher,
        );
    }
}
