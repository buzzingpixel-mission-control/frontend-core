<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use BuzzingPixel\Container\Container;
use MissionControlFrontend\Dependencies\RegisterBindings;

use function assert;

readonly class BootContainer
{
    public function __construct()
    {
    }

    public function buildContainer(
        callable|null $register = null,
    ): BootEvents {
        $containerBindings = new ContainerBindings();

        RegisterBindings::register($containerBindings);

        if ($register !== null) {
            $register($containerBindings);
        }

        $constructorConfigs = $containerBindings->constructorParamConfigs();

        $container = new Container(
            $containerBindings->bindings(),
            $constructorConfigs,
        );

        $bootEvents = $container->get(BootEvents::class);

        assert($bootEvents instanceof BootEvents);

        return $bootEvents;
    }
}
