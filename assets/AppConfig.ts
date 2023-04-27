import MenuItem from './MenuItem';

type AppConfig = {
    appContainer: HTMLElement,
    menuItems: () => Array<MenuItem>,
    routes: () => | JSX.Element | JSX.Element[] | string | string[],
    boot?: () => void,
}

export default AppConfig;
