import React, { MouseEventHandler } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';

const NoResultsAddItem = (
    {
        icon,
        headline,
        content,
        actionText,
        actionUsesPlusIcon,
        actionButtonOnClick,
    }: {
        icon?: JSX.Element;
        headline?: string | JSX.Element;
        content?: string | JSX.Element;
        actionText?: string | JSX.Element;
        actionUsesPlusIcon?: boolean;
        actionButtonOnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    },
) => <div className="text-center rounded-lg border-2 border-dashed border-gray-300 p-6">
    {(() => {
        if (!icon) {
            return null;
        }

        return <div className="mx-auto h-12 w-12 text-gray-400">
            {icon}
        </div>;
    })()}
    {(() => {
        if (!headline) {
            return null;
        }

        return <h3 className="mt-2 text-sm font-semibold text-gray-900">
            {headline}
        </h3>;
    })()}
    {(() => {
        if (!content) {
            return null;
        }

        return <p className="mt-1 text-sm text-gray-500">
            {content}
        </p>;
    })()}
    {(() => {
        if (!actionText) {
            return null;
        }

        return <div className="mt-6">
            <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                onClick={actionButtonOnClick}
            >
                {(() => {
                    if (!actionUsesPlusIcon) {
                        return null;
                    }

                    return <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />;
                })()}
                {actionText}
            </button>
        </div>;
    })()}
</div>;

export default NoResultsAddItem;
