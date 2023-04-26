import { UseMutationResult } from '@tanstack/react-query/src/types';
import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import ApiParams from './ApiParams';
import RequestMethod from './RequestMethod';
import MakeApiRequest from '../MakeApiRequest';
import ApiError from './ApiError';

const useApiMutation = <TData = unknown, PrepData = unknown>(
    params?: {
        invalidateQueryKeysOnSuccess?: Array<string>;
        options?: Omit<UseMutationOptions<TData, ApiError, ApiParams>, 'mutationFn'>;
        prepareApiParams?: (prepData: PrepData) => ApiParams;
    },
): UseMutationResult<TData, ApiError, PrepData> => {
    params = params || {};

    const options = params.options || {};

    const prepareApiParams = params.prepareApiParams || (
        (prepData: ApiParams) => (prepData)
    );

    const invalidateQueryKeysOnSuccess = params.invalidateQueryKeysOnSuccess || [];

    const queryClient = useQueryClient();

    if (invalidateQueryKeysOnSuccess.length > 0) {
        const incomingOnSuccess = options.onSuccess;

        options.onSuccess = (
            data,
            variables,
            context,
        ) => {
            queryClient.invalidateQueries(
                [invalidateQueryKeysOnSuccess],
            ).then(() => {
                if (incomingOnSuccess) {
                    incomingOnSuccess(data, variables, context);
                }
            });
        };
    }

    return useMutation<TData, ApiError, PrepData, unknown>({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mutationFn: async (prepData) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const apiParams = prepareApiParams(prepData);

            if (!apiParams.method) {
                apiParams.method = RequestMethod.POST;
            }

            return MakeApiRequest<TData>(apiParams);
        },
        ...options,
    });
};

export default useApiMutation;
