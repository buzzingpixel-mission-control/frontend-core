"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redirectToSignIn = function () {
    var query = new URLSearchParams({
        authReturn: encodeURI(window.location.href),
    });
    window.location.href = "/oauth2/authorize?".concat(query.toString());
};
exports.default = redirectToSignIn;
