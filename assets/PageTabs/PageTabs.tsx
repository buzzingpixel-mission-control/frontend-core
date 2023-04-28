import React, { MouseEventHandler } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tab } from './Tab';

function classNames (...classes) {
    return classes.filter(Boolean).join(' ');
}

const PageTabs = (
    {
        tabs,
        rightHandButtons,
    }: {
        tabs: Array<Tab>;
        rightHandButtons?: Array<{
            key: string;
            text: string | JSX.Element;
            onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
        }>;
    },
) => {
    const navigate = useNavigate();

    return (
        <div className="mb-4">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
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
                {(() => {
                    if (!rightHandButtons) {
                        return null;
                    }

                    return (
                        <div className="text-right mt-2">
                            {rightHandButtons.map((button) => (
                                <button
                                    key={button.key}
                                    type="button"
                                    className="ml-2 my-1 inline-flex items-center block rounded-md bg-cyan-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                                    onClick={button.onClick}
                                >
                                    {button.text}
                                </button>
                            ))}
                        </div>
                    );
                })()}
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

                                    return (
                                        <tab.icon
                                            className={classNames(
                                                tab.current ? 'text-cyan-500' : 'text-gray-400 group-hover:text-gray-500',
                                                '-ml-0.5 mr-2 h-5 w-5',
                                            )}
                                            aria-hidden="true"
                                        />
                                    );
                                })()}
                                <span>{tab.name}</span>
                            </Link>
                        ))}
                        {(() => {
                            if (!rightHandButtons) {
                                return null;
                            }

                            return (
                                <div
                                    className="my-auto ml-auto text-right"
                                    style={{
                                        marginLeft: 'auto',
                                    }}
                                >
                                    {rightHandButtons.map((button) => (
                                        <button
                                            key={button.key}
                                            type="button"
                                            className="ml-2 my-1 inline-flex items-center block rounded-md bg-cyan-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                                            onClick={button.onClick}
                                        >
                                            {button.text}
                                        </button>
                                    ))}
                                </div>
                            );
                        })()}
                    </nav>
                </div>
            </div>
        </div>
    );
};

PageTabs.defaultProps = {
    rightHandButtons: undefined,
};

export default PageTabs;
