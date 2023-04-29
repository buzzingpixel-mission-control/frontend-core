# Mission Control Frontend Core

This package contains Mission Control's base setup functionality for the frontend.

There are two components to this package: 1. the PHP server side, which does some very light things on the server, and, 2. the React package, which is the bulk of this project.

## PHP

Use composer to require it into your project.

```shell
composer require buzzingpixel/mission-control-frontend-core
```

In your web entry point front controller (usually `index.php` in the public directory), boot up and run the HTTP application like so:

```php
<?php

declare(strict_types=1);

use MissionControlFrontend\Boot;
use MissionControlFrontendApp\Config\BootHttpMiddlewareConfigFactory;
use MissionControlFrontendApp\Config\CoreConfigFactory;
use MissionControlFrontendApp\Config\Dependencies\DependencyBindings;
use MissionControlFrontendApp\Config\Events\EventRegistration;

require dirname(__DIR__) . '/vendor/autoload.php';

(new Boot())
    // The first argument of `start` must be an instance of
    // `\MissionControlFrontend\CoreConfig` and is required
    ->start((new CoreConfigFactory())->create())
    // The first argument of `buildContainer` accepts a callable that receives
    // an instance of `\MissionControlFrontend\ContainerBindings` which you can
    // use to register container bindings
    ->buildContainer([DependencyBindings::class, 'register'])
    // The first argument of `registerEvents` accepts a callable that receives
    // an instance of `\Crell\Tukio\OrderedProviderInterface` which you can use
    // to register events.
    ->registerEvents([EventRegistration::class, 'register'])
    ->buildHttpApplication()
    ->applyRoutes()
    // The first argument of `applyMiddleware` must be an instance of
    // `\MissionControlFrontend\BootHttpMiddlewareConfig` and is required
    ->applyMiddleware((new BootHttpMiddlewareConfigFactory())->create())
    ->runApplication();
```

As you can see from the example, certain parts of the boot process accept or require arguments, it's up to you how to implement those. See the Dev environment for a working example: https://github.com/buzzingpixel-mission-control/dev

### PHP Dependencies and events

There are a number of dependencies and events needed. As you start up the application for the first time, the exception messages should be pretty clear what you need to set up as they are encountered. See https://github.com/buzzingpixel-mission-control/dev for a better idea.

This project is primarily for me so, it's hard to muster up the gumption to write full documentation at this time.

## CSS

This project and any packages will rely on Tailwind being compiled and built for the project with `@tailwindcss/typography` and `@tailwindcss/forms`, and a URL to the compiled CSS supplied through the event `\MissionControlFrontend\Http\ApplyHttpConfigEvent`. Your tailwind `content` config should look for tailwind classes in any js, jsx, ts, and tsx files it finds in this and other Mission Control packages. See https://github.com/buzzingpixel-mission-control/dev for a working example.

## React/JavaScript

All source code is written in Typescript and typed as such.

In order to keep things as flexible as possible, you have to start the process of loading the page off. You'll need to use `npm` or `yarn` to assemble this base package and any other package you want and you'll need to build the Javascript. I'm using webpack in https://github.com/buzzingpixel-mission-control/dev which you can consult for an example.

In your entrypoint file, you need to grab the app container the php side renders which has a data attribute of `data-react="app"`, and kick off the rendering process with the `<App />` JSX component, which requires an `AppConfig` object to be supplied to it.

Here's an Example:

`AppConfigFactory.tsx`:
```tsx
import React from 'react';
import {
    AppConfig,
    addProjectDetailsSection,
} from 'buzzingpixel-mission-control-frontend-core';
import { Route } from 'react-router';
import HelloWorld from './HelloWorld';

const AppConfigFactory = (appContainer: HTMLElement): AppConfig => ({
    // Provide the app container, which we're passing in from the caller here
    appContainer,
    // Provide any menu items from packages here, or supply your own as in this example
    menuItems: () => [
        {
            name: 'Hello World',
            href: '/hello-world',
        },
    ],
    routes: () => <>
        {/* Add any routes from packages */}

        {/* Example local route if you wanted to add your own */}
        <Route path="/hello-world" element={<HelloWorld />} />
    </>,
    // Put anything here you need to run at app boot from package or your own stuff
    boot: () => {
        addProjectDetailsSection({
            uniqueKey: 'TestProjectDetails',
            render: TestProjectDetails,
        });
    },
});

export default AppConfigFactory;
```

`index.tsx` (entry point):

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'buzzingpixel-mission-control-frontend-core';
import AppConfigFactory from './AppConfigFactory';

const appContainer = document.querySelector(
    '[data-react="app"]',
) as HTMLElement;

const root = createRoot(appContainer);

root.render(<App appConfig={AppConfigFactory(appContainer)} />);
```

And, as with the CSS, you'll need to supply a URL to the compiled Javascript through the event on the PHP side `\MissionControlFrontend\Http\ApplyHttpConfigEvent`.

This project is primarily for me so, it's hard to muster up the gumption to write full documentation at this time.
