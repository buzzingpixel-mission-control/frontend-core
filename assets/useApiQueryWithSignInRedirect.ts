import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { ZodType } from 'zod';
import { useEffect } from 'react';
import ApiParams from './ApiParams';
import ApiError from './ApiError';
import useApiQuery from './useApiQuery';
import redirectToSignIn from './redirectToSignIn';

const useApiQueryWithSignInRedirect = <Props>(
    queryKey: QueryKey,
    apiParams: ApiParams,
    options?: Omit<
        UseQueryOptions<Props | { error: string }, ApiError, Props>,
        'queryKey' | 'queryFn' | 'initialData'
    > & {
        initialData?: () => undefined;
        zodValidator?: ZodType;
        ignoreErrors?: boolean;
    },
) => {
    const queryResult = useApiQuery<Props>(
        queryKey,
        apiParams,
        options,
    );

    useEffect(() => {
        if (queryResult.accessDenied) {
            redirectToSignIn();
        }
    }, [queryResult]);

    if (queryResult.accessDenied) {
        queryResult.status = 'loading';
    }

    return queryResult;
};

export default useApiQueryWithSignInRedirect;
