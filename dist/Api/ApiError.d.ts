export default class ApiError extends Error {
    readonly response: Record<string, unknown> | undefined;
    readonly statusCode: number | undefined;
    readonly statusText: string | undefined;
    constructor(response: Record<string, unknown> | undefined, statusCode: number | undefined, statusText: string | undefined, message?: string);
}
