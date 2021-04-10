import React from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Dropdown, Input } from 'semantic-ui-react';

const unitOfTimeOptions = [
    { key: '0', text: 'hours', value: '0' },
    { key: '1', text: 'days', value: '1' },
];

const operatorOptions = [
    { key: '0', text: 'before', value: '0' },
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
        };
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    };

    // see https://react.semantic-ui.com/modules/dropdown/#types-selection

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(
            this.state.daysOrHours,
            this.state.unitOfTime,
            this.state.operator,
            this.state.userDateTime
        );
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="fields">
                    <div className="field">
                        <label>Value</label>
                        <div className="ui input">
                            <Input
                                name="daysOrHours"
                                type="text"
                                placeholder="Number of Hours/Days"
                                value={this.state.daysOrHours}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label>Unit of Time</label>
                        <Dropdown
                            name="unitOfTime"
                            placeholder="Hours/Days"
                            search
                            selection
                            options={unitOfTimeOptions}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Operator</label>
                        <Dropdown
                            name="operator"
                            placeholder="Before/After"
                            search
                            selection
                            options={operatorOptions}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="field">
                        <label>Date/Time</label>
                        <DateInput
                            name="userDateTime"
                            placeholder="Date Time"
                            value={this.state.userDateTime}
                            iconPosition="left"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>&nbsp;</label>
                        <button className="ui button" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default DateQueryBeforeAfter;
