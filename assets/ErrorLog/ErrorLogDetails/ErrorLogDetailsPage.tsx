import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import phpDateFormat from 'locutus/php/datetime/date';
import { useBreadcrumbs, useHidePageTitle, usePageTitle } from '../../RouteContext/RouteContext';
import { useErrorLogDetailsData } from './ErrorLogDetailsData';
import PartialPageLoading from '../../PartialPageLoading';

const ErrorLogDetailsPage = () => {
    const { id } = useParams();

    useHidePageTitle(true);

    const [
        pageNameState,
        setPageNameState,
    ] = useState(
        'Loading Error Log Item Details…',
    );

    usePageTitle(pageNameState);

    useBreadcrumbs([
        {
            name: 'Error Logs',
            href: '/error-logs',
        },
        {
            name: pageNameState,
            href: `/error-logs/${id}`,
        },
    ]);

    const {
        status,
        data,
    } = useErrorLogDetailsData(id);

    if (status === 'loading') {
        return <PartialPageLoading />;
    }

    const pageName = `Error Log: ${data.id}`;

    if (pageNameState !== pageName) {
        setPageNameState(pageName);
    }

    return (
        <div className="max-w-6xl">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">
                                ID
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {data.id}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">
                                Last Error At
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {data.lastErrorAtDate
                                    ? `${phpDateFormat('Y-m-d g:i A', data.lastErrorAtDate)}`
                                    : 'N/A'}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">
                                Message
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {data.message}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">
                                File
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {data.file}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">
                                Line
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {data.line}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight mb-2">
                    Trace
                </h2>
                <div className="bg-slate-700 p-10 text-slate-100 sm:rounded-lg overflow-auto">
                    <pre>
                        <code>
                            {data.trace}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ErrorLogDetailsPage;
