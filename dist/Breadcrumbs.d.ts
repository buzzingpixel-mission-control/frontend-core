import React from 'react';
export type Breadcrumb = {
    name: string;
    href: string;
};
declare const Breadcrumbs: ({ breadcrumbs, }: {
    breadcrumbs: Array<Breadcrumb>;
}) => React.JSX.Element;
export default Breadcrumbs;
