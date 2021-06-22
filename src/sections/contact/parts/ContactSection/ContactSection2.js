import React from 'react'
import styled from 'styled-components'
import { Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import "./ContactSection.css";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
class ContactSection extends React.Component {
    render() {
        const Separator = styled.div`
        height: 3px;
        width: 50px;
        background-color: #00468b;
        margin-bottom: 10px;
        margin-left: 6px;
    `

        return (
            <Container className="contact_detail_container">
                <Col className="contact_detail_col" md={12}>
                    <img className="atmlogo" src="/img/Atriom-Logo-2.png" alt="Atriom" />
                    <p className="com_info">
                        We Promise the Growth of your Business!
                        <br />
                        At Atriom Technologies, we deliver innovative solutions that allow you to reach your goals and  surpass them, with us it’s a complete roadmap to success.</p>
                    <h5 className="infoheding">Locate</h5>
                    <Separator />
                    <p className="com_info">
                        <FontAwesomeIcon className="contact_form_icon" icon={faHome} />
                        3rd Floor, R-209, Saba Avenue, Main Road, Block 13 D 2 Gulshan-e-Iqbal, Karachi City, Sindh 75300</p>
                    <br />
                    <p className="com_info">
                        <FontAwesomeIcon className="contact_form_icon" icon={faHome} />
                        International House, 12 Constance Street, London, United Kingdom</p>
                    <h5 className="infoheding">Contact</h5>
                    <Separator />
                    <p className="com_info">
                        <FontAwesomeIcon className="contact_form_icon" icon={faEnvelope} />
                        info@atriom.co.uk<br />
                        <FontAwesomeIcon className="contact_form_icon" icon={faPhone} />
                        +44 7401379573,<br />
                        <FontAwesomeIcon className="contact_form_icon" icon={faPhone} />
                        +92 3020825699</p>
                </Col>
            </Container>
        )
    }

}

export default ContactSection;