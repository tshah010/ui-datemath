import React from 'react';
import { Input, Label, Button } from 'semantic-ui-react';
import Answer from './Answer';
import moment from 'moment';

class EpochConverter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            epochSeconds: '',
            localDateTime: '',
        };
    }

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
            console.log(this.state.localDateTime);
            if (this.state.localDateTime === 'Invalid date') {
                answerToDisplay = 'Invalid Date';
            } else {
                answerToDisplay = { answer: this.state.localDateTime };
            }

            answerComponent = <Answer response={answerToDisplay} />;
        }

        return (
            <div className="ui grid">
                <div className="centered row">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="fields">
                            <div className="field">
                                <Input
                                    name="epochSeconds"
                                    labelPosition="right"
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
                                    <input />
                                </Input>
                            </div>
                            <div className="field">
                                <Button>is?</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="centered row" style={{ padding: 0 }}>
                    {answerComponent}
                </div>
            </div>
        );
    }
}

export default EpochConverter;
