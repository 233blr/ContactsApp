import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../Types/rootReducer';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
