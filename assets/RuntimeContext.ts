import { createContext } from 'react';

const RuntimeContext = createContext<{
    todo: string;
}>(null);

export default RuntimeContext;
