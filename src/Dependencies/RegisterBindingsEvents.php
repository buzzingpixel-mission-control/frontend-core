<?php

declare(strict_types=1);

namespace MissionControlFrontend\Dependencies;

use Crell\Tukio\Dispatcher;
use Crell\Tukio\OrderedListenerProvider;
use Crell\Tukio\OrderedProviderInterface;
use MissionControlFrontend\ContainerBindings;
use Psr\EventDispatcher\EventDispatcherInterface;
use Psr\EventDispatcher\ListenerProviderInterface;

class RegisterBindingsEvents
{
    public static function register(ContainerBindings $containerBindings): void
    {
        $containerBindings->addBinding(
            key: EventDispatcherInterface::class,
            value: Dispatcher::class,
        );

        $containerBindings->addBinding(
            key: ListenerProviderInterface::class,
            value: OrderedListenerProvider::class,
        );

        $containerBindings->addBinding(
            key: OrderedProviderInterface::class,
            value: OrderedListenerProvider::class,
        );
    }
}
