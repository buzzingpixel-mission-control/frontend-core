/// <reference types="react" />
import MenuItem from './MenuItem';
declare const Shell: ({ pageName, menuItems, children, }: {
    pageName: string;
    menuItems?: Array<MenuItem>;
    children: JSX.Element | JSX.Element[] | string | string[];
}) => JSX.Element;
export default Shell;
