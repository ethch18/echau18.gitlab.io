import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    headline: PropTypes.string.isRequired,
    sublines: PropTypes.array,
    rules: PropTypes.array,
}

function preProcess(sublines, rules) {
    for (let i = 0; i < sublines.length; i++) {
        const subline = sublines[i];
        const ruleObject = rules[i];
        Object.keys(ruleObject).forEach((ruleName) => {
            const rule = ruleObject[ruleName];
            const index = rule.index;
            
            let result = ruleName;
            if (rule.link) {
                result = (
                    <a key={index} href={rule.link}>{result}</a>
                );
            }

            if (rule.color) {
                const colorObj = {
                    "color": rule.color,
                };
                result = (
                    <span key={index} style={colorObj}>{result}</span>
                );
            }
            subline[index] = result;
        });
    }
}

export default function Bio(props) {
    const { headline, sublines, rules } = props;

    preProcess(sublines, rules);

    const sublineDivs = [];
    sublines.forEach((subline, idx) => {
        sublineDivs.push(
            <div key={idx} className="bio-subline">{subline}</div>
        );
    });

    return (
        <div className="bio-outerwrapper">
            <div className="bio-innerwrapper">
                <div className="bio-headline">{headline}</div>
                {sublineDivs}
            </div>
        </div>
    );
}

Bio.propTypes = propTypes;
