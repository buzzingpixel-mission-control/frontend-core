"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var solid_1 = require("@heroicons/react/20/solid");
var react_dom_1 = require("react-dom");
var setPageName_1 = __importDefault(require("../PageName/setPageName"));
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../Api/useApiQueryWithSignInRedirect"));
var PartialPageLoading_1 = __importDefault(require("../PartialPageLoading"));
var Users_1 = require("./Users");
var AddUserOverlay_1 = __importDefault(require("./AddUserOverlay"));
var MinutesToMilliseconds_1 = __importDefault(require("../MinutesToMilliseconds"));
var EditUserOverlay_1 = __importDefault(require("./EditUserOverlay"));
var UserAdminPage = function () {
    (0, setPageName_1.default)('Users');
    var _a = (0, react_1.useState)(false), addUserIsOpen = _a[0], setAddUserIsOpen = _a[1];
    var _b = (0, react_1.useState)(false), editUser = _b[0], setEditUser = _b[1];
    var _c = (0, useApiQueryWithSignInRedirect_1.default)(['admin-user-list'], { uri: '/user-admin/all-users' }, {
        staleTime: (0, MinutesToMilliseconds_1.default)(5),
        zodValidator: Users_1.UsersSchema,
    }), status = _c.status, users = _c.data;
    if (status === 'loading') {
        return react_1.default.createElement(PartialPageLoading_1.default, null);
    }
    var portals = function () {
        if (addUserIsOpen) {
            return (0, react_dom_1.createPortal)(react_1.default.createElement(AddUserOverlay_1.default, { setIsOpen: setAddUserIsOpen }), document.body);
        }
        if (editUser) {
            return (0, react_dom_1.createPortal)(react_1.default.createElement(EditUserOverlay_1.default
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            , { 
                /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                // @ts-ignore
                user: editUser, setEditUser: setEditUser }), document.body);
        }
        return null;
    };
    if (users.length < 1) {
        return react_1.default.createElement(react_1.default.Fragment, null,
            portals(),
            react_1.default.createElement("div", { className: "text-center rounded-lg border-2 border-dashed border-gray-300 p-6" },
                react_1.default.createElement("div", { className: "mx-auto h-12 w-12 text-gray-400" },
                    react_1.default.createElement(solid_1.UserIcon, null)),
                react_1.default.createElement("h3", { className: "mt-2 text-sm font-semibold text-gray-900" }, "No users (except yourself)"),
                react_1.default.createElement("p", { className: "mt-1 text-sm text-gray-500" }, "Would you like to create a user?"),
                react_1.default.createElement("div", { className: "mt-6" },
                    react_1.default.createElement("button", { type: "button", className: "inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2", onClick: function () { setAddUserIsOpen(true); } },
                        react_1.default.createElement(solid_1.PlusIcon, { className: "-ml-1 mr-2 h-5 w-5", "aria-hidden": "true" }),
                        "Add New User"))));
    }
    return react_1.default.createElement(react_1.default.Fragment, null,
        portals(),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "flex items-center" },
                react_1.default.createElement("div", { className: "flex-auto" }),
                react_1.default.createElement("div", { className: "mt-4 sm:mt-0 sm:ml-16" },
                    react_1.default.createElement("button", { type: "button", className: "inline-flex items-center block rounded-md bg-cyan-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600", onClick: function () { setAddUserIsOpen(true); } },
                        react_1.default.createElement(solid_1.PlusIcon, { className: "-ml-1 mr-2 h-5 w-5", "aria-hidden": "true" }),
                        "Add New User"))),
            react_1.default.createElement("div", { className: "mt-8 flow-root" },
                react_1.default.createElement("div", { className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8" },
                    react_1.default.createElement("div", { className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" },
                        react_1.default.createElement("div", { className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg" },
                            react_1.default.createElement("table", { className: "min-w-full divide-y divide-gray-300" },
                                react_1.default.createElement("thead", { className: "bg-gray-50" },
                                    react_1.default.createElement("tr", null,
                                        react_1.default.createElement("th", { scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" }, "Name"),
                                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900" }, "Email"),
                                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900" }, "Is Admin?"),
                                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900" }, "Is Active?"),
                                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900" }, "Timezone"),
                                        react_1.default.createElement("th", { scope: "col", className: "relative py-3.5 pl-3 pr-4 sm:pr-6" },
                                            react_1.default.createElement("span", { className: "sr-only" }, "Edit")))),
                                react_1.default.createElement("tbody", { className: "divide-y divide-gray-200 bg-white" }, users.map(function (user) { return (react_1.default.createElement("tr", { key: user.id },
                                    react_1.default.createElement("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6" }, user.name),
                                    react_1.default.createElement("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, user.emailAddress),
                                    react_1.default.createElement("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, user.isAdmin ? 'Yes' : 'No'),
                                    react_1.default.createElement("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, user.isActive ? 'Yes' : 'No'),
                                    react_1.default.createElement("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500" }, user.timezone),
                                    react_1.default.createElement("td", { className: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6" },
                                        react_1.default.createElement("a", { href: "#", className: "text-cyan-600 hover:text-cyan-900", onClick: function () {
                                                setEditUser(user);
                                            } },
                                            "Edit",
                                            react_1.default.createElement("span", { className: "sr-only" },
                                                ", ",
                                                user.name || user.emailAddress))))); })))))))));
};
exports.default = UserAdminPage;
