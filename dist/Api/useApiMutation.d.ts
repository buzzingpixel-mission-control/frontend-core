import { UseMutationResult } from '@tanstack/react-query/src/types';
import { UseMutationOptions } from '@tanstack/react-query';
import ApiParams from './ApiParams';
declare const useApiMutation: <TData = unknown, PrepData = unknown>(params?: {
    invalidateQueryKeysOnSuccess?: Array<string>;
    options?: Omit<UseMutationOptions<TData, Error, ApiParams, unknown>, "mutationFn">;
    prepareApiParams?: (prepData: PrepData) => ApiParams;
}) => UseMutationResult<TData, Error, PrepData>;
export default useApiMutation;
