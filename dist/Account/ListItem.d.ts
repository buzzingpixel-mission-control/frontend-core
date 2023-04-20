/// <reference types="react" />
import EditorParams from './EditorParams';
type ListItem = {
    title: string;
    content: string;
    editText?: string;
    renderEditor?: (editorParams: EditorParams) => JSX.Element;
    editAction: string;
    editorInputType?: string;
};
export default ListItem;
