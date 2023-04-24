import type { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch } from '../../hooks/use-dispatch';
import { useSelector } from '../../hooks/use-selector';
import { getOffers } from '../../services/actions/offers';
import OffersItem from '../offers-item/offers-item';

import './offers.scss';

const Offers: FC = () => {
    const dispatch = useDispatch();

    const {
        offers,
        offersRequest,
        offersError
    } = useSelector(({ offers }) => offers);

    useEffect(() => {
        dispatch(getOffers());
    }, [dispatch]);

    const offerList = offers.map((item) => (
        <OffersItem key={item.id} offer={item} />
    ));

    return (
        <div className="offers">
            {
                offersRequest && (
                    <div>Загрузка</div>
                )
            }
            {
                offersError && (
                    <div>Ошибка</div>
                )
            }
            {
                !(offersRequest || offersError) && (
                    <div className="offers-list">
                        {offerList}
                    </div>
                )
            }
        </div>
    );
};

export default Offers;
