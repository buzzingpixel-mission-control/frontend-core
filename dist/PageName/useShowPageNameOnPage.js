"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useShowPageNameOnPage = function () {
    var _a = (0, react_1.useState)(window.showPageNameOnPage || true), showPageNameOnPage = _a[0], setShowPageNameOnPage = _a[1];
    (0, react_1.useEffect)(function () {
        if (window.showPageNameOnPage !== showPageNameOnPage) {
            setShowPageNameOnPage(window.showPageNameOnPage);
        }
        var pageNameChange = function () {
            setShowPageNameOnPage(window.showPageNameOnPage);
        };
        window.addEventListener('pageName', pageNameChange);
        return function () {
            window.removeEventListener('pageName', pageNameChange);
        };
    });
    return showPageNameOnPage;
};
exports.default = useShowPageNameOnPage;
