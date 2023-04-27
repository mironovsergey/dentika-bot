import type { FC } from 'react';
import type { TOffer } from '../../utils/types';
import { Link } from 'react-router-dom';
import { getFormatDate, getFormatTime } from '../../utils/helpers';

import { ReactComponent as IconPlus } from '../../images/plus.svg';

import './offers-item.scss';

type TOffersItem = {
    offer: TOffer;
};

const OffersItem: FC<TOffersItem> = ({ offer }) => {
    const { id, timestamp, services, clinic, doctor, discount } = offer;

    return (
        <div className="offers-item">
            <div className="offers-item__outer">
                <div className="offers-item__head">
                    <div className="offers-item__date">
                        {`${getFormatDate(timestamp)} ${getFormatTime(timestamp)}`}
                    </div>
                </div>
                <div className="offers-item__body">
                    <div className="offers-item__service">
                        {services}
                    </div>
                    <div className="offers-item__clinic">
                        {clinic}
                    </div>
                    <div className="offers-item__doctor">
                        <div className="offers-item__doctor-title">
                            Врач:
                        </div>
                        <div className="offers-item__doctor-name">
                            {doctor.name}
                        </div>
                    </div>
                </div>
                <div className="offers-item__foot">
                    <div className="offers-item__discount">
                        {discount}
                    </div>
                    <div className="offers-item__link">
                        <Link to={String(id)}>
                            <IconPlus />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersItem;
