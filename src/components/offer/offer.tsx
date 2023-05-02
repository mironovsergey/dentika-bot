import type { FC } from 'react';
import type { TOffer } from '../../utils/types';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../hooks/use-selector';
import { useTelegram } from '../../hooks/use-telegram';
import OfferDetails from '../offer-details/offer-details';
// import OfferForm from '../offer-form/offer-form';

const Offer: FC = () => {
    const { id } = useParams();
    const { offers } = useSelector(({ offers }) => offers);
    const [currentOffer, setCurrentOffer] = useState<TOffer | null>(null);
    const telegramWebApp = useTelegram();

    const handleSendData = useCallback(
        () => {
            telegramWebApp.sendData(JSON.stringify({
                offerId: currentOffer?.id
            }));
        },
        [currentOffer?.id, telegramWebApp]
    );

    useEffect(
        () => {
            if (id) {
                const offerId = parseInt(id, 10);
                const offer = offers.find((item) => item.id === offerId);

                if (offer) {
                    setCurrentOffer(offer);
                }
            }
        },
        [id, offers]
    );

    useEffect(
        () => {
            telegramWebApp.onEvent('mainButtonClicked', handleSendData);

            return () => {
                telegramWebApp.offEvent('mainButtonClicked', handleSendData);
            };
        },
        [handleSendData, telegramWebApp]
    );

    useEffect(
        () => {
            telegramWebApp.MainButton.setParams({
                text: 'Записаться'
            });
        },
        [telegramWebApp.MainButton]
    );

    useEffect(
        () => {
            if (!currentOffer) {
                telegramWebApp.MainButton.hide();
            } else {
                telegramWebApp.MainButton.show();
            }
        },
        [currentOffer, telegramWebApp.MainButton]
    );

    if (!currentOffer) {
        return null;
    }

    return (
        <div className="offer">
            <h1>Записаться на прием</h1>
            <OfferDetails offer={currentOffer} />
            {/* <OfferForm offerId={offerId} /> */}
        </div>
    );
};

export default Offer;
