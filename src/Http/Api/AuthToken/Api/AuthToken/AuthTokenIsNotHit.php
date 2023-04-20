<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api\AuthToken;

use RuntimeException;

readonly class AuthTokenIsNotHit implements AuthToken
{
    public function isHit(): bool
    {
        return false;
    }

    public function tokenType(): string
    {
        throw new RuntimeException('Method not implemented');
    }

    public function expiresIn(): int
    {
        throw new RuntimeException('Method not implemented');
    }

    public function accessToken(): string
    {
        throw new RuntimeException('Method not implemented');
    }

    public function refreshToken(): string
    {
        throw new RuntimeException('Method not implemented');
    }
}
