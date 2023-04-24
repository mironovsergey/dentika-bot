import { TypedUseSelectorHook, useSelector as selectorHook } from 'react-redux';

import type { RootState } from '../utils/types';

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
