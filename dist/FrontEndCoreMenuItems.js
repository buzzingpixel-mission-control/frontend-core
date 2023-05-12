"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var outline_1 = require("@heroicons/react/24/outline");
var FrontEndCoreMenuItems = function () { return [
    {
        name: 'User Admin',
        href: '/user-admin',
        icon: outline_1.UserGroupIcon,
        requiresAdminPrivileges: true,
    },
    {
        name: 'Queue Admin',
        href: '/queue-admin',
        icon: outline_1.QueueListIcon,
        requiresAdminPrivileges: true,
    },
    {
        name: 'Projects',
        href: '/projects',
        icon: outline_1.ClipboardDocumentListIcon,
    },
]; };
exports.default = FrontEndCoreMenuItems;
