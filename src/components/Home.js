import React from 'react';
import DateQueryBeforeAfter from './DateQueryBeforeAfter';
import EpochConverter from './EpochConverter';
import SubtractDates from './SubtractDates';

const Home = () => {
    return (
        <div className="ui main container">
            <div className="ui grid">
                <div className="centered row">
                    <img
                        className="logo"
                        alt="dateMath.net"
                        src="logo327x89.png"
                    />
                </div>
            </div>
            <div className="ui hidden divider"></div>
            <div className="ui horizontal divider">
                Add or Subtract Time from Date
            </div>
            <DateQueryBeforeAfter />
            <div className="ui hidden divider"></div>
            <div className="ui horizontal divider">
                Convert Unix Epoch Time to Local Time
            </div>
            <EpochConverter />
            <div className="ui hidden divider"></div>
            <div className="ui hidden divider"></div>
            <div className="ui horizontal divider">Subtract Dates</div>
            <SubtractDates />
        </div>
    );
};

export default Home;
