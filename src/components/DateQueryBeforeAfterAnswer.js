import React from 'react';

class DateQueryBeforeAfterAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const apiResponse = this.props.response;
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
        return <div>{answerLabel}</div>;
    }
}

export default DateQueryBeforeAfterAnswer;
