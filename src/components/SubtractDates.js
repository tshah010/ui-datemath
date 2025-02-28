import React from 'react';
import ReactGA from 'react-ga';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Icon, Button } from 'semantic-ui-react';

import _ from 'lodash';

import Answer from './Answer';
import recordGAEvent from '../utils/RecordGAEvent';
import datemath from '../api/datemath';

class SubtractDates extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userStartDateTime: '',
            userEndDateTime: '',
            queryResponse: '',
        };
    }

    recordGAEvent = (name) => {
        if (name === 'submitButton') {
            ReactGA.event({
                category: 'User',
                action: 'Clicked Button',
                label: 'EpochConverter Component Submit Button',
            });
        }
    };

    onDateQuerySubmit = async (userStartDateTime, userEndDateTime) => {
        await datemath
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
                                <Button
                                    fluid
                                    animated
                                    type="submit"
                                    onClick={(e) =>
                                        recordGAEvent(
                                            'SubtractDateSubmitButton'
                                        )
                                    }
                                    style={{ height: 38 }}
                                >
                                    <Button.Content visible>is?</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name="arrow right" />
                                    </Button.Content>
                                </Button>
                            </div>
                        </div>
                    </form>
                    &nbsp;&nbsp;&nbsp;
                    {answerComponent}
                </div>
            </div>
        );
    }
}

export default SubtractDates;
