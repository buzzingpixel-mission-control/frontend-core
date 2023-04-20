import QueryParams from './QueryParams';

const EncodeQueryParamsFromObject = (queryParams: QueryParams): string => {
    const keys = Object.keys(queryParams);

    const queryArray = [] as Array<string>;

    keys.forEach((key) => {
        const val = queryParams[key];

        if (Array.isArray(val)) {
            val.forEach((innerVal) => {
                queryArray.push(`${key}[]=${encodeURI(innerVal)}`);
            });

            return;
        }

        queryArray.push(`${key}=${encodeURI(val)}`);
    });

    return queryArray.join('&');
};

export default EncodeQueryParamsFromObject;
