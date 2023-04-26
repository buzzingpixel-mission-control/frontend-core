import { UseMutationResult } from '@tanstack/react-query/src/types';
import { UseMutationOptions } from '@tanstack/react-query';
import ApiParams from './ApiParams';
import ApiError from './ApiError';
declare const useApiMutation: <TData = unknown, PrepData = unknown>(params?: {
    invalidateQueryKeysOnSuccess?: Array<string>;
    options?: Omit<UseMutationOptions<TData, ApiError, ApiParams, unknown>, "mutationFn">;
    prepareApiParams?: (prepData: PrepData) => ApiParams;
}) => UseMutationResult<TData, ApiError, PrepData>;
export default useApiMutation;
