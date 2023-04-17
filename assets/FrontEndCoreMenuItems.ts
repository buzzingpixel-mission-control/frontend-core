import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { MenuItem } from './index';

const FrontEndCoreMenuItems = (): Array<MenuItem> => [
    {
        name: 'Projects',
        href: '/projects',
        icon: ClipboardDocumentListIcon,
    },
];

export default FrontEndCoreMenuItems;
