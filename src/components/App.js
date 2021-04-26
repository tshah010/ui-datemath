import React from 'react';
import DateQueryBeforeAfter from './DateQueryBeforeAfter';
import DateQueryBeforeAfterAnswer from './DateQueryBeforeAfterAnswer';

import unsplash from '../api/unsplash';

class App extends React.Component {
    state = { queryResponse: '' };

    onDateQuerySubmit = async (
        daysOrHours,
        unitOfTime,
        operator,
        userDateTime
    ) => {
        await unsplash
            .get('/calculate', {
                params: {
                    daysOrHours,
                    unitOfTime,
                    operator,
                    userDateTime,
                },
            })
            .then((response) => {
                this.setState({ queryResponse: response.data });
            })
            .catch((error) => {
                this.setState({ queryResponse: error.response.data });
            });
    };

    render() {
        if (this.state.queryResponse) {
            return (
                // Attributes of SearchBar like onSubmit are sent inside a 'props' object to SearchBar Component
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <DateQueryBeforeAfter onSubmit={this.onDateQuerySubmit} />
                    <DateQueryBeforeAfterAnswer
                        response={this.state.queryResponse}
                    />
                </div>
            );
        } else {
            return (
                // Attributes of SearchBar like onSubmit are sent inside a 'props' object to SearchBar Component
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <DateQueryBeforeAfter onSubmit={this.onDateQuerySubmit} />
                </div>
            );
        }
    }
}

export default App;
