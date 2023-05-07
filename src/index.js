import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import CountryDetails from './CountryDetails';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/:id' element={<CountryDetails />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
