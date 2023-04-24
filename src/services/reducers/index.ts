import { combineReducers } from 'redux';
import { offersReducer } from './offers';

export const rootReducer = combineReducers({
    offers: offersReducer
});
