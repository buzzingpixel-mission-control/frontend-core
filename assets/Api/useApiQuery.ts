import {
    QueryKey, useQuery, useQueryClient, UseQueryOptions,
} from '@tanstack/react-query';
import { ZodType } from 'zod';
import ApiParams from './ApiParams';
import MakeApiRequest from '../MakeApiRequest';
import ApiError from './ApiError';

const useApiQuery = <Props>(
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
    if (!options) {
        options = {};
    }

    if (options.retry === undefined) {
        options.retry = false;
    }

    if (options.useErrorBoundary === undefined) {
        options.useErrorBoundary = true;
    }

    const { zodValidator } = options;

    if (zodValidator) {
        const originalOnSuccess = options.onSuccess;

        options.onSuccess = (data) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (!data.error) {
                zodValidator.parse(data);
            }

            if (originalOnSuccess) {
                originalOnSuccess(data);
            }
        };
    }

    const queryClient = useQueryClient();

    const useQueryResult = useQuery<Props | { error: string }, ApiError, Props>(
        [queryKey],
        async () => {
            try {
                return await MakeApiRequest<Props>(apiParams);
            } catch (error) {
                const err = error as ApiError;

                if (err.statusCode === 401) {
                    return { error: 'access_denied' };
                }

                if (options?.ignoreErrors) {
                    return {
                        error: err.message,
                    };
                }

                return Promise.reject(error);
            }
        },
        { ...options },
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accessDenied = useQueryResult.data?.error === 'access_denied';

    const setData = (newData: Props) => {
        queryClient.setQueryData([queryKey], newData);
    };

    return {
        ...useQueryResult,
        accessDenied,
        setData,
    };
};

export default useApiQuery;
