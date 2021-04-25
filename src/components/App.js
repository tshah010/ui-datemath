import React from 'react';
import DateQueryBeforeAfter from './DateQueryBeforeAfter';
import unsplash from '../api/unsplash';

class App extends React.Component {
    state = { queryResponse: '' };

    onDateQuerySubmit = async (
        daysOrHours,
        unitOfTime,
        operator,
        userDateTime
    ) => {
        //https://unsplash.com/documentation#search-photos
        const response = await unsplash.get('/calculate', {
            params: {
                daysOrHours,
                unitOfTime,
                operator,
                userDateTime,
            },
        });
        // for this.setState to work the function should be an => function
        console.log('Answer from backend is: ' + JSON.stringify(response));

        this.setState({ queryResponse: response.data });
    };

    render() {
        const answer = this.state.queryResponse.answer;
        let answerLabel;
        if (answer) {
            answerLabel = <div class="ui blue big label">{answer}</div>;
        } else {
            answerLabel = '';
        }
        return (
            // Attributes of SearchBar like onSubmit are sent inside a 'props' object to SearchBar Component
            <div className="ui container" style={{ marginTop: '10px' }}>
                <DateQueryBeforeAfter onSubmit={this.onDateQuerySubmit} />
                {answerLabel}
            </div>
        );
    }
}

export default App;
