import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import '../App.css';

// Found in https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/FixedMenuLayout.js
const Footer = () => (
    <div className="dt footer">
        <Segment inverted vertical>
            <Container textAlign="left">
                <Grid divided inverted stackable>
                    <Grid.Column width={12}>
                        {' '}
                        &copy; 2021 DateMath.net
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid>
            </Container>
        </Segment>
    </div>
);

export default Footer;
