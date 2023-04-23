import { ClipboardDocumentListIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { MenuItem } from './index';

const FrontEndCoreMenuItems = (): Array<MenuItem> => [
    {
        name: 'Projects',
        href: '/projects',
        icon: ClipboardDocumentListIcon,
    },
    {
        name: 'User Admin',
        href: '/user-admin',
        icon: UserGroupIcon,
        requiresAdminPrivileges: true,
    },
];

export default FrontEndCoreMenuItems;
