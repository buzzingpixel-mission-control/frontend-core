<?php

declare(strict_types=1);

namespace MissionControlFrontend\Dependencies;

use MissionControlFrontend\ContainerBindings;
use MissionControlFrontend\Logging\HandlerFactories\Stderr;
use MissionControlFrontend\Logging\HandlerFactories\Stdout;
use MissionControlFrontend\Logging\HandlerFactoryClassReference;
use MissionControlFrontend\Logging\LoggerFactory;
use MissionControlFrontend\Logging\LoggerFactoryConfig;
use Monolog\Processor\IntrospectionProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;

use function assert;

class RegisterBindingsLogging
{
    public static function register(ContainerBindings $containerBindings): void
    {
        $containerBindings->addBinding(
            IntrospectionProcessor::class,
            static fn () => new IntrospectionProcessor(),
        );

        // This can be overridden in binding listeners
        $containerBindings->addBinding(
            LoggerFactoryConfig::class,
            static function (): LoggerFactoryConfig {
                $stack = [];

                $stack[] = new HandlerFactoryClassReference(
                    Stderr::class,
                );

                $stack[] = new HandlerFactoryClassReference(
                    Stdout::class,
                );

                return new LoggerFactoryConfig($stack);
            },
        );

        $containerBindings->addBinding(
            LoggerInterface::class,
            static function (ContainerInterface $container): LoggerInterface {
                $loggerFactory = $container->get(LoggerFactory::class);

                assert($loggerFactory instanceof LoggerFactory);

                return $loggerFactory->make();
            },
        );
    }
}
