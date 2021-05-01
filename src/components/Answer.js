import React from 'react';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const apiResponse = this.props.response;
        let answerLabel = '';
        if (apiResponse.answer) {
            answerLabel = (
                <div className="ui blue big label">{apiResponse.answer}</div>
            );
        } else if (apiResponse.errorResponse) {
            answerLabel = (
                <div className="ui yellow medium label">
                    {apiResponse.errorResponse.message}
                </div>
            );
        } else if (apiResponse) {
            answerLabel = (
                <div className="ui yellow medium label">{apiResponse}</div>
            );
        }
        return <div>{answerLabel}</div>;
    }
}

export default Answer;
