<?php

declare(strict_types=1);

namespace MissionControlFrontend\Events;

use Crell\Tukio\OrderedProviderInterface;
use MissionControlFrontend\Events\EventListeners\ApplyMiddlewareEventListener;
use MissionControlFrontend\Events\EventListeners\ApplyRoutesEventListener;

class RegisterEvents
{
    public static function register(OrderedProviderInterface $provider): void
    {
        $provider->addSubscriber(
            ApplyMiddlewareEventListener::class,
            ApplyMiddlewareEventListener::class,
        );

        $provider->addSubscriber(
            ApplyRoutesEventListener::class,
            ApplyRoutesEventListener::class,
        );
    }
}
