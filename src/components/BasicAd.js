import React, { Component } from 'react';

class BasicAd extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins
                className="adsbygoogle"
                data-ad-client="ca-pub-2363905445217006"
                data-ad-slot="4640466102"
                style={{ display: 'inline-block', height: 160, width: 600 }}
            />
        );
    }
}

export default BasicAd;
