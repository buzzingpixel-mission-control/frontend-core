import { Breadcrumb } from '../Breadcrumbs';
type RouteContextData = {
    pageTitle: string;
    hidePageTitle: boolean;
    breadcrumbs?: Array<Breadcrumb>;
};
export default RouteContextData;
