import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Application from './application';
import reportWebVitals from './reportWebVitals';
import StoreProvider from "./store";
const RootElement = ReactDOM.createRoot(document.getElementById('app-root'));
RootElement.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <Application />
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();