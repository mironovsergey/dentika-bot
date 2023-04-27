import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../hooks/use-selector';
import OfferDetails from '../offer-details/offer-details';
import OfferForm from '../offer-form/offer-form';

const Offer: FC = () => {
    const { id } = useParams();
    const { offers } = useSelector(({ offers }) => offers);

    if (!id) {
        return null;
    }

    const offerId = parseInt(id, 10);
    const currentOffer = offers.find((item) => item.id === offerId);

    if (!currentOffer) {
        return null;
    }

    return (
        <div className="offer">
            <h1>Записаться на прием</h1>
            <OfferDetails offer={currentOffer} />
            <OfferForm offerId={offerId} />
        </div>
    );
};

export default Offer;
