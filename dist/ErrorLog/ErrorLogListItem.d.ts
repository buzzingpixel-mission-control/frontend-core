/// <reference types="react" />
import { ErrorLogWithViewOptions } from './ErrorLogs';
declare const ErrorLogListItem: {
    ({ item, selectedItemsManager, }: {
        item: ErrorLogWithViewOptions;
        selectedItemsManager?: {
            selectedItems?: Array<string> | null | undefined;
            addSelectedItem?: (id: string) => void;
            removeSelectedItem?: (id: string) => void;
        };
    }): JSX.Element;
    defaultProps: {
        selectedItemsManager: any;
    };
};
export default ErrorLogListItem;
