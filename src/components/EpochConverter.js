import React from 'react';
import { Input } from 'semantic-ui-react';
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
            'ddd, d MMM YYYY HH:mm:ss Z'
        );
        console.log(localDateTime);
        this.setState({ localDateTime: localDateTime });
    };

    render() {
        let answerComponent;
        if (this.state.localDateTime) {
            let answerToDisplay = { answer: this.state.localDateTime };
            answerComponent = <Answer response={answerToDisplay} />;
        }

        return (
            <div className="ui grid">
                <div className="centered row">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="fields">
                            <div className="field">
                                <Input
                                    focus
                                    name="epochSeconds"
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
                                />
                            </div>
                            <div className="field">
                                <button
                                    className="ui animated button"
                                    type="submit"
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
                <div className="centered row" style={{ padding: 0 }}>
                    {answerComponent}
                </div>
            </div>
        );
    }
}

export default EpochConverter;
