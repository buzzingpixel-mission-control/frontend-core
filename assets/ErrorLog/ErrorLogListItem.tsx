import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import phpDateFormat from 'locutus/php/datetime/date';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { ErrorLogWithViewOptions } from './ErrorLogs';

function classNames (...classes: Array<string>) {
    return classes.filter(Boolean).join(' ');
}

const ErrorLogListItem = (
    {
        item,
        selectedItemsManager,
    }: {
        item: ErrorLogWithViewOptions;
        selectedItemsManager?: undefined | null | {
            selectedItems?: Array<string> | null | undefined;
            addSelectedItem?: (id: string) => void;
            removeSelectedItem?: (id: string) => void;
        };
    },
) => {
    let isSelected = false;

    if (selectedItemsManager?.selectedItems.indexOf(item.id) > -1) {
        isSelected = true;
    }

    let selectedClasses = '';

    if (isSelected) {
        selectedClasses = ' bg-green-50 shadow-lg';
    }

    return (
        <li className={`px-4${selectedClasses}`}>
            <div className="sm:flex items-center justify-between gap-x-6 py-5">
                <div className="min-w-0">
                    <div className="flex items-start gap-x-3">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            {item.message}
                        </p>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate">
                        <p>
                            {item.file}
                            :
                            {item.line}
                        </p>
                        <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        <p>
                            Last Error:
                            {' '}
                            <strong>
                                {item.lastErrorAtDate
                                    ? `${phpDateFormat('Y-m-d g:i A', item.lastErrorAtDate)}`
                                    : 'N/A'}
                            </strong>
                        </p>
                    </div>
                </div>
                <div className="mt-2 sm:mt-0 flex flex-none items-center gap-x-4">
                    <Link
                        to={item.href}
                        className="block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        View Details
                    </Link>
                    <Menu as="div" className="relative flex-none">
                        <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                            <span className="sr-only">Open options</span>
                            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                            >
                                <Menu.Item>
                                    {({ active }) => (
                                        <span
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'cursor-pointer block px-3 py-1 text-sm leading-6 text-gray-900',
                                            )}
                                            onClick={() => {
                                                // archiveMutation.mutate(undefined);
                                            }}
                                        >
                                            Delete
                                        </span>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    {(() => {
                        if (!selectedItemsManager) {
                            return null;
                        }

                        return (
                            <input
                                id={`select_${item.id}`}
                                name="ping_select[]"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
                                checked={isSelected}
                                onChange={(e) => {
                                    if (e.currentTarget.checked) {
                                        selectedItemsManager.addSelectedItem(
                                            item.id,
                                        );

                                        return;
                                    }

                                    selectedItemsManager.removeSelectedItem(
                                        item.id,
                                    );
                                }}
                            />
                        );
                    })()}
                </div>
            </div>
        </li>
    );
};

ErrorLogListItem.defaultProps = {
    selectedItemsManager: undefined,
};

export default ErrorLogListItem;
