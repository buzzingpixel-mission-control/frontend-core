<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use function explode;
use function in_array;

class IsJsonRequest
{
    public function checkHttpAcceptString(string $httpAccept): bool
    {
        $httpAccept = $httpAccept !== '' ? $httpAccept : 'text/html';

        $acceptArray = explode(',', $httpAccept);

        return in_array(
            'application/json',
            $acceptArray,
            true,
        );
    }
}
