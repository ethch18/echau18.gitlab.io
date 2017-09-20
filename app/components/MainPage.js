import React from 'react';
import PropTypes from 'prop-types'
import Splash from './sections/Splash';
import Bio from './sections/Bio';

const propTypes = {
    data: PropTypes.object,
}

export default class MainPage extends React.Component {
    getSplash() {
        const { firstName, lastName, headline } = this.props.data.splash;
        return (
            <Splash  
                firstName={firstName}
                lastName={lastName}
                headline={headline}
            />
        );
    }

    getBio() {
        const { headline, sublines, rules } = this.props.data.bio;
        return (
            <Bio
                headline={headline}
                sublines={sublines}
                rules={rules}
            />
        );
    }
    
    render() {
        return (
            <div className="mainpage-wrapper">
                {this.getSplash()}
                {this.getBio()}
            </div>
        );
    }
}

MainPage.propTypes = propTypes;
