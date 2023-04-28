/// <reference types="react" />
import MenuItem from './MenuItem';
declare const Shell: {
    ({ menuItems, children, }: {
        menuItems?: Array<MenuItem>;
        children: JSX.Element | JSX.Element[] | string | string[];
    }): JSX.Element;
    defaultProps: {
        menuItems: any[];
    };
};
export default Shell;
