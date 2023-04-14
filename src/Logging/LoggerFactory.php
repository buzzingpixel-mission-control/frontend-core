<?php

declare(strict_types=1);

namespace MissionControlFrontend\Logging;

use MissionControlFrontend\Logging\HandlerFactories\HandlerFactory;
use Monolog\Logger;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;

use function assert;

readonly class LoggerFactory
{
    public function __construct(
        private LoggerFactoryConfig $config,
        private ContainerInterface $container,
    ) {
    }

    public function make(): LoggerInterface
    {
        $logger = new Logger('app');

        $this->config->mapFactoryClassReferences(
            function (
                HandlerFactoryClassReference $classReference,
            ) use ($logger): void {
                $factory = $this->container->get($classReference->classString);

                assert($factory instanceof HandlerFactory);

                $logger->pushHandler($factory->create());
            },
        );

        return $logger;
    }
}
