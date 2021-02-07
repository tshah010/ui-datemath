import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        //https://unsplash.com/documentation#search-photos
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
            },
        });
        // for this.setState to work the function should be an => function
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            // Attributes of SearchBar like onSubmit are sent inside a 'props' object to SearchBar Component
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;
