<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http\Api\AuthToken\Api;

use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;
use MissionControlFrontend\Http\Api\AuthToken\Api\AuthToken\AuthTokenIsHit;
use MissionControlFrontend\Url\ApiUrlGenerator;
use MissionControlFrontend\Url\QueryParams;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

readonly class SendApiRequest
{
    public function __construct(
        private Client $guzzle,
        private ApiUrlGenerator $apiUrlGenerator,
    ) {
    }

    public function run(
        ServerRequestInterface $request,
        AuthTokenIsHit $token,
    ): ResponseInterface {
        return $this->guzzle->request(
            $request->getMethod(),
            $this->apiUrlGenerator->generate(
                $request->getUri()->getPath(),
                new QueryParams($request->getQueryParams()),
            ),
            [
                RequestOptions::HEADERS => [
                    'Authorization' => $token->accessToken(),
                    'RequestType' => 'api',
                    'Accept' => 'application/json',
                ],
                RequestOptions::HTTP_ERRORS => false,
                RequestOptions::JSON => $request->getParsedBody() ?? [],
            ],
        );
    }
}
