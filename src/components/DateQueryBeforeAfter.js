import React from 'react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Form, Button, Icon, Label, Input } from 'semantic-ui-react';
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

function DateQueryBeforeAfter() {
    const initialValues = {
        daysOrHours: '',
        unitOfTime: '',
        operator: '',
        userDateTime: '',
    };
    var queryResponse = '';

    const [values, setValues] = React.useState(initialValues);

    const [errors, setErrors] = React.useState({});

    const [touched, setTouched] = React.useState({});
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         daysOrHours: '',
    //         unitOfTime: '',
    //         operator: '',
    //         userDateTime: '',
    //         queryResponse: '',
    //     };
    // }

    const onDateQuerySubmit = async (
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
                queryResponse = response.data;
            })
            .catch((error) => {
                if (!_.isUndefined(error.response)) {
                    if (!_.isUndefined(error.response.data)) {
                        if (!_.isUndefined(error.response.data.error)) {
                            queryResponse = error.response.data.error;
                        } else if (
                            !_.isUndefined(
                                error.response.data.errorResponse.message
                            )
                        ) {
                            values.queryResponse =
                                error.response.data.errorResponse.message;
                        }
                    }
                } else if (!_.isUndefined(error.message)) {
                    queryResponse = error.message;
                }
            });
    };

    const handleChange = (event, { name, value }) => {
        // save field values
        setValues({
            ...values,
            [name]: value,
        });
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    const handleBlur = (evt) => {
        const { name, value } = evt.target;

        // remove whatever error was there previously
        const { [name]: removedError, ...rest } = errors;

        // check for a new error
        const error = validate[name](value);

        // // validate the field if the value has been touched
        setErrors({
            ...rest,
            ...(error && { [name]: touched[name] && error }),
        });
    };

    const validateNumber = (fieldName, fieldValue) => {
        if (fieldValue.trim() === '') {
            return `${fieldName} is required`;
        }
        if (/[^0-9 -]/.test(fieldValue)) {
            return 'Invalid Number';
        }
        return null;
    };
    const validateRequired = (fieldName, fieldValue) => {
        if (fieldValue.trim() === '') {
            return `${fieldName} is required`;
        }
        return null;
    };
    const validateDateTime = (fieldName, fieldValue) => {
        if (fieldValue.trim() === '') {
            return `${fieldName} is required`;
        }
        return null;
    };
    const validate = {
        daysOrHours: (quantity) =>
            validateNumber('Number of min/hours...', quantity),
        unitOfTime: (unitOfTime) =>
            validateRequired('Min/Hours...', unitOfTime),
        operator: (operator) => validateRequired('Before or After', operator),
        userDateTime: (userDateTime) => validateDateTime('Date', userDateTime),
    };

    // see https://react.semantic-ui.com/modules/dropdown/#types-selection
    const onFormSubmit = (event) => {
        event.preventDefault();

        // validate the form
        const formValidation = Object.keys(values).reduce(
            (acc, key) => {
                const newError = validate[key](values[key]);
                const newTouched = { [key]: true };
                return {
                    errors: {
                        ...acc.errors,
                        ...(newError && { [key]: newError }),
                    },
                    touched: {
                        ...acc.touched,
                        ...newTouched,
                    },
                };
            },
            {
                errors: { ...errors },
                touched: { ...touched },
            }
        );
        setErrors(formValidation.errors);
        setTouched(formValidation.touched);

        if (
            !Object.values(formValidation.errors).length && // errors object is empty
            Object.values(formValidation.touched).length ===
                Object.values(values).length && // all fields were touched
            Object.values(formValidation.touched).every((t) => t === true) // every touched field is true
        ) {
            alert(JSON.stringify(values, null, 2));
            // onDateQuerySubmit(
            //     this.state.daysOrHours,
            //     this.state.unitOfTime,
            //     this.state.operator,
            //     this.state.userDateTime
            // );
        }
    };

    // If server responded with answer or error then show answer component
    let answerComponent;
    if (values.queryResponse) {
        answerComponent = <Answer response={values.queryResponse} />;
    }

    let daysOrHoursErrorComponent;
    if (touched.daysOrHours && errors.daysOrHours) {
        daysOrHoursErrorComponent = (
            <Label pointing prompt>
                {touched.daysOrHours && errors.daysOrHours}
            </Label>
        );
    }

    return (
        <div>
            <div>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <Input
                                fluid
                                focus
                                name="daysOrHours"
                                id="days-or-hours-input"
                                type="text"
                                placeholder="example: 5"
                                value={values.daysOrHours}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {daysOrHoursErrorComponent}
                        </Form.Field>
                        <Form.Select
                            name="unitOfTime"
                            placeholder="mins/hrs/days..."
                            search
                            selection
                            options={unitOfTimeOptions}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Form.Select
                            fluid
                            name="operator"
                            placeholder="before or after"
                            search
                            selection
                            options={operatorOptions}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <DateTimeInput
                            fluid
                            name="userDateTime"
                            dateTimeFormat="MM-DD-YYYY HH:mm"
                            placeholder="Date"
                            value={values.userDateTime}
                            iconPosition="left"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Group>
                    <Button
                        animated
                        type="submit"
                        onClick={(e) =>
                            recordGAEvent('DateQueryBeforeAfterSubmitButton')
                        }
                    >
                        <Button.Content visible>is?</Button.Content>
                        <Button.Content hidden>
                            <Icon name="arrow right" />
                        </Button.Content>
                    </Button>
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

export default DateQueryBeforeAfter;
