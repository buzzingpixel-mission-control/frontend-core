import React from 'react';
import NotFoundPage from '../NotFoundPage';
import { useBreadcrumbs } from '../RouteContext/RouteContext';
import ErrorPage from './ErrorPage';

// eslint-disable-next-line react/prop-types
const ErrorBoundaryPage = ({ error }) => {
    useBreadcrumbs([{
        name: 'Error',
        href: '#',
    }]);

    // eslint-disable-next-line react/prop-types
    if (error.statusCode === 404 || error?.response?.error?.code === 404) {
        return <NotFoundPage />;
    }

    return <ErrorPage />;
};

export default ErrorBoundaryPage;
