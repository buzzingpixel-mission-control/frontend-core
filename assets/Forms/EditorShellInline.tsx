import React, { Dispatch, SetStateAction, useEffect } from 'react';

const EditorShellInline = (
    {
        children,
        isSaving,
        saveHandler,
        errorMessage,
        setEditorIsOpen,
        submitButtonText,
    }: {
        isSaving: boolean;
        errorMessage?: string;
        saveHandler: () => void;
        setEditorIsOpen: Dispatch<SetStateAction<boolean>>;
        submitButtonText?: string;
        children: | JSX.Element | JSX.Element[] | string | string[];
    },
) => {
    let buttonBgClass = 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500';

    let spinnerSavingClass = 'opacity-0';

    if (isSaving) {
        buttonBgClass = 'bg-gray-600 focus:ring-gray-500';

        spinnerSavingClass = 'opacity-100';
    }

    return <div>
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
    </div>;
};

export default EditorShellInline;
