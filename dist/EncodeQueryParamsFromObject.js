"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EncodeQueryParamsFromObject = function (queryParams) {
    var keys = Object.keys(queryParams);
    var queryArray = [];
    keys.forEach(function (key) {
        var val = queryParams[key];
        if (Array.isArray(val)) {
            val.forEach(function (innerVal) {
                queryArray.push("".concat(key, "[]=").concat(encodeURI(innerVal)));
            });
            return;
        }
        queryArray.push("".concat(key, "=").concat(encodeURI(val)));
    });
    return queryArray.join('&');
};
exports.default = EncodeQueryParamsFromObject;
