import React from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import FixedMenu from './components/FixedMenu';
import Footer from './components/Footer';

import GA from './utils/RouteChangeTracker.js';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                {/* show menu */}
                <FixedMenu />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                {/* show footer */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
