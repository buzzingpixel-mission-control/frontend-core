<?php

declare(strict_types=1);

namespace MissionControlFrontend\Oauth2;

use HttpSoft\Cookie\CookieManagerInterface;
use MissionControlFrontend\ApplyRoutesEvent;
use MissionControlFrontend\Cookies\CookieCreator;
use MissionControlFrontend\Http\HttpConfig;
use MissionControlFrontend\Url\IdpOAuthUrlGenerator;
use MissionControlFrontend\Url\QueryParams;
use MissionControlFrontend\Url\UrlGenerator;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

readonly class GetAuthorizeAction
{
    public static function registerRoute(ApplyRoutesEvent $event): void
    {
        $event->get('/oauth2/authorize', self::class);
    }

    public function __construct(
        private HttpConfig $httpConfig,
        private UrlGenerator $urlGenerator,
        private CookieCreator $cookieCreator,
        private SessionStateHash $sessionStateHash,
        private CookieManagerInterface $cookieManager,
        private IdpOAuthUrlGenerator $idpOAuthUrlGenerator,
    ) {
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response,
    ): ResponseInterface {
        $state = $this->sessionStateHash->get();

        $authReturn = $request->getQueryParams()['authReturn'] ??
            $this->urlGenerator->generate('/');

        $this->cookieManager->set($this->cookieCreator->create(
            'auth_return',
            $authReturn,
        ));

        return $response->withStatus(302)->withHeader(
            'Location',
            $this->idpOAuthUrlGenerator->generate(
                '/',
                new QueryParams([
                    'response_type' => 'code',
                    'client_id' => $this->httpConfig->webClientId,
                    'redirect_uri' => $this->httpConfig->webClientRedirectUri,
                    'scope' => 'mission_control_access',
                    'state' => $state,
                    'foo' => 'bar',
                ]),
            ),
        );
    }
}
