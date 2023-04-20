import { Dispatch, SetStateAction } from 'react';
import ListItem from './ListItem';
type EditorParams = {
    setEditorIsOpen: Dispatch<SetStateAction<boolean>>;
    item: ListItem;
    setContent?: Dispatch<SetStateAction<string>>;
};
export default EditorParams;
