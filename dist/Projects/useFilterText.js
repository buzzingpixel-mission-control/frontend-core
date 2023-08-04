"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var useUpdateQueryStringValueWithoutNav_1 = __importDefault(require("../useUpdateQueryStringValueWithoutNav"));
var useFilterText = function () {
    var _a;
    var searchParams = (0, react_router_dom_1.useSearchParams)()[0];
    var _b = (0, react_1.useState)((_a = searchParams.get('filter')) !== null && _a !== void 0 ? _a : ''), filterText = _b[0], setFilterText = _b[1];
    (0, useUpdateQueryStringValueWithoutNav_1.default)('filter', filterText);
    return [
        filterText,
        setFilterText,
    ];
};
exports.default = useFilterText;
