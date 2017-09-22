import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import { CommonAppProps, CommonConstants } from '../../util/Common';

const propTypes = {
    headertext: PropTypes.string.isRequired,
    messages: PropTypes.object,
    mail: PropTypes.string,
    links: PropTypes.object,
};

function buildMessageForm(toAddress) {
    const action = `https://formspree.io/${toAddress}`;
    return (
        <div>
            <form action={action} method="POST">
                <Row>
                    <FormGroup>
                        <Col xs={12} sm={6}>
                            <FormControl 
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="contact-formcomp"
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <FormControl 
                                type="email"
                                name="_replyto"
                                placeholder="Email"
                                className="contact-formcomp"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col xs={12}>
                            <FormControl
                                type="text"
                                name="_subject"
                                placeholder="Subject"
                                className="contact-formcomp"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col xs={12}>
                            <FormControl
                                type="text"
                                name="message"
                                placeholder="Message"
                                componentClass="textarea"
                                className="contact-formcomp contact-formcomp-tall"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="_gotcha"
                            style={{display: "none"}}
                        />
                        <FormControl
                            type="hidden"
                            name="_next"
                            value={CommonConstants.formSubmitThankYou}

                        />
                    </FormGroup>
                    <FormGroup>
                        <Col className="col-centered">
                            <Button
                                type="submit"
                                className="contact-formcomp"
                            >
                                Send Message
                            </Button>
                        </Col>
                    </FormGroup>
                </Row>
                <FormGroup>
                        <FormControl.Static className="contact-formwarn">
                            (You'll be redirected to FormSpree's reCaptcha page.  Don't worry, this is just an anti-spam measure on their end!)
                        </FormControl.Static>
                    </FormGroup>
            </form>
        </div>
    );
}

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formSubmitted: CommonAppProps.isRedirectFromFormSubmit(),
            formVisible: !this.props.messages.hideFormOnInit,
        };
        this.showForm = this.showForm.bind(this);
    }

    showForm() {
        this.setState({ formVisible: true });
        window.location.hash = '#contact';
    }

    render() {
        const { headertext, messages, mail, links } = this.props;
        const { internettext, messagetext, messagethanks } = messages;
        
            const linkIcons = [];
        
            const linkKeys = Object.keys(links);
            for (let i = 0; i < linkKeys.length; i++) {
                const linkName = linkKeys[i];
                const link = links[linkName];
                linkIcons.push(
                    <a href={link} key={`contactlinks-${i}`} className={`contact-icon icon fa fa-2x fa-${linkName}`} />
                );
            }
        
            const messageForm = buildMessageForm(mail);
        
            return (
                <div id="contact" className="contact-outerwrapper">
                    <div className="contact-innerwrapper shadow">
                        <div className="contact-header">{headertext}</div>
                        {internettext && <div className="contact-option">{internettext}</div>}
                        <div>
                            {linkIcons}
                        </div>
                        {messagetext && messagethanks && mail && this.state.formSubmitted ? 
                            (
                                <div className="contact-thankyou">
                                    {messagethanks}
                                </div>
                            ) :
                            (
                                <div>
                                    {this.state.formVisible ? 
                                        (
                                            <div>
                                                <div className="contact-option">{messagetext}</div>
                                                {messageForm}
                                            </div>

                                        ) :
                                        (
                                            <a className="contact-option" onClick={this.showForm}>{messagetext}</a>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            );
    }
}

Contact.propTypes = propTypes;
