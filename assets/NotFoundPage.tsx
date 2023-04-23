import React from 'react';
import { Link } from 'react-router-dom';
import setPageName from './PageName/setPageName';

const NotFoundPage = () => {
    setPageName('404');

    return <div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Something seems to be wrong, we weren’t able to find that
            page.</p>
        <div className="mt-10">
            <Link to="/projects" className="text-sm font-semibold leading-7 text-cyan-600">
                <span aria-hidden="true">&larr;</span> Go to projects
            </Link>
        </div>
    </div>;
};

export default NotFoundPage;
