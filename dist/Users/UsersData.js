"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUsersData = exports.AdminStatus = exports.ActiveStatus = void 0;
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../Api/useApiQueryWithSignInRedirect"));
var Users_1 = require("../UserAdmin/Users");
var MinutesToMilliseconds_1 = __importDefault(require("../MinutesToMilliseconds"));
var EncodeQueryParamsFromObject_1 = __importDefault(require("../EncodeQueryParamsFromObject"));
var ActiveStatus;
(function (ActiveStatus) {
    ActiveStatus["ALL"] = "all";
    ActiveStatus["ACTIVE"] = "active";
    ActiveStatus["INACTIVE"] = "inactive";
})(ActiveStatus = exports.ActiveStatus || (exports.ActiveStatus = {}));
var AdminStatus;
(function (AdminStatus) {
    AdminStatus["ALL"] = "all";
    AdminStatus["IS_ADMIN"] = "is_admin";
    AdminStatus["IS_NOT_ADMIN"] = "is_not_admin";
})(AdminStatus = exports.AdminStatus || (exports.AdminStatus = {}));
var useUsersData = function (active_status, admin_status) {
    if (active_status === void 0) { active_status = ActiveStatus.ALL; }
    if (admin_status === void 0) { admin_status = AdminStatus.ALL; }
    var uri = '/users/list';
    var queryParams = {
        active_status: active_status,
        admin_status: admin_status,
    };
    return (0, useApiQueryWithSignInRedirect_1.default)(["".concat(uri, "?").concat((0, EncodeQueryParamsFromObject_1.default)(queryParams))], {
        uri: uri,
        queryParams: queryParams,
    }, {
        staleTime: (0, MinutesToMilliseconds_1.default)(5),
        zodValidator: Users_1.UsersSchema,
    });
};
exports.useUsersData = useUsersData;
