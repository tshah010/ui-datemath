import React from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom';

const FixedMenu = () => {
    let timeInUTC = moment().utc().format('ddd, MMMM Do YYYY, h:mm a');

    return (
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <Link to="/" className="item">
                    Home
                </Link>
                <a
                    href={process.env.REACT_APP_DATEMATH_API_SWAGGER_DOCS}
                    target="_blank"
                    rel="noreferrer"
                    className="item"
                >
                    API
                </a>
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
