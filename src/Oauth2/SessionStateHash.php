<?php

declare(strict_types=1);

namespace MissionControlFrontend\Oauth2;

use function hash;
use function session_id;

class SessionStateHash
{
    public function get(): string
    {
        return hash('sha256', (string) session_id());
    }
}
