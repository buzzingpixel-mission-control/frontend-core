import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import EditorParams from './EditorParams';
import FetchOptionsBuilder from '../FetchOptionsBuilder';
import useApiQuery from '../Api/useApiQuery';
import EditorShellFloating from '../Forms/EditorShellFloating';

type Option = {
    value: string;
    label: string;
};

type Options = Array<Option>;

const TimezoneEditor = (
    {
        setEditorIsOpen,
        item,
        setContent,
    }: EditorParams,
) => {
    const [
        value,
        setValue,
    ] = useState<string>(item.content);

    const [
        isSaving,
        setIsSaving,
    ] = useState<boolean>(false);

    const [
        errorMessage,
        setErrorMessage,
    ] = useState<string>('');

    const saveHandler = () => {
        if (isSaving) {
            return;
        }

        setIsSaving(true);

        fetch(item.editAction, FetchOptionsBuilder({
            value,
        }))
            .then(async (res) => {
                const json = await res.json();

                if (!res.ok) {
                    setIsSaving(false);

                    setErrorMessage(
                        json.message
                        || json.error.message
                        || 'An unknown error occurred',
                    );

                    return;
                }

                if (setContent) {
                    setContent(value);
                }

                setEditorIsOpen(false);
            })
            .catch(() => {
                setIsSaving(false);

                setErrorMessage('An unknown error occurred');
            });
    };

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

    const {
        status: timezoneListStatus,
        data: timezoneListData,
    } = useApiQuery<Options>(
        ['timezone-list'],
        { uri: '/utility/timezone-list' },
        { staleTime: Infinity },
    );

    if (timezoneListStatus === 'loading') {
        return (
            <EditorShellFloating
                title={`Edit ${item.title}`}
                isSaving={isSaving}
                errorMessage={errorMessage}
                saveHandler={saveHandler}
                setEditorIsOpen={setEditorIsOpen}
            >
                <div
                    className="inline-block align-middle h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent text-info motion-reduce:animate-[spin_1.5s_linear_infinite] opacity-100 text-cyan-600"
                    role="status"
                >
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >
                        Loading...
                    </span>
                </div>
            </EditorShellFloating>
        );
    }

    return (
        <EditorShellFloating
            title={`Edit ${item.title}`}
            isSaving={isSaving}
            errorMessage={errorMessage}
            saveHandler={saveHandler}
            setEditorIsOpen={setEditorIsOpen}
        >
            <div className="text-left">
                <Select
                    options={timezoneListData}
                    value={timezoneListData.filter((option) => option.value === value)[0]}
                    onChange={(selected: Option) => {
                        setValue(selected.value);
                    }}
                    className="react-select-control"
                />
            </div>
        </EditorShellFloating>
    );
};

export default TimezoneEditor;
