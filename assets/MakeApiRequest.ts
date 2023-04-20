import ApiParams from './ApiParams';
import RequestMethod from './RequestMethod';
import EncodeQueryParamsFromObject from './EncodeQueryParamsFromObject';
import ApiError from './ApiError';

const MakeApiRequest = async <Props>({
    uri,
    queryParams,
    method,
    payload,
}: ApiParams): Promise<Props> => {
    queryParams = queryParams || {};

    method = (method || RequestMethod.GET);

    const options = {
        redirect: 'manual',
        method: String(method),
    } as RequestInit;

    if (payload !== undefined) {
        options.body = JSON.stringify(payload);

        options.headers = new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        });
    } else {
        options.headers = new Headers({
            Accept: 'application/json',
        });
    }

    let urlStr = `${window.location.protocol}//${window.location.host}`;

    if (window.location.port) {
        urlStr += `:${window.location.port}`;
    }

    let url = `${urlStr}/api/request${uri}`;

    const queryString = EncodeQueryParamsFromObject(queryParams);

    if (queryString) {
        url += `?${queryString}`;
    }

    const response = await fetch(String(url), options);

    const data = await response.json();

    if (response.ok) {
        return data;
    }

    return Promise.reject(new ApiError(
        data,
        response.status,
        response.statusText,
        data.message ?? undefined,
    ));
};

export default MakeApiRequest;
