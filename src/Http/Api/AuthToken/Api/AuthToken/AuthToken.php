<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api\AuthToken;

interface AuthToken
{
    public function isHit(): bool;

    public function tokenType(): string;

    public function expiresIn(): int;

    public function accessToken(): string;

    public function refreshToken(): string;
}
