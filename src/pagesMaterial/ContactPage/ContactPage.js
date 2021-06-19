import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import ContactForm2 from '../../sections/contact/parts/ContactForm2/ContactForm2'
import ContactSection from '../../sections/contact/parts/ContactSection/ContactSection2'
import './ContactPage.css'

class ContactPage extends React.Component {
    render() {
        return (
            <Container fluid className="creative_container_contactPage">
                <AnimatedHeading text="Contact Us" />
                <AnimationContainer animation="fadeIn">
                    <Row className="formRow">
                        <Col className="form_col" lg={8} md={8} sm={12}><ContactForm2 /></Col>
                        <Col className="form_col" lg={4} md={4} sm={12}><ContactSection /></Col>
                    </Row>
                </AnimationContainer>
            </Container>
        )
    }
}
export default ContactPage;