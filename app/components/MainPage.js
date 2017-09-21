import React from 'react';
import PropTypes from 'prop-types'
import Splash from './sections/Splash';
import Bio from './sections/Bio';
import Project from './sections/Project';
import Contact from './sections/Contact';

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

    getContact() {
        const { headertext, messages, mail, links } = this.props.data.contact;
        return (
            <Contact
                headertext={headertext}
                messages={messages}
                mail={mail}
                links={links}
            />
        )
    }
    
    render() {
        return (
            <div className="mainpage-wrapper">
                {this.getSplash()}
                {this.getBio()}
                {this.getProjects()}
                {this.getContact()}
            </div>
        );
    }
}

MainPage.propTypes = propTypes;
