import React from 'react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Dropdown, Input } from 'semantic-ui-react';
import _ from 'lodash';
import Answer from './Answer';
import unsplash from '../api/unsplash';

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
            errors: {
                daysOrHours: '',
                unitOfTime: '',
                operator: '',
                userDateTime: '',
            },
            daysOrHoursValid: false,
            operatorValid: false,
            unitOfTimeValid: false,
            userDateTimeValid: false,
            formValid: false,
            queryResponse: '',
        };
    }

    onDateQuerySubmit = async (
        daysOrHours,
        unitOfTime,
        operator,
        userDateTime
    ) => {
        console.log('onDateQuerySubmit called');
        await unsplash
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
                if (_.isUndefined(error.response)) {
                    this.setState({ queryResponse: error.message });
                } else {
                    this.setState({ queryResponse: error.response.data });
                }
            });
    };

    handleChange = (event, { name, value }) => {
        console.log('handleChange called');
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value }, () => {
                this.validateField(name, value);
            });
        }
    };

    validateField(fieldName, value) {
        console.log(fieldName + 'value is ' + value);
        let fieldValidationErrors = this.state.errors;
        let daysOrHoursValid = this.state.daysOrHoursValid;
        let operatorValid = this.state.operatorValid;
        let unitOfTimeValid = this.state.unitOfTimeValid;
        let userDateTimeValid = this.state.userDateTimeValid;

        switch (fieldName) {
            case 'userDateTime':
                userDateTimeValid = value.length > 0;
                console.log('userDateTimeValid' + userDateTimeValid);
                fieldValidationErrors.userDateTime = userDateTimeValid
                    ? ''
                    : 'Date is required';
                break;
            case 'daysOrHours':
                daysOrHoursValid = value.length > 0;
                console.log('daysOrHoursValid' + daysOrHoursValid);

                fieldValidationErrors.daysOrHours = daysOrHoursValid
                    ? ''
                    : 'A value is required';
                break;
            case 'operator':
                operatorValid = value.length > 0;
                console.log('operatorValid' + operatorValid);

                fieldValidationErrors.operator = operatorValid
                    ? ''
                    : 'A value is required';
                break;
            case 'unitOfTime':
                unitOfTimeValid = value.length > 0;
                console.log('unitOfTimeValid' + unitOfTimeValid);

                fieldValidationErrors.unitOfTime = unitOfTimeValid
                    ? ''
                    : 'A value is required';
                break;
            default:
                break;
        }

        this.setState(
            {
                errors: fieldValidationErrors,
                unitOfTimeValid: unitOfTimeValid,
                daysOrHoursValid: daysOrHoursValid,
                operatorValid: operatorValid,
                userDateTimeValid: userDateTimeValid,
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formValid:
                this.state.unitOfTimeValid &&
                this.state.daysOrHoursValid &&
                this.state.operatorValid &&
                this.state.userDateTimeValid,
        });
        console.log('this.state.formValid in' + this.state.formValid);
    }

    // see https://react.semantic-ui.com/modules/dropdown/#types-selection
    onFormSubmit = (event) => {
        event.preventDefault();
        this.validateField('unitOfTime', this.state.unitOfTime);
        this.validateField('daysOrHours', this.state.daysOrHours);
        this.validateField('userDateTime', this.state.userDateTime);
        this.validateField('operator', this.state.operator);
        console.log('this.state.formValid' + this.state.formValid);
        if (this.state.formValid) {
            this.onDateQuerySubmit(
                this.state.daysOrHours,
                this.state.unitOfTime,
                this.state.operator,
                this.state.userDateTime
            );
        }
    };

    render() {
        // If server responded with answer or error then show answer component
        let answerComponent;
        if (this.state.queryResponse) {
            answerComponent = <Answer response={this.state.queryResponse} />;
        }

        let daysOrHoursErrorMessage;
        if (!_.isEmpty(this.state.errors.daysOrHours)) {
            daysOrHoursErrorMessage = (
                <div className="ui pointing red basic label">
                    Please enter a value
                </div>
            );
        }

        let dateInputErrorMessage;
        if (!_.isEmpty(this.state.errors.userDateTime)) {
            dateInputErrorMessage = (
                <div className="ui pointing red basic label">
                    Please enter a value
                </div>
            );
        }

        let operatorErrorMessage;
        if (!_.isEmpty(this.state.errors.operator)) {
            operatorErrorMessage = (
                <div className="ui pointing red basic label">
                    Please enter a value
                </div>
            );
        }
        let unitOfTimeErrorMessage;
        if (!_.isEmpty(this.state.errors.unitOfTime)) {
            unitOfTimeErrorMessage = (
                <div className="ui pointing red basic label">
                    Please enter a value
                </div>
            );
        }

        return (
            <div className="ui grid">
                <div className="centered row">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="fields">
                            <div className="field">
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
                                {daysOrHoursErrorMessage}
                            </div>
                            <div className="field">
                                <Dropdown
                                    name="unitOfTime"
                                    placeholder="mins/hrs/days..."
                                    search
                                    selection
                                    options={unitOfTimeOptions}
                                    onChange={this.handleChange}
                                />
                                {unitOfTimeErrorMessage}
                            </div>
                            <div className="field">
                                <Dropdown
                                    name="operator"
                                    placeholder="before or after"
                                    search
                                    selection
                                    options={operatorOptions}
                                    onChange={this.handleChange}
                                />
                                {operatorErrorMessage}
                            </div>
                            <div className="field">
                                <DateTimeInput
                                    name="userDateTime"
                                    dateTimeFormat="MM-DD-YYYY HH:mm"
                                    placeholder="Date"
                                    value={this.state.userDateTime}
                                    iconPosition="left"
                                    onChange={this.handleChange}
                                />
                                {dateInputErrorMessage}
                            </div>
                            <div className="field">
                                <button
                                    className="ui animated button"
                                    type="submit"
                                    onClick={(e) =>
                                        recordGAEvent(
                                            'DateQueryBeforeAfterSubmitButton'
                                        )
                                    }
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

export default DateQueryBeforeAfter;
