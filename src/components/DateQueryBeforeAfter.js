import React from 'react';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput,
} from 'semantic-ui-calendar-react';

class DateQueryBeforeAfter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            time: '',
            dateTime: '',
            datesRange: '',
            quantum: '',
            uot: '',
        };
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    };

    // see https://react.semantic-ui.com/modules/dropdown/#types-selection

    //92: Solving Content issues: converting onFormSubmit(event) {} to onFormSubmit = (event) => {} binds
    //'this' reference in the function to instance of SearchBar
    onFormSubmit = (event) => {
        //onFormSubmit(event) {
        //prevents form submission after user hits enter form submission forces the page to refresh
        // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        event.preventDefault();
        // call App.onSearchSubmit(term). Props are arguments passed into React components.
        this.props.onSubmit(this.state.quantum, this.state.uot);
    };

    render() {
        return (
            <div class="ui form">
                <div class="fields">
                    <div class="field">
                        <label>Value</label>
                        <input type="text" placeholder="Number of Days/Hours" />
                    </div>
                    <div class="field">
                        <label>Unit of Time</label>
                        <select class="ui dropdown">
                            <option value="">Select</option>
                            <option value="0">hours</option>
                            <option value="1">days</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Operation</label>
                        <select class="ui dropdown">
                            <option value="">Select</option>
                            <option value="0">before</option>
                            <option value="1">after</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Date/Time</label>
                        <DateTimeInput
                            name="dateTime"
                            placeholder="Date Time"
                            value={this.state.dateTime}
                            iconPosition="left"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="field">
                        <label>&nbsp;</label>
                        <button class="ui button" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DateQueryBeforeAfter;
