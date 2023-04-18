"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useSignIn = function () {
    var query = new URLSearchParams({
        authReturn: encodeURI(window.location.href),
    });
    (0, react_1.useEffect)(function () {
        window.location.href = "/?".concat(query.toString());
    }, []);
};
exports.default = useSignIn;
