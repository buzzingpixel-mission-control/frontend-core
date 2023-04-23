"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var setPageName = function (value) {
    (0, react_1.useEffect)(function () {
        window.pageName = value;
        window.dispatchEvent(new Event('pageName'));
    });
};
exports.default = setPageName;
