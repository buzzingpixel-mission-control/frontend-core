import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shell from './Shell';
import AppConfig from './AppConfig';
import NotFoundPage from './NotFound/NotFoundPage';

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

    return <Router>
        <Shell menuItems={appConfig.menuItems()} pageName={pageName}>
            <Routes>
                {appConfig.routes(setPageName)}
                <Route path="*" element={<NotFoundPage setPageName={setPageName} />}/>
            </Routes>
        </Shell>
    </Router>;
};

export default App;
