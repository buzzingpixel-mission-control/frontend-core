<?php

declare(strict_types=1);

namespace MissionControlFrontend;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Slim\Exception\HttpNotFoundException;

readonly class MustNotBeJsonRequestMiddleware implements MiddlewareInterface
{
    public function __construct(private IsJsonRequest $isJsonRequest)
    {
    }

    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler,
    ): ResponseInterface {
        if (
            $this->isJsonRequest->checkHttpAcceptString(
                $request->getHeader('Accept')[0] ?? '',
            )
        ) {
            throw new HttpNotFoundException($request);
        }

        return $handler->handle($request);
    }
}
