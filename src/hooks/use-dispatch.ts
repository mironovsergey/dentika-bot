import { useDispatch as dispatchHook, } from 'react-redux';

import type { AppDispatch } from '../utils/types';

export const useDispatch = () => dispatchHook<AppDispatch>();
