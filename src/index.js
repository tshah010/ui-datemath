import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TRACKING_ID = 'UA-17790639-2';
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (process.env.NODE_ENV !== 'production') {
    reportWebVitals(console.log);
}
