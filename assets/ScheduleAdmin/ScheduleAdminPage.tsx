import React from 'react';
import { StopCircleIcon } from '@heroicons/react/20/solid';
import { usePageTitle } from '../RouteContext/RouteContext';
import { useScheduleAdminData } from './ScheduleAdminData';
import PartialPageLoading from '../PartialPageLoading';
import NoResultsAddItem from '../NoResultsAddItem';

const ScheduleAdminPage = () => {
    usePageTitle('Schedule Admin');

    const {
        status,
        data,
    } = useScheduleAdminData();

    if (status === 'loading') {
        return <PartialPageLoading />;
    }

    if (data.length < 1) {
        return (
            <NoResultsAddItem
                icon={<StopCircleIcon />}
                headline="There are no scheduled items"
            />
        );
    }

    return (
        <div className="bg-white rounded-md shadow-sm px-4">
            <ul className="divide-y divide-gray-100">
                {data.map((item) => (
                    <li key={item.key}>
                        <div className="sm:flex items-center justify-between gap-x-6 py-5">
                            <div className="min-w-0">
                                <div className="flex items-start gap-x-3">
                                    {item.class}
                                    :
                                    {item.method}
                                </div>
                                <div className="mt-1 items-center gap-x-2 text-xs leading-5 text-gray-500 font-light truncate">
                                    <p>
                                        Last run start:
                                        {' '}
                                        <span className="font-bold">{item.lastRunStartAt ? item.lastRunStartAt.toString() : ''}</span>
                                    </p>
                                    <p>
                                        Last run end:
                                        {' '}
                                        <span className="font-bold">{item.lastRunEndAt ? item.lastRunEndAt.toString() : ''}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScheduleAdminPage;
