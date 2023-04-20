"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FetchOptionsBuilder = function (jsonObject, method) {
    if (method === void 0) { method = 'POST'; }
    var headers = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
    });
    return {
        redirect: 'manual',
        method: method,
        headers: headers,
        body: JSON.stringify(jsonObject),
    };
};
exports.default = FetchOptionsBuilder;
