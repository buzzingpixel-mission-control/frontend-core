<?php

declare(strict_types=1);

namespace MissionControlFrontend\Dependencies;

use MissionControlFrontend\ContainerBindings;

class RegisterBindings
{
    public static function register(ContainerBindings $containerBindings): void
    {
        RegisterBindingsEvents::register($containerBindings);
        RegisterBindingsHttp::register($containerBindings);
        RegisterBindingsLogging::register($containerBindings);
        RegisterBindingsResponse::register($containerBindings);
        RegisterBindingsSlim::register($containerBindings);
    }
}
