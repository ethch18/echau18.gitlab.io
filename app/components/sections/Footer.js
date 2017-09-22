import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    footertext: PropTypes.string,
    copyright: PropTypes.string,
}

export default function Footer(props) {
    const { footertext, copyright } = props;
    return (
        <div id="footer" className="footer-outerwrapper">
            <div className="footer-innerwrapper shadow">
                {footertext && <div className="footer-maintext">{footertext}</div>}
                {copyright && <div className="footer-copyright">{`\u00a9 ${copyright}`}</div>}
            </div>
        </div>
    );
}
