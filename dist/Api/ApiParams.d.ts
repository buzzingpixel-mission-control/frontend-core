import QueryParams from '../QueryParams';
import RequestMethod from './RequestMethod';
interface ApiParams {
    uri: string;
    queryParams?: QueryParams;
    method?: RequestMethod;
    payload?: Record<string, unknown>;
}
export default ApiParams;
