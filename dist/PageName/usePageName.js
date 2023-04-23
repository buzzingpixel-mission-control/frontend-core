"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var usePageName = function () {
    var _a = (0, react_1.useState)(window.pageName || ''), pageName = _a[0], setPageName = _a[1];
    (0, react_1.useEffect)(function () {
        if (window.pageName !== pageName) {
            setPageName(window.pageName);
        }
        var pageNameChange = function () {
            setPageName(window.pageName);
        };
        window.addEventListener('pageName', pageNameChange);
        return function () {
            window.removeEventListener('pageName', pageNameChange);
        };
    });
    return pageName;
};
exports.default = usePageName;
