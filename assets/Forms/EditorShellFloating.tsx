import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Dialog } from '@headlessui/react';

const EditorShellFloating = (
    {
        title,
        children,
        isSaving,
        saveHandler,
        errorMessage,
        setEditorIsOpen,
        submitButtonText,
    }: {
        title: string;
        isSaving: boolean;
        errorMessage: string;
        saveHandler: () => void;
        setEditorIsOpen: Dispatch<SetStateAction<boolean>>;
        submitButtonText?: string;
        children: | JSX.Element | JSX.Element[] | string | string[];
    },
) => {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    e.preventDefault();
                    setEditorIsOpen(false);
                    break;
                default:
            }
        };

        window.addEventListener('keydown', handler);

        return () => window.removeEventListener('keydown', handler);
    });

    let buttonBgClass = 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500';

    let spinnerSavingClass = 'opacity-0';

    if (isSaving) {
        buttonBgClass = 'bg-gray-600 focus:ring-gray-500';

        spinnerSavingClass = 'opacity-100';
    }

    return <div className="relative z-50">
        <Dialog as="div" className="relative z-50" open={true} onClose={() => null}>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Dialog.Panel
                        className="relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg sm:p-6">
                        <div>
                            <div className="text-center">
                                {(() => {
                                    if (!errorMessage) {
                                        return null;
                                    }

                                    return <div className="rounded-md bg-red-50 p-4 mb-2">
                                        <h3 className="text-sm font-medium text-red-800">
                                            {errorMessage}
                                        </h3>
                                    </div>;
                                })()}
                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    {title}
                                </Dialog.Title>
                                <div className="mt-2">
                                    {children}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                                type="button"
                                className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-start-2 sm:text-sm ${buttonBgClass}`}
                                onClick={saveHandler}
                            >
                                <div
                                    className={`inline-block align-middle h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent text-info motion-reduce:animate-[spin_1.5s_linear_infinite] ${spinnerSavingClass}`}
                                    style={{ marginTop: '0.25rem' }}
                                    role="status"
                                >
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >
                                        Loading...
                                    </span>
                                </div>
                                <span className="ml-1 inline-block align-middle">
                                    {submitButtonText || 'Update'}
                                </span>
                                <div
                                    className="inline-block align-middle h-3 w-3"
                                    style={{ marginTop: '0.25rem' }}
                                    role="status"
                                >
                                </div>
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                                onClick={() => setEditorIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    </div>;
};
export default EditorShellFloating;
