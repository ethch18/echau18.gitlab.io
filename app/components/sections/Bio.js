import React from 'react';
import PropTypes from 'prop-types';
import { injectRules } from '../../util/Common';

const propTypes = {
    headline: PropTypes.string.isRequired,
    sublines: PropTypes.array,
    rules: PropTypes.array,
}

export default function Bio(props) {
    const { headline, sublines, rules } = props;

    injectRules(sublines, rules);

    const sublineDivs = [];
    sublines.forEach((subline, idx) => {
        sublineDivs.push(
            <div key={`bio-${idx}`} className="bio-subline">{subline}</div>
        );
    });

    return (
        <div id="about" className="bio-outerwrapper">
            <div className="bio-innerwrapper shadow">
                <div className="bio-headline">{headline}</div>
                {sublineDivs}
            </div>
        </div>
    );
}

Bio.propTypes = propTypes;

Bio.defaultProps = {
    sublines: [],
    rules: [],
}
