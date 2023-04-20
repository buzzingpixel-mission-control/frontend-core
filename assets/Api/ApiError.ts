const defaultMessage = 'There was an error communicating with the API.';

export default class ApiError extends Error {
    readonly response: Record<string, unknown> | undefined;

    readonly statusCode: number | undefined;

    readonly statusText: string | undefined;

    constructor (
        response: Record<string, unknown> | undefined,
        statusCode: number | undefined,
        statusText: string | undefined,
        message: string = defaultMessage,
    ) {
        if (statusCode === 404 && message === defaultMessage) {
            message = 'Page not found';
        }

        super(message);

        this.response = response;

        this.statusCode = statusCode;

        this.statusText = statusText;
    }
}
