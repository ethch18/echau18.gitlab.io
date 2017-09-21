import React from 'react';
import PropTypes from 'prop-types'
import Splash from './sections/Splash';
import Bio from './sections/Bio';
import Project from './sections/Project';

const propTypes = {
    data: PropTypes.object.isRequired,
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

    getProjects() {
        const { projects } = this.props.data.projects;
        return (
            <Project
                projects={projects}
            />
        );
    }
    
    render() {
        return (
            <div className="mainpage-wrapper">
                {this.getSplash()}
                {this.getBio()}
                {this.getProjects()}
            </div>
        );
    }
}

MainPage.propTypes = propTypes;
