export declare const useQueueAdminData: () => {
    accessDenied: boolean;
    setData: (newData: {
        queue?: string;
        totalItemsInQueue?: number;
    }[]) => void;
    data: {
        queue?: string;
        totalItemsInQueue?: number;
    }[];
    error: import("../Api/ApiError").default;
    isError: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: import("../Api/ApiError").default;
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
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        queue?: string;
        totalItemsInQueue?: number;
    }[]) => void;
    data: {
        queue?: string;
        totalItemsInQueue?: number;
    }[];
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
    failureReason: import("../Api/ApiError").default;
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
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        queue?: string;
        totalItemsInQueue?: number;
    }[]) => void;
    data: undefined;
    error: import("../Api/ApiError").default;
    isError: true;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: import("../Api/ApiError").default;
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
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        queue?: string;
        totalItemsInQueue?: number;
    }[]) => void;
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
    failureReason: import("../Api/ApiError").default;
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
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
};
