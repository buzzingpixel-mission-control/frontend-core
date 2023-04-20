import ApiParams from './ApiParams';
declare const MakeApiRequest: <Props>({ uri, queryParams, method, payload, }: ApiParams) => Promise<Props>;
export default MakeApiRequest;
