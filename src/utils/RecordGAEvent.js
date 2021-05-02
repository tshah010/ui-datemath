import ReactGA from 'react-ga';

var recordGAEvent = (name) => {
    console.log('submitting GA event for ' + name);
    ReactGA.event({
        category: 'User',
        action: 'Clicked Button',
        label: name,
    });
};

export default recordGAEvent;
