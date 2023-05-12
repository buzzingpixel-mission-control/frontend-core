export declare const useQueueDetailsData: (queueName: string) => {
    accessDenied: boolean;
    setData: (newData: {
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    }) => void;
    data: {
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    };
    error: import("../../Api/ApiError").default;
    isError: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: import("../../Api/ApiError").default;
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
    refetch: <TPageData>(options?: import("@tanstack/query-core").RefetchOptions & import("@tanstack/query-core").RefetchQueryFilters<TPageData>) => Promise<import("@tanstack/query-core").QueryObserverResult<{
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    }, import("../../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    }) => void;
    data: {
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    };
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
    failureReason: import("../../Api/ApiError").default;
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
    refetch: <TPageData>(options?: import("@tanstack/query-core").RefetchOptions & import("@tanstack/query-core").RefetchQueryFilters<TPageData>) => Promise<import("@tanstack/query-core").QueryObserverResult<{
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    }, import("../../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    }) => void;
    data: undefined;
    error: import("../../Api/ApiError").default;
    isError: true;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: import("../../Api/ApiError").default;
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
    refetch: <TPageData>(options?: import("@tanstack/query-core").RefetchOptions & import("@tanstack/query-core").RefetchQueryFilters<TPageData>) => Promise<import("@tanstack/query-core").QueryObserverResult<{
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    }, import("../../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    }) => void;
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
    failureReason: import("../../Api/ApiError").default;
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
    refetch: <TPageData>(options?: import("@tanstack/query-core").RefetchOptions & import("@tanstack/query-core").RefetchQueryFilters<TPageData>) => Promise<import("@tanstack/query-core").QueryObserverResult<{
        queue?: string;
        totalItemsInQueue?: number;
        items?: {
            key?: string;
            handle?: string;
            name?: string;
            jobs?: {
                class?: string;
                method?: string;
                context?: any[] | Record<string, any>;
            }[];
        }[];
    }, import("../../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
};
export declare const useCancelItemMutation: (queueName: string) => import("@tanstack/react-query/src/types").UseMutationResult<unknown, import("../../Api/ApiError").default, string>;
export declare const useCancelAllMutation: (queueName: string) => import("@tanstack/react-query/src/types").UseMutationResult<unknown, import("../../Api/ApiError").default, unknown>;
