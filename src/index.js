import React from 'react';
import ReactDOM from 'react-dom';
import DateQueryBeforeAfter from './components/DateQueryBeforeAfter';
import EpochConverter from './components/EpochConverter';

ReactDOM.render(
    <DateQueryBeforeAfter />,
    document.querySelector('#date-query-before-after')
);
ReactDOM.render(
    <EpochConverter />,
    document.querySelector('#epoch-time-converter')
);
