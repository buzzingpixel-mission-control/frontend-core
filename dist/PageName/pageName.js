"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var pageName = function () {
    var _a = (0, react_1.useState)(window.pageName || ''), pageName = _a[0], setPageName = _a[1];
    (0, react_1.useEffect)(function () {
        var pageNameChange = function () {
            setPageName(window.pageName);
        };
        window.addEventListener('pageName', pageNameChange);
        if (value !== undefined) {
            window.pageName = value;
            window.dispatchEvent(new Event('pageName'));
        }
        return function () {
            setPageName('');
            window.removeEventListener('pageName', pageNameChange);
        };
    });
    return pageName;
};
exports.default = pageName;
