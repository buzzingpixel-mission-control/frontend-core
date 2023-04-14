<?php

declare(strict_types=1);

namespace MissionControlFrontend\Logging\HandlerFactories;

use Monolog\Handler\FilterHandler;
use Monolog\Handler\HandlerInterface;
use Monolog\Handler\StreamHandler;
use Monolog\Level;
use Monolog\Processor\IntrospectionProcessor;

readonly class Stderr implements HandlerFactory
{
    public function __construct(
        private IntrospectionProcessor $introspectionProcessor,
    ) {
    }

    public function create(): HandlerInterface
    {
        $handler = new StreamHandler(stream: 'php://stderr');

        $handler->pushProcessor($this->introspectionProcessor);

        return new FilterHandler(
            handler: $handler,
            minLevelOrList: Level::Error,
        );
    }
}
