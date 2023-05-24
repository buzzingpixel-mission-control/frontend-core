import React from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Md5 } from 'ts-md5';
import ErrorBoundaryPage from './ErrorBoundaryPage';

const MissionControlErrorBoundary = (
    {
        children,
    }:
    {
        children: | JSX.Element | JSX.Element[] | string | string[];
    },
) => {
    const location = useLocation();

    return (
        <ErrorBoundary
            key={Md5.hashStr(JSON.stringify(location))}
            FallbackComponent={ErrorBoundaryPage}
        >
            {children}
        </ErrorBoundary>
    );
};

export default MissionControlErrorBoundary;
