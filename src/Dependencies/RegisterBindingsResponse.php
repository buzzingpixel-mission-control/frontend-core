<?php

declare(strict_types=1);

namespace MissionControlFrontend\Dependencies;

use MissionControlFrontend\ContainerBindings;
use Psr\Http\Message\ResponseFactoryInterface;
use Slim\Psr7\Factory\ResponseFactory;

class RegisterBindingsResponse
{
    public static function register(ContainerBindings $containerBindings): void
    {
        $containerBindings->addBinding(
            key: ResponseFactoryInterface::class,
            value: ResponseFactory::class,
        );
    }
}
