import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { store } from '../services/store';

import type { TOffersActions } from '../services/actions/offers';

export type TAppActions = TOffersActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAppActions>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TAppActions>;

export type TPhoto = {
    id: number;
    path: string;
    size: number;
    ext: string;
    ord: number;
    src: string;
    width: number;
    height: number;
    alt: string;
    title: string;
};

export type TDoctor = {
    id: number;
    name: string;
    link: string;
    specialities: string;
    photo: TPhoto;
    info?: string;
};

export type TOffer = {
    id: number;
    services: string;
    clinic: string;
    timestamp: number;
    discount: string;
    doctor: TDoctor;
};

export type TOffersResponse = {
    items: {
        item?: {
            [key: number]: TOffer;
        };
    };
    total: number;
    module: string;
    method: string;
};
