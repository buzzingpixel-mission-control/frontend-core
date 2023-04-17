<?php

declare(strict_types=1);

namespace MissionControlFrontend\Events\EventListeners;

use MissionControlFrontend\ApplyRoutesEvent;
use MissionControlFrontend\Http\FinalRoute;

class ApplyRoutesEventListener
{
    public static function onApplyRoutes(ApplyRoutesEvent $event): void
    {
        $event->any('{route:.*?}', FinalRoute::class);
    }
}
