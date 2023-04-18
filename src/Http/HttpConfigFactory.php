<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http;

use Psr\EventDispatcher\EventDispatcherInterface;
use RuntimeException;

use function count;
use function implode;

readonly class HttpConfigFactory
{
    public function __construct(
        private EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function create(): HttpConfig
    {
        $httpConfig = new HttpConfig();

        $httpConfigEvent = new ApplyHttpConfigEvent($httpConfig);

        $this->eventDispatcher->dispatch($httpConfigEvent);

        $config = $httpConfigEvent->config();

        if (count($config->cssTags) < 1) {
            throw new RuntimeException(implode(' ', [
                'You must listen for the event',
                ApplyHttpConfigEvent::class,
                'and add the href to your compiled CSS file',
            ]));
        }

        if (count($config->scriptTags) < 1) {
            throw new RuntimeException(implode(' ', [
                'You must listen for the event',
                ApplyHttpConfigEvent::class,
                'and add the src to your compiled JS file',
            ]));
        }

        if ($config->appUrl === '') {
            throw new RuntimeException(implode(' ', [
                'You must listen for the event',
                ApplyHttpConfigEvent::class,
                'and add appUrl',
            ]));
        }

        if ($config->idpOauthUrl === '') {
            throw new RuntimeException(implode(' ', [
                'You must listen for the event',
                ApplyHttpConfigEvent::class,
                'and add idpOauthUrl',
            ]));
        }

        if ($config->webClientId === '') {
            throw new RuntimeException(implode(' ', [
                'You must listen for the event',
                ApplyHttpConfigEvent::class,
                'and add webClientId',
            ]));
        }

        if ($config->webClientSecret === '') {
            throw new RuntimeException(implode(' ', [
                'You must listen for the event',
                ApplyHttpConfigEvent::class,
                'and add webClientSecret',
            ]));
        }

        if ($config->webClientRedirectUri === '') {
            throw new RuntimeException(implode(' ', [
                'You must listen for the event',
                ApplyHttpConfigEvent::class,
                'and add webClientRedirectUri',
            ]));
        }

        if ($config->accessTokenPostUrl === '') {
            throw new RuntimeException(implode(' ', [
                'You must listen for the event',
                ApplyHttpConfigEvent::class,
                'and add accessTokenPostUrl',
            ]));
        }

        return $config;
    }
}
