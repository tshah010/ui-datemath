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
        const apiResponse = this.state.queryResponse;
        let answerLabel = '';
        if (apiResponse.answer) {
            answerLabel = (
                <div class="ui blue big label">{apiResponse.answer}</div>
            );
        } else if (apiResponse.errorResponse) {
            answerLabel = (
                <div class="ui yellow medium label">
                    id:{apiResponse.errorResponse.id}
                    <div class="detail">
                        {apiResponse.errorResponse.message}
                    </div>
                </div>
            );
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
