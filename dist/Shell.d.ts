/// <reference types="react" />
import MenuItem from './MenuItem';
declare const Shell: ({ menuItems, children, }: {
    menuItems?: Array<MenuItem>;
    children: JSX.Element | JSX.Element[] | string | string[];
}) => JSX.Element;
export default Shell;
