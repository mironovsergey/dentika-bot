import type { FC, MouseEvent } from 'react';
import type { TOffer } from '../../utils/types';
import { getFormatDate, getFormatTime } from '../../utils/helpers';

import { ReactComponent as IconPlus } from '../../images/plus.svg';

import './offers-item.scss';

type TOffersItem = {
    offer: TOffer;
};

const OffersItem: FC<TOffersItem> = ({ offer }) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        console.log(offer.id);
    };

    return (
        <div className="offers-item">
            <div className="offers-item__outer">
                <div className="offers-item__head">
                    <div className="offers-item__date">
                        {`${getFormatDate(offer.timestamp)} ${getFormatTime(offer.timestamp)}`}
                    </div>
                </div>
                <div className="offers-item__body">
                    <div className="offers-item__service">
                        {offer.services}
                    </div>
                    <div className="offers-item__clinic">
                        {offer.clinic}
                    </div>
                    <div className="offers-item__doctor">
                        <div className="offers-item__doctor-title">
                            Врач:
                        </div>
                        <div className="offers-item__doctor-name">
                            {offer.doctor.name}
                        </div>
                    </div>
                </div>
                <div className="offers-item__foot">
                    <div className="offers-item__discount">
                        {offer.discount}
                    </div>
                    <div className="offers-item__button">
                        <button type="button" onClick={handleClick}>
                            <IconPlus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersItem;
