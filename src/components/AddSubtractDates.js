import React from 'react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import unsplash from '../api/unsplash';
import _ from 'lodash';

import Answer from './Answer';

class AddSubtractDates extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userStartDateTime: '',
            userEndDateTime: '',
            queryResponse: '',
        };
    }

    onDateQuerySubmit = async (userStartDateTime, userEndDateTime) => {
        await unsplash
            .get('/calculate-date-difference', {
                params: {
                    userStartDateTime,
                    userEndDateTime,
                },
            })
            .then((response) => {
                this.setState({ queryResponse: response.data });
            })
            .catch((error) => {
                if (_.isUndefined(error.response)) {
                    this.setState({ queryResponse: error.message });
                } else {
                    this.setState({ queryResponse: error.response.data });
                }
            });
    };

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    };

    // see https://react.semantic-ui.com/modules/dropdown/#types-selection
    onFormSubmit = (event) => {
        event.preventDefault();
        if (_.isEmpty(this.state.userDateTime)) {
            console.log('User date is null');
        }
        this.onDateQuerySubmit(
            this.state.userStartDateTime,
            this.state.userEndDateTime
        );
    };

    render() {
        // If server responded with answer or error then show answer component
        let answerComponent;
        if (this.state.queryResponse) {
            answerComponent = <Answer response={this.state.queryResponse} />;
        }

        return (
            <div className="ui grid">
                <div className="centered row">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="fields">
                            <div className="field">
                                <DateTimeInput
                                    name="userStartDateTime"
                                    dateTimeFormat="MM-DD-YYYY HH:mm"
                                    placeholder="Date"
                                    value={this.state.userStartDateTime}
                                    iconPosition="left"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: '8px',
                                }}
                            >
                                minus
                            </div>
                            <div className="field">
                                <DateTimeInput
                                    name="userEndDateTime"
                                    dateTimeFormat="MM-DD-YYYY HH:mm"
                                    placeholder="Date"
                                    value={this.state.userEndDateTime}
                                    iconPosition="left"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="field">
                                <button
                                    className="ui animated button"
                                    type="submit"
                                >
                                    <div className="visible content">is?</div>
                                    <div className="hidden content">
                                        <i className="right arrow icon"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                    {answerComponent}
                </div>
                <div
                    className="three column centered row"
                    style={{ padding: 0 }}
                ></div>
            </div>
        );
    }
}

export default AddSubtractDates;
