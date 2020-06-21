import React from 'react';
import PropTypes from 'prop-types';
import ProjectList from '../controls/ProjectList';
import ProjectItem from '../controls/ProjectItem';

const propTypes = {
    title: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
        this.updateCurrent = this.updateCurrent.bind(this);
    }

    updateCurrent(selectedIndex) {
        this.setState({ selectedIndex });
    }

    render() {
        return (
            <div id="projects" className="project-outerwrapper">
                <div className="project-innerwrapper shadow">
                    <div className="project-headline">{this.props.title}</div>
                    <ProjectList
                        onChange={this.updateCurrent}
                        projects={this.props.projects}
                        selectedIndex={this.state.selectedIndex}
                    />
                    <ProjectItem
                        project={this.props.projects[this.state.selectedIndex]}
                    />
                </div>
            </div>
        );
    }
}

Project.propTypes = propTypes;

Project.defaultProps = {
    title: 'My Projects'
};
