import { useEffect } from 'react';

declare global {
    interface Window { pageName: string; }
}

const setPageName = (value: string) => {
    useEffect(() => {
        window.pageName = value;

        window.dispatchEvent(new Event('pageName'));
    });
};

export default setPageName;
