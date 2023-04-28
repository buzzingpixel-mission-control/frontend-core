import * as React from 'react';

type MenuItem = {
    name: string;
    href: string;
    pageName?: string;
    icon?: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
    { title?: string; titleId?: string } &
    React.RefAttributes<SVGSVGElement>>;
    requiresAdminPrivileges?: boolean;
};

export default MenuItem;
