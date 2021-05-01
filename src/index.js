import React from 'react';
import ReactDOM from 'react-dom';
import DateQueryBeforeAfter from './components/DateQueryBeforeAfter';
import EpochConverter from './components/EpochConverter';
import AddSubtractDates from './components/AddSubtractDates';

ReactDOM.render(
    <DateQueryBeforeAfter />,
    document.querySelector('#date-query-before-after')
);
ReactDOM.render(
    <EpochConverter />,
    document.querySelector('#epoch-time-converter')
);
ReactDOM.render(
    <AddSubtractDates />,
    document.querySelector('#add-subtract-dates')
);
