import React from 'react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Dropdown, Input } from 'semantic-ui-react';
import DateQueryBeforeAfterAnswer from './DateQueryBeforeAfterAnswer';

import unsplash from '../api/unsplash';

const unitOfTimeOptions = [
    { key: '0', text: 'minutes', value: '0' },
    { key: '1', text: 'hours', value: '1' },
    { key: '2', text: 'days', value: '2' },
    { key: '3', text: 'weeks', value: '3' },
    { key: '4', text: 'months', value: '4' },
    { key: '5', text: 'years', value: '5' },
];

const operatorOptions = [
    { key: '0', text: 'before', value: '-1' },
    { key: '1', text: 'after', value: '1' },
];

class DateQueryBeforeAfter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            daysOrHours: '',
            unitOfTime: '',
            operator: '',
            userDateTime: '',
            queryResponse: '',
        };
    }

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

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    };

    // see https://react.semantic-ui.com/modules/dropdown/#types-selection
    onFormSubmit = (event) => {
        event.preventDefault();
        this.onDateQuerySubmit(
            this.state.daysOrHours,
            this.state.unitOfTime,
            this.state.operator,
            this.state.userDateTime
        );
    };

    render() {
        // If server responded with answer or error then show answer component
        let answerComponent;
        if (this.state.queryResponse) {
            answerComponent = (
                <DateQueryBeforeAfterAnswer
                    response={this.state.queryResponse}
                />
            );
        }

        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <Input
                        focus
                        name="daysOrHours"
                        type="text"
                        placeholder="example: 5"
                        value={this.state.daysOrHours}
                        onChange={(event) =>
                            this.setState({
                                daysOrHours: event.target.value.replace(
                                    /\D/,
                                    ''
                                ),
                            })
                        }
                    />

                    <Dropdown
                        name="unitOfTime"
                        placeholder="mins/hrs/days..."
                        search
                        selection
                        options={unitOfTimeOptions}
                        onChange={this.handleChange}
                    />

                    <Dropdown
                        name="operator"
                        placeholder="before or after"
                        search
                        selection
                        options={operatorOptions}
                        onChange={this.handleChange}
                    />

                    <DateTimeInput
                        name="userDateTime"
                        dateTimeFormat="MM-DD-YYYY HH:mm"
                        placeholder="Date"
                        value={this.state.userDateTime}
                        iconPosition="left"
                        onChange={this.handleChange}
                    />

                    <button className="ui button" type="submit">
                        is?
                    </button>
                </form>
                {answerComponent}
            </div>
        );
    }
}

export default DateQueryBeforeAfter;
