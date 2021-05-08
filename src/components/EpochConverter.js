import React from 'react';
import ReactGA from 'react-ga';

import { Input, Icon, Form, Button } from 'semantic-ui-react';
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
            <div className="ui grid">
                <div className="three column centered row">
                    <div className="column" style={{ padding: 0 }}>
                        <form onSubmit={this.onFormSubmit} className="ui form">
                            <Form.Group>
                                <Form.Field>
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
                                    ></Input>
                                </Form.Field>
                                <Form.Field inline>
                                    <Button
                                        animated
                                        type="submit"
                                        onClick={(e) =>
                                            recordGAEvent(
                                                'EpochConverterSubmitButton'
                                            )
                                        }
                                    >
                                        <Button.Content visible>
                                            is?
                                        </Button.Content>
                                        <Button.Content hidden>
                                            <Icon name="arrow right" />
                                        </Button.Content>
                                    </Button>
                                </Form.Field>
                            </Form.Group>
                        </form>
                    </div>

                    <div className="ui grid">
                        <div className="three column centered row">
                            {answerComponent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EpochConverter;
