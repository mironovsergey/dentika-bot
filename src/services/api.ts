import type { TOffer, TOffersResponse } from '../utils/types';
import { BASE_URL } from '../utils/constants';

const getOffers = (data: TOffersResponse): TOffer[] => {
    const items = data.items.item || {};
    return Object.values(items);
};

export const getOffersRequest = async (): Promise<TOffer[]> => {
    const response = await fetch(`${BASE_URL}/udata/content/getHottime.json`);

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const data: TOffersResponse = await response.json();

    return getOffers(data);
};
