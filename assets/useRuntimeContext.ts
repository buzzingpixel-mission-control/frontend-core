import { useContext } from 'react';
import RuntimeContext from './RuntimeContext';

const useRuntimeContext = () => useContext(RuntimeContext);

export default useRuntimeContext;
