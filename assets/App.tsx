import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Shell from './Shell';
import AppConfig from './AppConfig';
import Auth from './Auth/Auth';
import RuntimeContext from './RuntimeContext';
import FrontEndCoreRoutes from './FrontEndCoreRoutes';
import FrontEndCoreMenuItems from './FrontEndCoreMenuItems';
import { RouteContextProvider } from './RouteContext/RouteContext';
import FullPageLoading from './FullPageLoading';

const queryClient = new QueryClient();

const App = (
    {
        appConfig,
    }: {
        appConfig: AppConfig;
    },
) => {
    const {
        todo,
    } = appConfig.appContainer.dataset;

    const [
        bootHasRun,
        setBootHasRun,
    ] = useState(false);

    useEffect(() => {
        if (!appConfig.boot) {
            setBootHasRun(true);

            return;
        }

        appConfig.boot();

        setBootHasRun(true);
    }, []);

    if (!bootHasRun) {
        return <FullPageLoading />;
    }

    return <RuntimeContext.Provider value={{
        todo,
    }}>
        <QueryClientProvider client={queryClient}>
            <Auth>
                <Router>
                    <RouteContextProvider>
                        <Shell menuItems={[
                            ...FrontEndCoreMenuItems(),
                            ...appConfig.menuItems(),
                        ]}>
                            <Routes>
                                {appConfig.routes()}
                                {FrontEndCoreRoutes()}
                            </Routes>
                        </Shell>
                    </RouteContextProvider>
                </Router>
            </Auth>
            {/*
                By default, React Query Devtools are only included in
                bundles when process.env.NODE_ENV === 'development', so you
                don't need to worry about excluding them during a production
                build. -- https://tanstack.com/query/v4/docs/devtools
            */}
            <ReactQueryDevtools />
        </QueryClientProvider>
    </RuntimeContext.Provider>;
};

export default App;
