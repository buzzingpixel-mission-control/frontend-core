<?php

declare(strict_types=1);

namespace MissionControlFrontend\Events\EventListeners;

use BuzzingPixel\Minify\MinifyMiddleware;
use HttpSoft\Cookie\CookieSendMiddleware;
use MissionControlFrontend\ApplyMiddlewareEvent;

class ApplyMiddlewareEventListener
{
    public function onApplyMiddleware(ApplyMiddlewareEvent $event): void
    {
        $event->add(CookieSendMiddleware::class);

        $event->add(MinifyMiddleware::class);
    }
}
