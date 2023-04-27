import type { FC } from 'react';
import { useMemo } from 'react';
import { useSelector } from '../../hooks/use-selector';
import OffersItem from '../offers-item/offers-item';

import './offers.scss';

const Offers: FC = () => {
    const {
        offers,
        offersRequest,
        offersError
    } = useSelector(({ offers }) => offers);

    const offerList = useMemo(
        () => (
            offers.map((item) => (
                <OffersItem key={item.id} offer={item} />
            ))
        ),
        [offers]
    );

    return (
        <div className="offers">
            <h1>Счастливые часы в «Дентике»</h1>
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
