import * as React from 'react';
export type Tab = {
    name: string;
    href: string;
    icon?: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>;
    current?: boolean;
};
