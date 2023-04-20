<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api\Refresh;

use Redis;
use RuntimeException;

use function sleep;

readonly class TokenRefreshLock
{
    public function __construct(private Redis $redis)
    {
    }

    private function compileLockKey(string $accessToken): string
    {
        return 'refresh_token_lock_' . $accessToken;
    }

    public function acquireLock(string $accessToken): void
    {
        $tries = 0;

        $lockKey = $this->compileLockKey($accessToken);

        do {
            $lockObtained = $this->redis->setnx($lockKey, 'true');

            if ($lockObtained) {
                $this->redis->expire($lockKey, 60);

                return;
            }

            $tries += 1;

            sleep(1);
        } while ($tries < 65);

        throw new RuntimeException('Could not acquire lock');
    }

    public function releaseLock(string $accessToken): void
    {
        $this->redis->del(
            $this->compileLockKey($accessToken),
        );
    }
}
