<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use Crell\Tukio\OrderedProviderInterface;
use MissionControlFrontend\Events\RegisterEvents;

readonly class BootEvents
{
    public function __construct(
        private BootApplication $bootApplication,
        private OrderedProviderInterface $eventProvider,
    ) {
    }

    public function registerEvents(
        callable|null $register = null,
    ): BootApplication {
        RegisterEvents::register($this->eventProvider);

        if ($register !== null) {
            $register($this->eventProvider);
        }

        return $this->bootApplication;
    }
}
