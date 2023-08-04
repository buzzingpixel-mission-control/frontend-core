import { useEffect } from 'react';

const useUpdateQueryStringValueWithoutNav = (
    queryKey: string,
    queryValue: string,
) => {
    useEffect(() => {
        const currentSearchParams = new URLSearchParams(window.location.search);
        const oldQuery = currentSearchParams.get(queryKey) ?? '';

        if (queryValue === oldQuery) {
            return;
        }

        if (queryValue) {
            currentSearchParams.set(queryKey, queryValue);
        } else {
            currentSearchParams.delete(queryKey);
        }

        const newUrl = [
            window.location.pathname,
            currentSearchParams.toString(),
        ].filter(Boolean).join('?');

        /**
         * Normally you'd update the params via useSearchParams from
         * react-router-dom and updating the search params will trigger the
         * search to update for you. However, it also triggers a navigation to
         * the new url, which will trigger a re-render. So we manually call
         * `window.history.pushState` to avoid that
         */
        window.history.replaceState(null, '', newUrl);
    }, [queryKey, queryValue]);
};

export default useUpdateQueryStringValueWithoutNav;
