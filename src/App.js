import React from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import GA from './utils/RouteChangeTracker.js';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
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
                        <Link to="/about" className="item">
                            About
                        </Link>
                    </div>
                </div>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
