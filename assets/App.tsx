import React from 'react';
import { BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
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
