<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use Whoops\Handler\JsonResponseHandler;
use Whoops\Handler\PlainTextHandler;
use Whoops\Handler\PrettyPageHandler;
use Whoops\Run as WhoopsRun;

use function class_exists;
use function error_reporting;
use function ini_set;
use function mb_strtolower;
use function session_start;

use const E_ALL;
use const PHP_SAPI;

readonly class Boot
{
    public function start(CoreConfig $coreConfig): BootContainer
    {
        session_start();

        if ($coreConfig->useWhoopsErrorHandling) {
            $this->registerDevErrorHandling();
        }

        return new BootContainer();
    }

    private function registerDevErrorHandling(): void
    {
        ini_set('display_errors', '1');
        ini_set('display_startup_errors', '1');
        error_reporting(E_ALL);

        if (! class_exists(WhoopsRun::class)) {
            return;
        }

        $whoops = new WhoopsRun();

        $isJsonRequest = (new IsJsonRequest())->checkHttpAcceptString(
            httpAccept: (string) ($_SERVER['HTTP_ACCEPT'] ?? ''),
        );

        if (mb_strtolower(PHP_SAPI) === 'cli') {
            $handler = new PlainTextHandler();
        } elseif ($this->isJsonRequest()) {
            $handler = new JsonResponseHandler();
        } else {
            $handler = new PrettyPageHandler();
        }

        $whoops->prependHandler($handler);

        $whoops->register();
    }

    private function isJsonRequest(): bool
    {
        return (new IsJsonRequest())->checkHttpAcceptString(
            (string) ($_SERVER['HTTP_ACCEPT'] ?? ''),
        );
    }
}
