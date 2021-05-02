import React from 'react';

const About = () => {
    return (
        <div className="ui container grid">
            <div className="row">
                <div className="ui basic segment">
                    <h1 className="ui huge header">About dateMath.net</h1>
                    <p className="lead">
                        The website is designed to allow users to perform Date
                        and Time caluculations in an easy to use UI.
                    </p>
                    <p className="lead">
                        <h2>Technology Stack</h2>
                    </p>
                    <div class="ui segment">
                        <div class="ui two column very relaxed grid">
                            <div class="column">
                                <p>
                                    <h3 style={{ color: '#4285F4' }}>
                                        Front End
                                    </h3>
                                </p>
                                <div class="ui bulleted list">
                                    <div class="item">
                                        <b>React</b>: React makes it painless to
                                        create interactive UIs.
                                    </div>
                                    <div class="item">
                                        <b>Semantic UI</b>: Semantic is a
                                        development framework that helps create
                                        beautiful, responsive layouts using
                                        human-friendly HTML.
                                    </div>
                                    <div class="item">
                                        <b>Visual Studio Code</b>: Visual Studio
                                        Code is a free coding editor that helps
                                        you start coding quickly. Use it to code
                                        in any programming language, without
                                        switching editors.
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <p>
                                    <h3 style={{ color: '#EA4335' }}>
                                        Server Side
                                    </h3>
                                </p>
                                <div class="ui bulleted list">
                                    <div class="item">
                                        <b>Spring Boot with JDK 15</b>: Spring
                                        Boot makes it easy to create
                                        stand-alone, production-grade Spring
                                        based Applications that you can "just
                                        run".
                                    </div>
                                    <div class="item">
                                        <b>Docker</b>: Docker helps developers
                                        bring their ideas to life by conquering
                                        the complexity of app development.
                                    </div>
                                    <div class="item">
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
                        <div class="ui vertical divider">and</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="ui basic segment">
                    <div class="ui info message">
                        <div class="header">COMING SOON</div>
                        <ul class="list">
                            <li>Public Github Repos for UI and API!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
