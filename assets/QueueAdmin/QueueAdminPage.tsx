import React from 'react';
import { Link } from 'react-router-dom';
import { StopCircleIcon } from '@heroicons/react/20/solid';
import { usePageTitle } from '../RouteContext/RouteContext';
import { useQueueAdminData } from './QueueAdminData';
import PartialPageLoading from '../PartialPageLoading';
import NoResultsAddItem from '../NoResultsAddItem';

const QueueAdminPage = () => {
    usePageTitle('Queue Admin');

    const {
        data,
        status,
    } = useQueueAdminData();

    if (status === 'loading') {
        return <PartialPageLoading />;
    }

    if (data.length < 1) {
        return (
            <NoResultsAddItem
                icon={<StopCircleIcon />}
                headline="There are no queues"
            />
        );
    }

    return (
        <div className="bg-white rounded-md shadow-sm px-4">
            <ul className="divide-y divide-gray-100">
                {data.map((queue) => (
                    <li key={queue.queue}>
                        <div className="sm:flex items-center justify-between gap-x-6 py-5">
                            <div className="min-w-0">
                                <div className="flex items-start gap-x-3">
                                    {queue.queue}
                                </div>
                                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate">
                                    <p>
                                        Total items in queue:
                                        {' '}
                                        {queue.totalItemsInQueue}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 sm:mt-0 flex flex-none items-center gap-x-4">
                                <Link
                                    to={`/queue-admin/${queue.queue}`}
                                    className="block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    Manage Queue
                                    <span className="sr-only">
                                        ,
                                        {queue.queue}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QueueAdminPage;
