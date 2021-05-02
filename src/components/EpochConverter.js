import React from 'react';
import ReactGA from 'react-ga';

import { Input, Label } from 'semantic-ui-react';
import Answer from './Answer';
import moment from 'moment';

import recordGAEvent from '../utils/RecordGAEvent';

class EpochConverter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            epochSeconds: '',
            localDateTime: '',
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

    onFormSubmit = (event) => {
        event.preventDefault();
        let localDateTime = moment(this.state.epochSeconds * 1000).format(
            'ddd, d MMM YYYY HH:mm:ss Z',
            true
        );
        this.setState({ localDateTime: localDateTime });
    };

    render() {
        let answerComponent;
        let answerToDisplay;
        if (this.state.localDateTime) {
            if (this.state.localDateTime === 'Invalid date') {
                answerToDisplay = 'Invalid Date';
            } else {
                answerToDisplay = { answer: this.state.localDateTime };
            }

            answerComponent = <Answer response={answerToDisplay} />;
        }

        return (
            <div className="ui two column centered grid">
                <div className="two column centered row">
                    <div className="column" style={{ textAlign: 'right' }}>
                        <form onSubmit={this.onFormSubmit} className="ui form">
                            <Input
                                name="epochSeconds"
                                labelPosition="left"
                                type="text"
                                placeholder="seconds"
                                value={this.state.epochSeconds}
                                onChange={(event) =>
                                    this.setState({
                                        epochSeconds: event.target.value.replace(
                                            /\D/,
                                            ''
                                        ),
                                    })
                                }
                            >
                                <Label basic>Local Time for Epoch</Label>
                                <input style={{ width: '10%' }} />
                            </Input>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button
                                className="ui animated button"
                                type="submit"
                                onClick={(e) =>
                                    recordGAEvent('EpochConverterSubmitButton')
                                }
                            >
                                <div className="visible content">is?</div>
                                <div className="hidden content">
                                    <i className="right arrow icon"></i>
                                </div>
                            </button>
                        </form>
                    </div>
                    <div className="column">
                        <div>{answerComponent}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EpochConverter;
