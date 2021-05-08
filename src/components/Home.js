import React from 'react';
import DateQueryBeforeAfter from './DateQueryBeforeAfter';
import EpochConverter from './EpochConverter';
import SubtractDates from './SubtractDates';
import BasicAd from './BasicAd';
// import 'semantic-ui-css/semantic.min.css';

import { Grid, Segment, Advertisement } from 'semantic-ui-react';

import '../App.css';
// Right nav ad from https://github.com/semantic-ui-forest/forest-templates/tree/master/bootstrap/blog
const Home = () => {
    return (
        <div className="App">
            <Grid container>
                <Grid.Row centered="true">
                    <Segment basic>
                        <img
                            className="logo"
                            alt="dateMath.net"
                            src="logo327x89.png"
                        />
                    </Segment>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={13}>
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
                        <div className="ui horizontal divider">
                            Subtract Dates
                        </div>
                        <SubtractDates />
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                        <div className="ui hidden divider"></div>
                    </Grid.Column>
                    <Grid.Column width={3} floated="right">
                        <Segment secondary>
                            <Advertisement
                                unit="wide skyscraper"
                                test="Wide Skyscraper"
                            />
                            <BasicAd />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default Home;
