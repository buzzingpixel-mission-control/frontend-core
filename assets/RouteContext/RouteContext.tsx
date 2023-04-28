import React, {
    createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import RouteContextData from './RouteContextData';
import { Breadcrumb } from '../Breadcrumbs';

type CreateContextProps = {
    routeData: Record<string, RouteContextData>;
    setPageTitle: (pathname: string, title: string) => void;
    setHidePageTitle: (pathname: string, hide: boolean) => void;
    setBreadcrumbs: (pathname: string, breadcrumbs: Array<Breadcrumb>) => void;
};

export const RouteContext = createContext<CreateContextProps>(
    null,
);

const createDefaultRouteContextData = () => ({
    pageTitle: '',
    hidePageTitle: false,
    breadcrumbs: [],
} as RouteContextData);

export const useRouteContext = () => {
    const context = useContext(RouteContext);

    if (!context) {
        throw new Error(
            'useRouteContext must be used within a RouteContextProvider',
        );
    }

    return context;
};

export const useRouteLocationContext = () => {
    const location = useLocation();

    const loc = location.pathname;

    const { routeData } = useRouteContext();

    return routeData[loc] || createDefaultRouteContextData();
};

export const useSetPageTitle = () => {
    const { pathname } = useLocation();
    const { setPageTitle } = useRouteContext();

    return (title: string) => { setPageTitle(pathname, title); };
};

export const usePageTitle = (pageTitle: string) => {
    const setPageTitle = useSetPageTitle();
    useEffect(() => {
        setPageTitle(pageTitle);
    }, [pageTitle]);
};

export const useSetHidePageTitle = () => {
    const { pathname } = useLocation();
    const { setHidePageTitle } = useRouteContext();

    return (hide: boolean) => { setHidePageTitle(pathname, hide); };
};

export const useHidePageTitle = (hide: boolean) => {
    const setHidePageTitle = useSetHidePageTitle();
    useEffect(() => {
        setHidePageTitle(hide);
    }, [hide]);
};

export const useSetBreadcrumbs = () => {
    const { pathname } = useLocation();
    const { setBreadcrumbs } = useRouteContext();

    return (breadcrumbs: Array<Breadcrumb>) => {
        setBreadcrumbs(pathname, breadcrumbs);
    };
};

export const useBreadcrumbs = (breadcrumbs: Array<Breadcrumb>) => {
    const setBreadcrumbs = useSetBreadcrumbs();
    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [breadcrumbs]);
};

export const RouteContextProvider = (
    props: {
        children: | JSX.Element | JSX.Element[] | string | string[];
    },
) => {
    const [
        routeData,
        setRouteData,
    ] = useState<Record<string, RouteContextData>>({});

    const setPageTitle = (pathname: string, title: string) => {
        const newRouteData = routeData;

        newRouteData[pathname] = newRouteData[pathname] || createDefaultRouteContextData();

        if (newRouteData[pathname].pageTitle === title) {
            return;
        }

        newRouteData[pathname].pageTitle = title;

        setRouteData({ ...newRouteData });
    };

    const setHidePageTitle = (pathname: string, hide: boolean) => {
        const newRouteData = routeData;

        newRouteData[pathname] = newRouteData[pathname] || createDefaultRouteContextData();

        if (newRouteData[pathname].hidePageTitle === hide) {
            return;
        }

        newRouteData[pathname].hidePageTitle = hide;

        setRouteData({ ...newRouteData });
    };

    const setBreadcrumbs = (pathname: string, breadcrumbs: Array<Breadcrumb>) => {
        const newRouteData = routeData;

        newRouteData[pathname] = newRouteData[pathname] || createDefaultRouteContextData();

        let isEqual = true;

        const newCrumbs = newRouteData[pathname].breadcrumbs;

        breadcrumbs.forEach((crumb, index) => {
            if (
                crumb.name !== newCrumbs[index]?.name
                || crumb.href !== newCrumbs[index]?.href
            ) {
                isEqual = false;
            }
        });

        if (isEqual) {
            return;
        }

        newRouteData[pathname].breadcrumbs = breadcrumbs;

        setRouteData({ ...newRouteData });
    };

    const value = useMemo(() => ({
        routeData,
        setPageTitle,
        setHidePageTitle,
        setBreadcrumbs,
    }), [routeData]);

    return (
        <RouteContext.Provider
            value={value}
        >
            {props.children}
        </RouteContext.Provider>
    );
};
