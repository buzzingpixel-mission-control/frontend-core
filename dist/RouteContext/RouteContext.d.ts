import React from 'react';
import RouteContextData from './RouteContextData';
import { Breadcrumb } from '../Breadcrumbs';
type CreateContextProps = {
    routeData: Record<string, RouteContextData>;
    setPageTitle: (pathname: string, title: string) => void;
    setHidePageTitle: (pathname: string, hide: boolean) => void;
    setBreadcrumbs: (pathname: string, breadcrumbs: Array<Breadcrumb>) => void;
};
export declare const RouteContext: React.Context<CreateContextProps>;
export declare const useRouteContext: () => CreateContextProps;
export declare const useRouteLocationContext: () => RouteContextData;
export declare const useSetPageTitle: () => (title: string) => void;
export declare const usePageTitle: (pageTitle: string) => void;
export declare const useSetHidePageTitle: () => (hide: boolean) => void;
export declare const useHidePageTitle: (hide: boolean) => void;
export declare const useSetBreadcrumbs: () => (breadcrumbs: Array<Breadcrumb>) => void;
export declare const useBreadcrumbs: (breadcrumbs: Array<Breadcrumb>) => void;
export declare const RouteContextProvider: (props: {
    children: JSX.Element | JSX.Element[] | string | string[];
}) => JSX.Element;
export {};
