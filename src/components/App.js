import React from 'react';
import DateQueryBeforeAfter from './DateQueryBeforeAfter';

class App extends React.Component {
    state = { queryResponse: [] };

    onDateQuerySubmit = async (quantum, unitOfTime) => {
        //https://unsplash.com/documentation#search-photos
        // const response = await unsplash.get('/search/photos', {
        //     params: {
        //         query: term,
        //     },
        // });
        // for this.setState to work the function should be an => function
        console.log('quantum: ' + quantum + ' unitOfTime: ' + unitOfTime);
        this.setState({ queryResponse: 'dummy result' });
    };

    render() {
        return (
            // Attributes of SearchBar like onSubmit are sent inside a 'props' object to SearchBar Component
            <div className="ui container" style={{ marginTop: '10px' }}>
                <DateQueryBeforeAfter onSubmit={this.onDateQuerySubmit} />
                Found: Dummy answer1
            </div>
        );
    }
}

export default App;
