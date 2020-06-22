import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { injectRules } from '../../util/Common';

const propTypes = {
    headline: PropTypes.string.isRequired,
    sublines: PropTypes.array,
    rules: PropTypes.array,
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    hangingContent: PropTypes.bool
};

export default function BioModal(props) {
    const { headline, sublines, rules, isOpen, toggle, hangingContent } = props;

    injectRules(sublines, rules);
    const sublineDivs = sublines.map((subline, idx) => {
        return (
            <div
                key={`bio-modal-${headline}-${idx}`}
                className={`bio-modalsubline ${
                    hangingContent ? 'hanging' : ''
                }`}
            >
                {subline}
            </div>
        );
    });

    const backdropTransition = {
        timeout: 0
    };

    const modalTransition = {
        timeout: 25
    };

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            centered
            size={'lg'}
            backdropTransition={backdropTransition}
            modalTransition={modalTransition}
        >
            <ModalHeader toggle={toggle}>{headline}</ModalHeader>
            <ModalBody>{sublineDivs}</ModalBody>
        </Modal>
    );
}

BioModal.propTypes = propTypes;

BioModal.defaultProps = {
    sublines: [],
    rules: [],
    hangingContent: false
};
