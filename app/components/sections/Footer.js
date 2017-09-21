import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    footertext: PropTypes.string,
    copyright: PropTypes.string,
}

export default function Footer(props) {
    const { footertext, copyright } = props;
    return (
        <div className="footer-outerwrapper">
            <div className="footer-innerwrapper">
                {footertext && <div className="footer-maintext">{footertext}</div>}
                {copyright && <div className="footer-copyright">{`&#169;${copyright}`}</div>}
            </div>
        </div>
    );
}
