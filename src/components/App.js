import React from 'react';
import DateQueryBeforeAfter from './DateQueryBeforeAfter';

class App extends React.Component {
    state = { queryResponse: [] };

    onDateQuerySubmit = async (
        daysOrHours,
        unitOfTime,
        operator,
        userDateTime
    ) => {
        //https://unsplash.com/documentation#search-photos
        // const queryResponse = await unsplash.get('/search/photos', {
        //     params: {
        //         query: term,
        //     },
        // });
        // for this.setState to work the function should be an => function
        console.log('daysOrHours: ' + daysOrHours);
        console.log('unitOfTime: ' + unitOfTime);
        console.log('operator: ' + operator);
        console.log('userDateTime: ' + userDateTime);

        this.setState({ queryResponse: 'dummy result' });
    };

    render() {
        return (
            // Attributes of SearchBar like onSubmit are sent inside a 'props' object to SearchBar Component
            <div className="ui container" style={{ marginTop: '10px' }}>
                <DateQueryBeforeAfter onSubmit={this.onDateQuerySubmit} />
                Found: {this.state.queryResponse}
            </div>
        );
    }
}

export default App;
