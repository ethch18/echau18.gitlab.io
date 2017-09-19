import React from 'react';
import PropTypes from 'prop-types'
import Splash from './sections/Splash';

const propTypes = {
    data: PropTypes.object,
}

export default class MainPage extends React.Component {
    getSplash() {
        const { firstName, lastName, headline} = this.props.data.splash;
        return (
            <Splash  
                firstName={firstName}
                lastName={lastName}
                headline={headline}
            />
        );
    }
    
    render() {
        return (
            <div className="mainpage-wrapper">
                {this.getSplash()}
            </div>
        );
    }
}

MainPage.propTypes = propTypes;
