<?php

declare(strict_types=1);

namespace MissionControlFrontend\Oauth2;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use HttpSoft\Cookie\CookieManagerInterface;
use MissionControlFrontend\ApplyRoutesEvent;
use MissionControlFrontend\Cookies\CookieCreator;
use MissionControlFrontend\Cookies\CookieValueRetriever;
use MissionControlFrontend\Http\HttpConfig;
use MissionControlFrontend\Url\UrlGenerator;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Exception\HttpBadRequestException;

readonly class GetCallbackAction
{
    public static function registerRoute(ApplyRoutesEvent $event): void
    {
        $event->get('/oauth2/callback', self::class);
    }

    public function __construct(
        private Client $guzzle,
        private HttpConfig $httpConfig,
        private UrlGenerator $urlGenerator,
        private CookieCreator $cookieCreator,
        private SessionStateHash $sessionStateHash,
        private CookieManagerInterface $cookieManager,
        private CookieValueRetriever $cookieValueRetriever,
    ) {
    }

    /** @throws GuzzleException */
    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response,
    ): ResponseInterface {
        $authReturn = (string) $this->cookieValueRetriever->retrieve(
            'auth_return',
            $this->urlGenerator->generate('/'),
        );

        $state = $request->getQueryParams()['state'] ?? '';

        if ($state !== $this->sessionStateHash->get()) {
            throw new HttpBadRequestException($request);
        }

        $request = $this->guzzle->post(
            $this->httpConfig->accessTokenPostUrl,
            [
                'form_params' => [
                    'grant_type' => 'authorization_code',
                    'client_id' => $this->httpConfig->webClientId,
                    'client_secret' => $this->httpConfig->webClientSecret,
                    'redirect_uri' => $this->httpConfig->webClientRedirectUri,
                    'code' => $request->getQueryParams()['code'] ?? '',
                ],
            ],
        );

        $this->cookieManager->set($this->cookieCreator->create(
            'auth_return',
            '',
            1,
        ));

        $this->cookieManager->set($this->cookieCreator->create(
            'auth_token',
            $request->getBody()->getContents(),
            httpOnly: false,
        ));

        return $response->withStatus(302)->withHeader(
            'Location',
            $authReturn,
        );
    }
}
