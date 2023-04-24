import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Offers from '../offers/offers';

import './app.scss';

const App: FC = () => {
    return (
        <div className="app">
            <h1>Счастливые часы в «Дентике»</h1>
            <Routes>
                <Route index element={<Offers />} />
            </Routes>
        </div>
    );
};

export default App;
