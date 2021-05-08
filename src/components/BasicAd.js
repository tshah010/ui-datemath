import React, { Component } from 'react';

class BasicAd extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins
                className="adsbygoogle"
                style={{ display: 'block', height: 600, width: 160 }}
                data-ad-client="ca-pub-2363905445217006"
                data-ad-slot="5451645141"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        );
    }
}

export default BasicAd;
