<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use BuzzingPixel\Container\ConstructorParamConfig;

use function array_merge;
use function array_values;

class ContainerBindings
{
    /** @var array<string, string|callable|object> */
    private array $bindings = [];

    /** @var ConstructorParamConfig[] */
    private array $constructorParamConfigs = [];

    /** @return array<string, string|callable|object> */
    public function bindings(): array
    {
        return $this->bindings;
    }

    /** @return ConstructorParamConfig[] */
    public function constructorParamConfigs(): array
    {
        return $this->constructorParamConfigs;
    }

    /** @return $this */
    public function addBinding(string $key, string|callable|object $value): self
    {
        $this->bindings[$key] = $value;

        return $this;
    }

    /** @param array<string, string|callable|object> $bindings */
    public function addBindings(array $bindings): self
    {
        $this->bindings = array_merge(
            $this->bindings,
            $bindings,
        );

        return $this;
    }

    public function addConstructorParamConfig(
        ConstructorParamConfig $config,
    ): self {
        $this->constructorParamConfigs[] = $config;

        return $this;
    }

    /** @param ConstructorParamConfig[] $configs */
    public function addConstructorParamConfigs(array $configs): self
    {
        $this->constructorParamConfigs = array_merge(
            $this->constructorParamConfigs,
            array_values($configs),
        );

        return $this;
    }
}
