import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { ZodType } from 'zod';
import ApiParams from './Api/ApiParams';
import ApiError from './Api/ApiError';
declare const useApiQuery: <Props>(queryKey: QueryKey, apiParams: ApiParams, options?: Omit<UseQueryOptions<Props | {
    error: string;
}, ApiError, Props, QueryKey>, "queryKey" | "queryFn" | "initialData"> & {
    initialData?: () => undefined;
    zodValidator?: ZodType;
    ignoreErrors?: boolean;
}) => {
    accessDenied: boolean;
    setData: (newData: Props) => void;
    data: Props;
    error: ApiError;
    isError: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: ApiError;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) => Promise<import("@tanstack/react-query").QueryObserverResult<Props, ApiError>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: Props) => void;
    data: Props;
    error: null;
    isError: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: ApiError;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) => Promise<import("@tanstack/react-query").QueryObserverResult<Props, ApiError>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: Props) => void;
    data: undefined;
    error: ApiError;
    isError: true;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: ApiError;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) => Promise<import("@tanstack/react-query").QueryObserverResult<Props, ApiError>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: Props) => void;
    data: undefined;
    error: null;
    isError: false;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "loading";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: ApiError;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) => Promise<import("@tanstack/react-query").QueryObserverResult<Props, ApiError>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
};
export default useApiQuery;
