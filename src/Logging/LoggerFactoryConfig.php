<?php

declare(strict_types=1);

namespace MissionControlFrontend\Logging;

use function array_map;
use function array_values;

readonly class LoggerFactoryConfig
{
    /** @var HandlerFactoryClassReference[] */
    public array $factoryClassReferences;

    /** @param HandlerFactoryClassReference[] $factoryClassReferences */
    public function __construct(array $factoryClassReferences)
    {
        $this->factoryClassReferences = array_values(array_map(
            static fn (HandlerFactoryClassReference $f) => $f,
            $factoryClassReferences,
        ));
    }

    /** @return mixed[] */
    public function mapFactoryClassReferences(callable $callback): array
    {
        return array_values(array_map(
            $callback,
            $this->factoryClassReferences,
        ));
    }
}
