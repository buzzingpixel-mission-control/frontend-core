import React, { useEffect, useState } from 'react';
import EditorParams from './EditorParams';
import EditorShell from '../EditorShell';
import FetchOptionsBuilder from '../FetchOptionsBuilder';

const SingleInputEditor = (
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
                case 'Enter':
                    e.preventDefault();
                    saveHandler();
                    break;
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

    return <EditorShell
        title={`Edit ${item.title}`}
        isSaving={isSaving}
        errorMessage={errorMessage}
        saveHandler={saveHandler}
        setEditorIsOpen={setEditorIsOpen}
    >
        <input
            type={item.editorInputType || 'text'}
            name="input"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
    </EditorShell>;
};

export default SingleInputEditor;
