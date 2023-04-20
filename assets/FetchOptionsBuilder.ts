const FetchOptionsBuilder = (
    jsonObject: Record<never, never>,
    method = 'POST',
): RequestInit => {
    const headers = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
    });

    return {
        redirect: 'manual',
        method,
        headers,
        body: JSON.stringify(jsonObject),
    } as RequestInit;
};

export default FetchOptionsBuilder;
