import React from 'react';

const About = () => {
    return (
        <div className="ui container grid">
            <div className="row">
                <div className="ui basic segment">
                    <h1 className="ui huge header">About dateMath.net</h1>
                    <p className="lead">
                        Free online calculators for performing Date and Time
                        arithmetic.
                    </p>
                    <p className="lead">
                        <h2>Technology Stack</h2>
                    </p>
                    <div className="ui segment">
                        <div className="ui two column very relaxed grid">
                            <div className="column">
                                <p>
                                    <h3 style={{ color: '#4285F4' }}>
                                        Front End
                                    </h3>
                                </p>
                                <div className="ui bulleted list">
                                    <div className="item">
                                        <b>React</b>: makes it painless to
                                        create interactive UIs.
                                    </div>
                                    <div className="item">
                                        <b>Semantic UI</b>: is a development
                                        framework that helps create beautiful,
                                        responsive layouts using human-friendly
                                        HTML.
                                    </div>
                                    <div className="item">
                                        <b>Amazon Web Services (AWS) S3</b>: has
                                        a simple web services interface that you
                                        can use to store and retrieve any amount
                                        of data, at any time, from anywhere on
                                        the web.
                                    </div>
                                    <div className="item">
                                        <b>Google Analytics</b>: measures
                                        traffic sources and interactions with
                                        your content; shows impact of your
                                        digital marketing.
                                    </div>
                                    <div className="item">
                                        <b>Visual Studio Code</b>: is a free
                                        coding editor that helps you start
                                        coding quickly. Use it to code in any
                                        programming language, without switching
                                        editors.
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <p>
                                    <h3 style={{ color: '#EA4335' }}>
                                        Server Side
                                    </h3>
                                </p>
                                <div className="ui bulleted list">
                                    <div className="item">
                                        <b>Spring Boot with JDK 15</b>: makes it
                                        easy to create stand-alone,
                                        production-grade Spring based
                                        Applications that you can "just run".
                                    </div>
                                    <div className="item">
                                        <b>SpringDoc-OpenAPI</b>: is java
                                        library helps automating the generation
                                        of API documentation. Is allows using
                                        Swagger-API annotations.
                                    </div>
                                    <div className="item">
                                        <b>Amazon Web Services (AWS) EC2</b>: is
                                        a web service that provides secure,
                                        resizable compute capacity in the cloud.
                                    </div>
                                    <div className="item">
                                        <b>IntelliJ IDEA</b>: analyzes your
                                        code, looking for connections between
                                        symbols across all project files and
                                        languages. Using this information it
                                        provides indepth coding assistance,
                                        quick navigation, clever error analysis,
                                        and, of course, refactorings.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui vertical divider">and</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="ui basic segment">
                    <div className="ui info message">
                        <div className="header">COMING SOON</div>
                        <ul className="list">
                            <li>Public Github Repos for the UI and API!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
