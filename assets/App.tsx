import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Shell from './Shell';
import AppConfig from './AppConfig';

const App = (
    {
        appConfig,
    }: {
        appConfig: AppConfig;
    },
) => <Router>
    <Shell menuItems={appConfig.menuItems()}>
        <Routes>
            {appConfig.routes()}
        </Routes>
    </Shell>
</Router>;

export default App;
