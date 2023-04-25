import { ReactNode } from 'react';
import { createPortal as createPortalReact } from 'react-dom';

const createPortal = (
    children: ReactNode,
    container?: Element | DocumentFragment,
    key?: null | string,
) => {
    if (container === undefined) {
        container = document.body;
    }

    return createPortalReact(children, container, key);
};

export default createPortal;
