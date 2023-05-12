import React from 'react';
import { useParams } from 'react-router-dom';
import {
    useCancelAllMutation,
    useCancelItemMutation,
    useQueueDetailsData,
} from './QueueDetailsData';
import PartialPageLoading from '../../PartialPageLoading';
import {
    useBreadcrumbs,
    useHidePageTitle,
    usePageTitle,
} from '../../RouteContext/RouteContext';

const QueueDetailsPage = () => {
    const { queueName } = useParams();

    const pageTitle = `Queue: ${queueName}`;

    useHidePageTitle(true);

    usePageTitle(pageTitle);

    useBreadcrumbs([
        {
            name: 'Queue Admin',
            href: '/queue-admin',
        },
        {
            name: pageTitle,
            href: `/queue-admin/${queueName}`,
        },
    ]);

    const {
        data,
        status,
    } = useQueueDetailsData(queueName);

    const cancelAll = useCancelAllMutation(
        queueName,
    );

    const cancelItem = useCancelItemMutation(
        queueName,
    );

    if (status === 'loading') {
        return <PartialPageLoading />;
    }

    return (
        <>
            <div className="border-b border-gray-200 pb-4">
                <div className="md:flex md:items-center md:justify-between md:space-x-5">
                    <div className="flex items-start space-x-5">
                        {/*
                          Use vertical padding to simulate center alignment when both lines of text are one line,
                          but preserve the same layout if the text wraps without making the image jump around.
                        */}
                        <div className="pt-1.5">
                            <h1 className="text-2xl font-normal text-gray-900">
                                Queue:
                                {' '}
                                <span className="font-bold">{queueName}</span>
                            </h1>
                            <p className="text-sm font-light text-gray-500">
                                Total items in queue:
                                {' '}
                                <span className="font-medium">{data.totalItemsInQueue}</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                            onClick={() => {
                                cancelAll.mutate(undefined);
                            }}
                        >
                            Cancel All Items
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-md shadow-sm px-4 mt-4">
                <ul className="divide-y divide-gray-100">
                    {data.items.map((item, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={`${item.handle}_${i}`}>
                            <div className="sm:flex items-center justify-between gap-x-6 py-5">
                                <div className="min-w-0">
                                    <div className="flex items-start gap-x-3">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate">
                                        <p>
                                            {item.handle}
                                        </p>
                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate font-bold">
                                        Jobs:
                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate">
                                        {item.jobs.map((job, jobI) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <code key={`${job.class}_${job.method}_${jobI}`}>
                                                {job.class}
                                                :
                                                {job.method}
                                            </code>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-2 sm:mt-0 flex flex-none items-center gap-x-4">
                                    <div className="mt-2 sm:mt-0 flex flex-none items-center gap-x-4">
                                        <button
                                            type="button"
                                            className="block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            onClick={() => {
                                                cancelItem.mutate(item.key);
                                            }}
                                        >
                                            Cancel Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default QueueDetailsPage;
