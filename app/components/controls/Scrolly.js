import React from 'react';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';

const propTypes = {
    to: PropTypes.string.isRequired
};

export default function Scrolly(props) {
    const { to } = props;
    return (
        <Scrollchor to={to} animate={{ duration: 1000 }}>
            <div className="scrolly splash-corner link-cursor" />
        </Scrollchor>
    );
}

Scrolly.propTypes = propTypes;
