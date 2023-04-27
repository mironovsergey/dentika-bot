import type { FC } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from '../../hooks/use-dispatch';
import { getOffers } from '../../services/actions/offers';
import Offers from '../offers/offers';
import Offer from '../offer/offer';

import './app.scss';

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOffers());
    }, [dispatch]);

    return (
        <div className="app">
            <Routes>
                <Route index element={<Offers />} />
                <Route path=":id" element={<Offer />} />
            </Routes>
        </div>
    );
};

export default App;
