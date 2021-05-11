import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class SwaggerDocs extends Component {
    render() {
        return (
            <WebView
                source={{
                    uri: process.env.REACT_APP_DATEMATH_API_SWAGGER_DOCS,
                }}
                style={{ marginTop: 20 }}
            />
        );
    }
}

export default SwaggerDocs;
