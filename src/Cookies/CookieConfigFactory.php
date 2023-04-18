<?php

declare(strict_types=1);

namespace MissionControlFrontend\Cookies;

use Psr\EventDispatcher\EventDispatcherInterface;
use RuntimeException;

use function implode;

readonly class CookieConfigFactory
{
    public function __construct(
        private EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function create(): CookieConfig
    {
        $cookieConfigEvent = new ApplyCookieConfigEvent();

        $this->eventDispatcher->dispatch($cookieConfigEvent);

        if ($cookieConfigEvent->config === null) {
            throw new RuntimeException(
                implode(' ', [
                    'You must listen for the event',
                    ApplyCookieConfigEvent::class,
                    'and set up a Cookie Config',
                ]),
            );
        }

        return $cookieConfigEvent->config;
    }
}
