import React from 'react';
import DateQueryBeforeAfter from './DateQueryBeforeAfter';
import { Segment } from 'semantic-ui-react';

class App extends React.Component {
    render() {
        return (
            <Segment>
                <DateQueryBeforeAfter />
            </Segment>
        );
    }
}

export default App;
