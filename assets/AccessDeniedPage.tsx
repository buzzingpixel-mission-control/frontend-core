import React from 'react';
import { Link } from 'react-router-dom';
import { useSetPageTitle } from './RouteContext/RouteContext';

const AccessDeniedPage = () => {
    const setPageTitle = useSetPageTitle();
    setPageTitle('Access Denied');

    return (
        <div>
            <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-900">
                You do not have access to that page
            </h1>
            <div className="mt-10">
                <Link to="/projects" className="text-sm font-semibold leading-7 text-cyan-600">
                    <span aria-hidden="true">&larr;</span>
                    {' '}
                    Go to projects
                </Link>
            </div>
        </div>
    );
};

export default AccessDeniedPage;
