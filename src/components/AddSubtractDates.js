import React from 'react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Input, Label, Dropdown } from 'semantic-ui-react';
import unsplash from '../api/unsplash';
import _ from 'lodash';

import Answer from './Answer';

const operatorOptions = [
    { key: '0', text: '-', value: '-1' },
    { key: '1', text: '+', value: '1' },
];

class AddSubtractDates extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userStartDateTime: '',
            userStartEndTime: '',
            operator: '',
            queryResponse: '',
        };
    }

    onDateQuerySubmit = async (
        userStartDateTime,
        userStartEndTime,
        operator
    ) => {
        await unsplash
            .get('/calculate-date-difference', {
                params: {
                    userStartDateTime,
                    userStartEndTime,
                    operator,
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
            this.state.userStartEndTime,
            this.state.operator
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
                            <div className="field">
                                <Dropdown
                                    name="operator"
                                    placeholder="+/="
                                    search
                                    selection
                                    options={operatorOptions}
                                    onChange={this.handleChange}
                                />
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
                </div>
                <div
                    className="three column centered row"
                    style={{ padding: 0 }}
                >
                    {answerComponent}
                </div>
            </div>
        );
    }
}

export default AddSubtractDates;
