import React from 'react';
import PropTypes from 'prop-types';
import Scrolly from '../controls/Scrolly';

const propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    headline: PropTypes.string
};

export default function Splash(props) {
    const { firstName, lastName, headline } = props;
    const combinedName = `${firstName} ${lastName}`;

    return (
        <div id="#" className="splash-outerwrapper">
            <div className="clearfix splash-innerwrapper">
                <div className="splash-leftcorner splash-corner" />
                <div className="splash-content">
                    <div className="splash-heading">{combinedName}</div>
                    {headline && (
                        <div className="splash-headline">{headline}</div>
                    )}
                </div>
                <div className="splash-rightcorner splash-corner" />
            </div>
            <Scrolly to="#about" />
        </div>
    );
}

Splash.propTypes = propTypes;
