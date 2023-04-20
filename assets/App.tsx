import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import Shell from './Shell';
import AppConfig from './AppConfig';
import NotFoundPage from './NotFound/NotFoundPage';
import Auth from './Auth/Auth';
import RuntimeContext from './RuntimeContext';

const queryClient = new QueryClient();

const App = (
    {
        appConfig,
    }: {
        appConfig: AppConfig;
    },
) => {
    const [
        pageName,
        setPageName,
    ] = useState('');

    useEffect(() => {
        let documentTitle = 'Mission Control';

        if (pageName) {
            documentTitle = `${pageName} | ${documentTitle}`;
        }

        document.title = documentTitle;
    }, [pageName]);

    const {
        todo,
    } = appConfig.appContainer.dataset;

    return <RuntimeContext.Provider value={{
        todo,
    }}>
        <QueryClientProvider client={queryClient}>
            <Auth>
                <Router>
                    <Shell menuItems={appConfig.menuItems()} pageName={pageName}>
                        <Routes>
                            {appConfig.routes(setPageName)}
                            <Route path="*" element={<NotFoundPage setPageName={setPageName} />}/>
                        </Routes>
                    </Shell>
                </Router>
            </Auth>
        </QueryClientProvider>
    </RuntimeContext.Provider>;
};

export default App;
