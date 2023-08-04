"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useUpdateQueryStringValueWithoutNav = function (queryKey, queryValue) {
    (0, react_1.useEffect)(function () {
        var _a;
        var currentSearchParams = new URLSearchParams(window.location.search);
        var oldQuery = (_a = currentSearchParams.get(queryKey)) !== null && _a !== void 0 ? _a : '';
        if (queryValue === oldQuery) {
            return;
        }
        if (queryValue) {
            currentSearchParams.set(queryKey, queryValue);
        }
        else {
            currentSearchParams.delete(queryKey);
        }
        var newUrl = [
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
exports.default = useUpdateQueryStringValueWithoutNav;
