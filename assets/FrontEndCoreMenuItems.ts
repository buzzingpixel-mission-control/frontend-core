import {
    CalendarIcon,
    ClipboardDocumentListIcon,
    UserGroupIcon,
    QueueListIcon,
} from '@heroicons/react/24/outline';
import MenuItem from './MenuItem';

const FrontEndCoreMenuItems = (): Array<MenuItem> => [
    {
        name: 'User Admin',
        href: '/user-admin',
        icon: UserGroupIcon,
        requiresAdminPrivileges: true,
    },
    {
        name: 'Queue Admin',
        href: '/queue-admin',
        icon: QueueListIcon,
        requiresAdminPrivileges: true,
    },
    {
        name: 'Schedule Admin',
        href: '/schedule-admin',
        icon: CalendarIcon,
        requiresAdminPrivileges: true,
    },
    {
        name: 'Projects',
        href: '/projects',
        icon: ClipboardDocumentListIcon,
    },
];

export default FrontEndCoreMenuItems;
