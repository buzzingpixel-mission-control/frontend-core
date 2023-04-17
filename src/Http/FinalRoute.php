<?php

declare(strict_types=1);

namespace MissionControlFrontend\Http;

use BuzzingPixel\Templating\TemplateEngineFactory;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

readonly class FinalRoute
{
    public function __construct(
        private HttpConfig $config,
        private TemplateEngineFactory $templateEngineFactory,
    ) {
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response,
    ): ResponseInterface {
        $response->getBody()->write(
            $this->templateEngineFactory->create()
                ->templatePath(__DIR__ . '/FinalRoute.phtml')
                ->addVar('config', $this->config)
                ->render(),
        );

        return $response;
    }
}
