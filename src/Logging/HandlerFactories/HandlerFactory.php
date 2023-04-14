<?php

declare(strict_types=1);

namespace MissionControlFrontend\Logging\HandlerFactories;

use Monolog\Handler\HandlerInterface;

interface HandlerFactory
{
    public function create(): HandlerInterface;
}
