<?php

declare(strict_types=1);

namespace MissionControlFrontend;

readonly class CoreConfig
{
    public function __construct(
        public bool $useWhoopsErrorHandling,
    ) {
    }
}
