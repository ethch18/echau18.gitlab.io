import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { injectRules } from '../../util/Common';

const propTypes = {
    project: PropTypes.object.isRequired,
};

export default function ProjectItem(props) {
    const { 
        title, 
        subtitle, 
        isActive, 
        codeLink, 
        activeLink, 
        imageBasePath, 
        imageType,
        details,
        rules
    } = props.project;

    const fullSizeImage = `${imageBasePath}${imageType}`;
    
    let status, statusIco;
    if (isActive) {
        status = 'Active';
        statusIco = (<img className="projectitem-statusico" src="../../dot-active.svg" />);
    }
    else {
        status = 'Inactive';
        statusIco = (<img className="projectitem-statusico" src="../../dot-inactive.svg" />);
    }
    
    const statusHref = activeLink ? activeLink: codeLink;

    injectRules(details, rules);
    const detailList = [];
    details.forEach((element, index) => {
        detailList.push(<li key={`${title}-${index}`}>{element}</li>);
    });

    return (
        <div className="projectitem">
            <Row>
                <Col xs={12} md={7}>
                    <img className="projectitem-image shadow" src={fullSizeImage} />
                </Col>
                <Col xs={12} md={5}>
                    <div className="projectitem-title">{title}</div>
                    <div className="projectitem-subtitle">{subtitle}</div>
                    <div className="projectitem-status">
                        <a href={statusHref}>
                            {statusIco}
                            <span className="tinymargin-left">{status}</span>
                        </a>
                        {codeLink && <a href={codeLink} className="tinymargin-left icon fa fa-github" />}
                    </div>
                    <div className="projectitem-details">
                        <ul>
                            {detailList}
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );

}

ProjectItem.propTypes = propTypes;
