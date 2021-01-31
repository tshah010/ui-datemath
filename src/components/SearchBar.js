import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    //92: Solving Content issues: converting onFormSubmit(event) {} to onFormSubmit = (event) => {} binds
    //'this' reference in the function to instance of SearchBar
    onFormSubmit = (event) => {
        //onFormSubmit(event) {
        //prevents form submission after user hits enter
        //form submission forces the page to refresh
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Input Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(event) =>
                                //this.render is called everytime this.setState is called
                                this.setState({ term: event.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
