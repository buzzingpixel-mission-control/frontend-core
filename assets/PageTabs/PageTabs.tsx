import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tab } from './Tab';

function classNames (...classes) {
    return classes.filter(Boolean).join(' ');
}

const PageTabs = (
    {
        tabs,
    }: {
        tabs: Array<Tab>;
    },
) => {
    const navigate = useNavigate();

    return (
        <div className="mb-4">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                    onChange={(event) => {
                        navigate(event.target.value);
                    }}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name} value={tab.href}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.href}
                                to={tab.href}
                                className={classNames(
                                    tab.current
                                        ? 'border-cyan-500 text-cyan-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium',
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {(() => {
                                    if (!tab.icon) {
                                        return null;
                                    }

                                    return <tab.icon
                                        className={classNames(
                                            tab.current ? 'text-cyan-500' : 'text-gray-400 group-hover:text-gray-500',
                                            '-ml-0.5 mr-2 h-5 w-5',
                                        )}
                                        aria-hidden="true"
                                    />;
                                })()}
                                <span>{tab.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default PageTabs;
