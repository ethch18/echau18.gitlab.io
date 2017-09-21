import React from 'react';

export function injectRules(contents, rules) {
    for (let i = 0; i < contents.length; i++) {
        const subline = contents[i];
        const ruleObject = rules[i];
        Object.keys(ruleObject).forEach((ruleName) => {
            const rule = ruleObject[ruleName];
            const index = rule.index;
            
            let result = ruleName;
            if (rule.bold) {
                result = (<b key={`${ruleName}-bold-${index}`}>{result}</b>)
            }
            if (rule.link) {
                result = (
                    <a key={`${ruleName}-link-${index}`} href={rule.link}>{result}</a>
                );
            }
            if (rule.color) {
                const colorObj = {
                    "color": rule.color,
                };
                result = (
                    <span key={`${ruleName}-color-${index}`} style={colorObj}>{result}</span>
                );
            }
            subline[index] = result;
        });
    }
}