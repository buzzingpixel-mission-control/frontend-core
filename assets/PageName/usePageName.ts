import { useEffect, useState } from 'react';

declare global {
    interface Window { pageName: string; }
}

const usePageName = () => {
    const [
        pageName,
        setPageName,
    ] = useState(window.pageName || '');

    useEffect(() => {
        if (window.pageName !== pageName) {
            setPageName(window.pageName);
        }

        const pageNameChange = () => {
            setPageName(window.pageName);
        };

        window.addEventListener('pageName', pageNameChange);

        return () => {
            window.removeEventListener('pageName', pageNameChange);
        };
    });

    return pageName;
};

export default usePageName;
