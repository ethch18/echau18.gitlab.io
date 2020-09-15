import React from 'react';

export function injectRules(contents, rules) {
    for (let i = 0; i < contents.length; i++) {
        const subline = contents[i];
        if (subline.constructor == Object) {
            contents[i] = parseDict(subline);
        } else {
            const ruleObject = rules[i];
            Object.keys(ruleObject).forEach(ruleName => {
                const rule = ruleObject[ruleName];
                const index = rule.index;

                let result = ruleName;
                if (rule.bold) {
                    result = <b key={`${ruleName}-bold-${index}`}>{result}</b>;
                }
                if (rule.link) {
                    result = (
                        <a key={`${ruleName}-link-${index}`} href={rule.link}>
                            {result}
                        </a>
                    );
                }
                if (rule.color) {
                    const colorObj = {
                        color: rule.color
                    };
                    result = (
                        <span
                            key={`${ruleName}-color-${index}`}
                            style={colorObj}
                        >
                            {result}
                        </span>
                    );
                }
                subline[index] = result;
            });
        }
    }
}

function parseDict(dict) {
    console.log(dict);
    if (dict['type'] === 'publication') {
        return parsePublication(dict);
    } else {
        throw 'Unsupported data type.';
    }
}

function parsePublication(dict) {
    const authorsRef = dict['authors'];
    const myIndex = dict['myIndex'];

    const authors = authorsRef.map((val, idx) =>
        idx === myIndex ? <b>{val}</b> : val
    );

    let author;
    if (authors.length === 1) {
        author = authors[0];
    } else if (authors.length === 2) {
        author = (
            <span>
                {authors[0]} and {authors[1]}
            </span>
        );
    } else {
        author = [];
        for (let i = 0; i < authors.length - 1; i++) {
            author.push(authors[i]);
            author.push(', ');
        }
        author.push('and ');
        author.push(authors[authors.length - 1]);
    }

    let title;
    if (dict['url']) {
        title = <a href={dict['url']}>{dict['title']}</a>;
    } else {
        title = dict['title'];
    }

    const note = dict['note'] || '';

    if (dict['pubType'] === 'InProceedings') {
        const conference = <em>{dict['conference']}</em>;
        return [
            <span>
                {author}. {dict['year']}. {title}. In {conference}. {note}
            </span>
        ];
    } else if (dict['pubType'] === 'misc') {
        return [
            <span>
                {author}. {dict['year']}. {title}. {note}
            </span>
        ];
    } else {
        throw 'Unsupported publication type.';
    }
}

export function getParam(type) {
    const queryString = window.location.search;
    if (queryString) {
        const tokens = queryString.substring(1).split('&');
        for (let i = tokens.length - 1; i >= 0; i--) {
            const token = tokens[i].split('=');
            if (type === token[0]) {
                return token[1];
            }
        }
    }
    return -1;
}

export const CommonAppProps = {
    getSrc: () => parseInt(getParam('src')),
    isRedirectFromFormSubmit: () => CommonAppProps.getSrc() === 1
};

export const CommonConstants = {
    formSubmitThankYou: '/?src=1#contact'
};
