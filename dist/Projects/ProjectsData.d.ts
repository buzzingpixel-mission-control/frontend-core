import AddProjectFormValues from './AddProjectFormValues';
declare const useProjectsData: () => {
    accessDenied: boolean;
    setData: (newData: {
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
    }[]) => void;
    data: {
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
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
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
    }[]) => void;
    data: {
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
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
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
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
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
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
        id?: string;
        isActive?: boolean;
        title?: string;
        slug?: string;
        description?: string;
        createdAt?: string;
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
};
declare const useProjectsMutation: () => import("@tanstack/react-query/src/types").UseMutationResult<unknown, import("../Api/ApiError").default, AddProjectFormValues>;
export { useProjectsData, useProjectsMutation, };
