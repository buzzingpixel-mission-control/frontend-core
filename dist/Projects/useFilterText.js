"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var useFilterText = function () {
    var _a;
    var _b = (0, react_router_dom_1.useSearchParams)(), searchParams = _b[0], setSearchParams = _b[1];
    var filterText = (_a = searchParams.get('filter')) !== null && _a !== void 0 ? _a : '';
    var setFilterText = function (val) {
        setSearchParams(function (params) {
            if (!val) {
                params.delete('filter');
            }
            else {
                params.set('filter', val);
            }
            return params;
        });
    };
    return [
        filterText,
        setFilterText,
    ];
};
exports.default = useFilterText;
