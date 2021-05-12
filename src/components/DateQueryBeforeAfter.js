import React from 'react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Form, Button, Icon } from 'semantic-ui-react';
import _ from 'lodash';
import Answer from './Answer';
import datemath from '../api/datemath';

import recordGAEvent from '../utils/RecordGAEvent';

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
        await datemath
            .get('/calculate-before-after', {
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
                if (
                    !_.isEmpty(error.response) &&
                    !_.isEmpty(error.response.data.error)
                ) {
                    this.setState({ queryResponse: error.response.data.error });
                } else if (
                    !_.isEmpty(error.response.data.errorResponse.message)
                ) {
                    this.setState({
                        queryResponse:
                            error.response.data.errorResponse.message,
                    });
                } else if (!_.isEmpty(error.message)) {
                    this.setState({ queryResponse: error.message });
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
            answerComponent = <Answer response={this.state.queryResponse} />;
        }

        return (
            <div>
                <div>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                fluid
                                focus
                                name="daysOrHours"
                                type="text"
                                placeholder="example: 5"
                                value={this.state.daysOrHours}
                                onChange={this.handleChange}
                            />
                            <Form.Select
                                fluid
                                name="unitOfTime"
                                placeholder="mins/hrs/days..."
                                search
                                selection
                                options={unitOfTimeOptions}
                                onChange={this.handleChange}
                            />
                            <Form.Select
                                fluid
                                name="operator"
                                placeholder="before or after"
                                search
                                selection
                                options={operatorOptions}
                                onChange={this.handleChange}
                            />
                            <DateTimeInput
                                fluid
                                name="userDateTime"
                                dateTimeFormat="MM-DD-YYYY HH:mm"
                                placeholder="Date"
                                value={this.state.userDateTime}
                                iconPosition="left"
                                onChange={this.handleChange}
                            />
                            <Button
                                fluid
                                animated
                                type="submit"
                                onClick={(e) =>
                                    recordGAEvent(
                                        'DateQueryBeforeAfterSubmitButton'
                                    )
                                }
                            >
                                <Button.Content visible>is?</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="arrow right" />
                                </Button.Content>
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="ui grid">
                    <div
                        className="three column centered row"
                        style={{ 'padding-top': 20 }}
                    >
                        {answerComponent}
                    </div>
                </div>
            </div>
        );
    }
}

export default DateQueryBeforeAfter;
