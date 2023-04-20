<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api\Refresh;

use Redis;

readonly class RefreshedAccessTokenTempStore
{
    public function __construct(private Redis $redis)
    {
    }

    private function compileKey(string $oldAccessToken): string
    {
        return 'refresh_token_tmp_store_' . $oldAccessToken;
    }

    public function get(string $oldAccessToken): string|false
    {
        return $this->redis->get(
            $this->compileKey($oldAccessToken),
        );
    }

    public function set(string $oldAccessToken, string $newAccessToken): void
    {
        $this->redis->setex(
            $this->compileKey($oldAccessToken),
            90,
            $newAccessToken,
        );
    }
}
