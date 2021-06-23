import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import csdimg1 from './csdimages/csd6.png'
import csdimg2 from './csdimages/csd4.png'
import csdimg3 from './csdimages/csd5.png'

class Csd2 extends React.Component {
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            padding: 50px 0px 0px 0px;
            @media (max-width:767px) {
                padding: 20px 0px 0px 0px;
            }
        `
        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Customized Software Development" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Introduction to Custom Software Development</h4>
                                        <p className="service_para_style">
                                        Recollect specifically twenty years previous, the merchandise advancement market in those days had a very distinctive state of affairs contrasted with what it's presently. the many distinctions that organizations discover now's the liberty to foster any quiet use that within the IT business is called as making custom programming applications smitten by the perfect innovation stack, needed ranges of skills, skill, and improvement procedures.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="seoimage_for_slide" src={csdimg1} alt="csd" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={csdimg2} alt="csd" />
                                </AnimationContainer>
                            </Col>
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Custom software development services</h4>
                                        <p className="service_para_style">
                                        It is tough to select a company to form a product application for your business. you must search for organizations to supply for the work and choose the organization that guarantees the right price and level of administration. These organizations usually meet with the mentioning associations to survey their requirements and choose the combined total of labour required to form the custom programming.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Custom software vs. off-the-shelf software</h4>
                                        <p className="service_para_style">
                                        Redone programming improvement involves the authorizing, advancement of Off-the-rack programming contains a bundled programming application accessible to a massive crowd with unsteady, however in an exceedingly general sense comparative, needs. For example, Microsoft Word is meant for the mass public as a solution for the numerous wants of its shoppers. In any case, it does not oblige a selected gathering or wants as custom programming would.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={csdimg3} alt="csd" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Csd2;