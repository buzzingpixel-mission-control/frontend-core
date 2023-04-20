const redirectToSignIn = () => {
    const query = new URLSearchParams({
        authReturn: encodeURI(window.location.href),
    });

    window.location.href = `/oauth2/authorize?${query.toString()}`;
};

export default redirectToSignIn;
