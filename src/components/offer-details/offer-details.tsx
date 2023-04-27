import type { FC } from 'react';
import type { TOffer } from '../../utils/types';
import { Link } from 'react-router-dom';
import { getFormatDate, getFormatTime } from '../../utils/helpers';

import { ReactComponent as IconXmark } from '../../images/xmark.svg';

import './offer-details.scss';

type TOfferDetails = {
    offer: TOffer;
};

const OfferDetails: FC<TOfferDetails> = ({ offer }) => {
    const { timestamp, services, clinic, doctor, discount } = offer;

    return (
        <div className="offer-details">
            <div className="offer-details__outer">
                <div className="offer-details__head">
                    <div className="offer-details__date">
                        {`${getFormatDate(timestamp)} ${getFormatTime(timestamp)}`}
                    </div>
                </div>
                <div className="offer-details__body">
                    <div className="offer-details__service">
                        {services}
                    </div>
                    <div className="offer-details__clinic">
                        {clinic}
                    </div>
                    <div className="offer-details__doctor">
                        <div className="offer-details__doctor-title">
                            Врач:
                        </div>
                        <div className="offer-details__doctor-name">
                            {doctor.name}
                        </div>
                    </div>
                </div>
                <div className="offer-details__foot">
                    <div className="offer-details__discount">
                        {discount}
                    </div>
                    <div className="offer-details__link">
                        <Link to="/">
                            <IconXmark />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferDetails;
