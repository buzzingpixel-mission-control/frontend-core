<?php

declare(strict_types=1);

namespace MissionControlFrontend\Url;

use Spatie\Cloneable\Cloneable;

use function count;
use function http_build_query;

class QueryParams
{
    use Cloneable;

    /** @param array<string, scalar> $params */
    public function __construct(
        public array $params = [],
    ) {
    }

    public function withParam(string $key, string $value): static
    {
        $params = $this->params;

        $params[$key] = $value;

        return $this->with(params: $params);
    }

    public function count(): int
    {
        return count($this->params);
    }

    public function asString(
        string|null $prefixUrl = null,
    ): string {
        $paramsString = http_build_query($this->params);

        if ($prefixUrl === null) {
            return $paramsString;
        }

        return $prefixUrl . '?' . http_build_query($this->params);
    }
}
