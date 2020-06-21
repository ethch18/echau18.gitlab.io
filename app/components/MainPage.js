import React from 'react';
import PropTypes from 'prop-types';
import Splash from './sections/Splash';
import Bio from './sections/Bio';
import Project from './sections/Project';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const propTypes = {
    data: PropTypes.object.isRequired
};

export default class MainPage extends React.Component {
    getSplash() {
        return <Splash {...this.props.data.splash} />;
    }

    getBio() {
        return <Bio {...this.props.data.bio} />;
    }

    getProjects() {
        return <Project {...this.props.data.projects} />;
    }

    getContact() {
        return <Contact {...this.props.data.contact} />;
    }

    getFooter() {
        return <Footer {...this.props.data.footer} />;
    }

    render() {
        return (
            <div className="mainpage-wrapper">
                {this.getSplash()}
                {this.getBio()}
                {this.getProjects()}
                {this.getContact()}
                {this.getFooter()}
            </div>
        );
    }
}

MainPage.propTypes = propTypes;
