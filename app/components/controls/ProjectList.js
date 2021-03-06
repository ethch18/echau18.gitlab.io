import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const propTypes = {
    onChange: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedIndex: PropTypes.number.isRequired,
};

export default function ProjectList(props) {
    const { projects } = props;
    
    const previews = [];
    for (let i = 0; i < projects.length; i++) {
        const current = projects[i];
        const selectedClass = i === props.selectedIndex ? 
            'projectlist-selected' : '';
        previews.push(
            <Col 
                onClick={() => props.onChange(i)}
                key={`list-${i}`}
                className="nopadding mx-auto"
            >
                <div className={`projectlist-item link-cursor ${selectedClass}`}>
                    <img className="projectlist-preview" src={`${current.imageBasePath}preview.png`} />
                </div>
            </Col>
        );
    }

    return (
        <div className="projectlist">
            <Row>
                {previews}
            </Row>
        </div>
    );
}

ProjectList.propTypes = propTypes;
