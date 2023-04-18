<?php

declare(strict_types=1);

namespace MissionControlFrontend\Dependencies;

use MissionControlFrontend\ContainerBindings;
use MissionControlFrontend\Http\HttpConfig;
use MissionControlFrontend\Http\HttpConfigFactory;
use MissionControlFrontend\Url\AppUrlGenerator;
use MissionControlFrontend\Url\UrlGenerator;
use Psr\Container\ContainerInterface;

use function assert;

class RegisterBindingsHttp
{
    public static function register(ContainerBindings $containerBindings): void
    {
        $containerBindings->addBinding(
            HttpConfig::class,
            static function (ContainerInterface $container): HttpConfig {
                $factory = $container->get(HttpConfigFactory::class);

                assert($factory instanceof HttpConfigFactory);

                return $factory->create();
            },
        );

        $containerBindings->addBinding(
            UrlGenerator::class,
            AppUrlGenerator::class,
        );
    }
}
