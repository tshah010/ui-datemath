import React from 'react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Dropdown, Input } from 'semantic-ui-react';

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
                    </div>
                    <div className="field">
                        <button className="ui button" type="submit">
                            is?
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default DateQueryBeforeAfter;
