export declare enum ActiveStatus {
    ALL = "all",
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export declare enum AdminStatus {
    ALL = "all",
    IS_ADMIN = "is_admin",
    IS_NOT_ADMIN = "is_not_admin"
}
export declare const useUsersData: (active_status?: ActiveStatus, admin_status?: AdminStatus) => {
    accessDenied: boolean;
    setData: (newData: {
        id?: string;
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
    }[]) => void;
    data: {
        id?: string;
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
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
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        id?: string;
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
    }[]) => void;
    data: {
        id?: string;
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
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
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        id?: string;
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
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
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
} | {
    accessDenied: boolean;
    setData: (newData: {
        id?: string;
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
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
        isAdmin?: boolean;
        emailAddress?: string;
        name?: string;
        createdAt?: string;
        isActive?: boolean;
        timezone?: string;
    }[], import("../Api/ApiError").default>>;
    remove: () => void;
    fetchStatus: import("@tanstack/query-core").FetchStatus;
};
