import type { AppThunk, TOffer } from '../../utils/types';
import { getOffersRequest } from '../api';

export const GET_OFFERS_REQUEST = 'GET_OFFERS_REQUEST';
export const GET_OFFERS_SUCCESS = 'GET_OFFERS_SUCCESS';
export const GET_OFFERS_ERROR = 'GET_OFFERS_ERROR';

export interface IGetOffersRequestAction {
    readonly type: typeof GET_OFFERS_REQUEST;
}

export interface IGetOffersSuccessAction {
    readonly type: typeof GET_OFFERS_SUCCESS;
    readonly payload: TOffer[];
}

export interface IGetOffersErrorAction {
    readonly type: typeof GET_OFFERS_ERROR;
}

export type TOffersActions =
    | IGetOffersRequestAction
    | IGetOffersSuccessAction
    | IGetOffersErrorAction;

export const getOffersRequestAction = (): IGetOffersRequestAction => ({
    type: GET_OFFERS_REQUEST
});

export const getOffersSuccessAction = (payload: TOffer[]): IGetOffersSuccessAction => ({
    type: GET_OFFERS_SUCCESS,
    payload
});

export const getOffersErrorAction = (): IGetOffersErrorAction => ({
    type: GET_OFFERS_ERROR
});

export const getOffers = (): AppThunk => {
    return (dispatch) => {
        dispatch(getOffersRequestAction());

        getOffersRequest()
            .then((res) => {
                dispatch(getOffersSuccessAction(res));
            })
            .catch(() => {
                dispatch(getOffersErrorAction());
            });
    };
};
