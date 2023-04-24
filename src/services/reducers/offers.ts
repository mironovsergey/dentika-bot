import type { TOffersActions } from '../actions/offers';
import type { TOffer } from '../../utils/types';

import {
    GET_OFFERS_REQUEST,
    GET_OFFERS_SUCCESS,
    GET_OFFERS_ERROR
} from '../actions/offers';

type TOffersState = {
    offers: ReadonlyArray<TOffer>;
    offersRequest: boolean;
    offersError: boolean;
};

export const initialState: TOffersState = {
    offers: [],
    offersRequest: false,
    offersError: false
};

export const offersReducer = (
    state = initialState,
    action: TOffersActions
): TOffersState => {
    switch (action.type) {
        case GET_OFFERS_REQUEST: {
            return {
                ...state,
                offersRequest: true
            };
        }
        case GET_OFFERS_SUCCESS: {
            return {
                ...state,
                offers: action.payload,
                offersRequest: false,
                offersError: false
            };
        }
        case GET_OFFERS_ERROR: {
            return {
                ...state,
                offersRequest: false,
                offersError: true
            };
        }
        default: {
            return state;
        }
    }
};
