import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import './index.css';
import App from './App';

const TRACKING_ID = 'UA-17790639-2';
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
