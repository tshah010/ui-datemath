import React from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom';

const FixedMenu = () => {
    let timeInUTC = moment().utc().format('ddd, MMMM Do YYYY, h:mm a');
    return (
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <Link to="/" className="header item">
                    <img
                        className="logo"
                        alt="datamath.net logo"
                        src="logo12x12.png"
                    />
                    dateMath
                </Link>
                <Link to="/" className="item">
                    Home
                </Link>
                <Link to="/apidocs" className="item">
                    API
                </Link>
                <Link to="/about" className="item">
                    About
                </Link>
                <div className="right menu">
                    <Link to="/" className="item">
                        UTC:&nbsp;&nbsp;{timeInUTC}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FixedMenu;
