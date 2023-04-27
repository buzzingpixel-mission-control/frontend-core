/// <reference types="react" />
export type Breadcrumb = {
    name: string;
    href: string;
};
declare const Breadcrumbs: ({ breadcrumbs, }: {
    breadcrumbs: Array<Breadcrumb>;
}) => JSX.Element;
export default Breadcrumbs;
