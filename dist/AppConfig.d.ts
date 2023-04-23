/// <reference types="react" />
import MenuItem from './MenuItem';
type AppConfig = {
    appContainer: HTMLElement;
    menuItems: () => Array<MenuItem>;
    routes: () => JSX.Element | JSX.Element[] | string | string[];
};
export default AppConfig;
