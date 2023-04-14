<?php

declare(strict_types=1);

namespace MissionControlFrontend;

// phpcs:disable SlevomatCodingStandard.TypeHints.ParameterTypeHint.MissingNativeTypeHint

use Psr\Log\LoggerInterface;
use Slim\Interfaces\ErrorHandlerInterface;

class BootHttpMiddlewareConfig
{
    /**
     * Typehinting $customProductionErrorMiddlewareHandler in code produces an error
     *
     * @param callable|ErrorHandlerInterface|string|null         $customProductionErrorMiddlewareHandler
     * @param LoggerInterface|class-string<LoggerInterface>|null $productionErrorMiddlewareLogger
     *
     * @noinspection PhpMissingParamTypeInspection
     */
    public function __construct(
        public bool $useProductionErrorMiddleware = true,
        public $customProductionErrorMiddlewareHandler = null,
        public LoggerInterface|string|null $productionErrorMiddlewareLogger = null,
    ) {
    }
}
