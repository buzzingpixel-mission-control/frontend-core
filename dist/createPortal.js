"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
var createPortal = function (children, container, key) {
    if (container === undefined) {
        container = document.body;
    }
    return (0, react_dom_1.createPortal)(children, container, key);
};
exports.default = createPortal;
