import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ListItem from './ListItem';

const ListItemRenderer = ({ item }: { item: ListItem }) => {
    const [
        editorIsOpen,
        setEditorIsOpen,
    ] = useState<boolean>(false);

    const [
        content,
        setContent,
    ] = useState<string>(item.content);

    item.content = content;

    return <>
        {(() => {
            if (!editorIsOpen) {
                return null;
            }

            return <item.renderEditor
                setEditorIsOpen={setEditorIsOpen}
                item={item}
                setContent={setContent}
            />;
        })()}
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-bold text-gray-500">
                {item.title}
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {content}
                { (() => {
                    if (!item.renderEditor) {
                        return null;
                    }

                    return <button
                        className="float-right text-cyan-600 hover:text-cyan-800 hover:underline"
                        onClick={() => setEditorIsOpen(true)}
                    >
                        {item.editText || 'Edit'}
                    </button>;
                })() }
            </dd>
        </div>
    </>;
};

export default ListItemRenderer;
