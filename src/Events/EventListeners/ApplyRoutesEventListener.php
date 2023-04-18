<?php

declare(strict_types=1);

namespace MissionControlFrontend\Events\EventListeners;

use MissionControlFrontend\ApplyRoutesEvent;
use MissionControlFrontend\Http\FinalRoute;
use MissionControlFrontend\Oauth2\GetAuthorizeAction;
use MissionControlFrontend\Oauth2\GetCallbackAction;

class ApplyRoutesEventListener
{
    public static function onApplyRoutes(ApplyRoutesEvent $event): void
    {
        GetAuthorizeAction::registerRoute($event);

        GetCallbackAction::registerRoute($event);

        $event->any('{route:.*?}', FinalRoute::class);
    }
}
