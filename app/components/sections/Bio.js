import React from 'react';
import PropTypes from 'prop-types';
import { injectRules } from '../../util/Common';
import BioModal from '../controls/BioModal';

const propTypes = {
    headline: PropTypes.string.isRequired,
    sublines: PropTypes.array,
    rules: PropTypes.array,
    modals: PropTypes.array
};

export default class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openModalIndex: -1 };
    }

    makeToggleCallback(modalIndex) {
        return (() => {
            if (this.state.openModalIndex === -1) {
                this.setState({ openModalIndex: modalIndex });
            } else {
                this.setState({ openModalIndex: -1 });
            }
        }).bind(this);
    }

    render() {
        const { headline, sublines, rules, modals } = this.props;

        injectRules(sublines, rules);

        const sublineDivs = [];
        sublines.forEach((subline, idx) => {
            sublineDivs.push(
                <div key={`bio-${idx}`} className="bio-subline">
                    {subline}
                </div>
            );
        });

        const modalObjects = modals.map((dict, idx) => {
            return (
                <BioModal
                    key={`bio-modalobject-${idx}`}
                    isOpen={idx === this.state.openModalIndex}
                    toggle={this.makeToggleCallback(idx)}
                    {...dict}
                />
            );
        });

        const modalToggles = modals.map((dict, idx) => {
            return (
                <div
                    onClick={() => this.setState({ openModalIndex: idx })}
                    key={`bio-modaltoggle-${idx}`}
                    className="bio-modaltoggle"
                >
                    {dict.label}
                </div>
            );
        });

        return (
            <div id="about" className="bio-outerwrapper">
                <div className="bio-innerwrapper shadow">
                    <div className="bio-headline">{headline}</div>
                    {modalToggles}
                    <br />
                    {'--------'}
                    {sublineDivs}
                    {modalObjects}
                </div>
            </div>
        );
    }
}

Bio.propTypes = propTypes;

Bio.defaultProps = {
    sublines: [],
    rules: [],
    modals: []
};
