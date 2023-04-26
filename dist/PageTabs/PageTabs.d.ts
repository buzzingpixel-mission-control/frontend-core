import { MouseEventHandler } from 'react';
import { Tab } from './Tab';
declare const PageTabs: ({ tabs, rightHandButtons, }: {
    tabs: Array<Tab>;
    rightHandButtons?: Array<{
        key: string;
        text: string | JSX.Element;
        onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    }>;
}) => JSX.Element;
export default PageTabs;
