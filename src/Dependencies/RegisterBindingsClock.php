<?php

declare(strict_types=1);

namespace MissionControlFrontend\Dependencies;

use Lcobucci\Clock\SystemClock;
use MissionControlFrontend\ContainerBindings;
use Psr\Clock\ClockInterface;

class RegisterBindingsClock
{
    public static function register(ContainerBindings $containerBindings): void
    {
        $containerBindings->addBinding(
            ClockInterface::class,
            SystemClock::fromUTC(),
        );
    }
}
