<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api\AuthToken;

use Spatie\Cloneable\Cloneable;

readonly class AuthTokenIsHit implements AuthToken
{
    use Cloneable;

    /** @param array<array-key, string|int> $array */
    public static function fromArray(array $array): self
    {
        return new self(
            (string) $array['token_type'],
            (int) $array['expires_in'],
            (string) $array['access_token'],
            (string) $array['refresh_token'],
        );
    }

    public function __construct(
        private string $tokenType,
        private int $expiresIn,
        private string $accessToken,
        private string $refreshToken,
    ) {
    }

    public function isHit(): bool
    {
        return true;
    }

    public function tokenType(): string
    {
        return $this->tokenType;
    }

    public function expiresIn(): int
    {
        return $this->expiresIn;
    }

    public function accessToken(): string
    {
        return $this->accessToken;
    }

    public function withAccessToken(string $accessToken): self
    {
        return $this->with(accessToken: $accessToken);
    }

    public function refreshToken(): string
    {
        return $this->refreshToken;
    }
}
