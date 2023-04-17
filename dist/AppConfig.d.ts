import { Dispatch, SetStateAction } from 'react';
import MenuItem from './MenuItem';
type AppConfig = {
    menuItems: () => Array<MenuItem>;
    routes: (setPageName: Dispatch<SetStateAction<string>>) => JSX.Element | JSX.Element[] | string | string[];
};
export default AppConfig;
