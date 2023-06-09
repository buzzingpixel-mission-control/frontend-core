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
        const incomingOnSettled = options.onSettled;

        options.onSettled = (
            data,
            error,
            variables,
            context,
        ) => {
            Promise.all(
                invalidateQueryKeysOnSuccess.map(async (key) => {
                    await queryClient.invalidateQueries([[key]]);
                }),
            ).then(() => {
                if (incomingOnSettled) {
                    incomingOnSettled(data, error, variables, context);
                }
            });
        };
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return useMutation<TData, ApiError, PrepData, unknown>(
        async (prepData) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const apiParams = prepareApiParams(prepData);

            if (!apiParams.method) {
                apiParams.method = RequestMethod.POST;
            }

            return MakeApiRequest<TData>(apiParams);
        },
        options,
    );
};

export default useApiMutation;
