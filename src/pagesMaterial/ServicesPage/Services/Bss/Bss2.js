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
import bssimg1 from './bssimages/bss6.png'
import bssimg2 from './bssimages/bss4.png'
import bssimg3 from './bssimages/bss5.png'

class Bss2 extends React.Component {
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
                        <AnimatedHeading text="Business Software Solutions" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">More regarding IT software system Solutions for Business</h4>
                                        <p className="service_para_style">
                                            A business software system (or a business application) is any software system or set of business programs employed by business users to perform varied business functions. These business applications area unit accustomed increase productivity, live production and perform alternative business functions accurately.One of the areas of greatest demand in today’s business world is providing software system solutions.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="seoimage_for_slide" src={bssimg1} alt="bss" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={bssimg2} alt="bss" />
                                </AnimationContainer>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Project Management Software</h4>
                                        <p className="service_para_style">
                                            Forget about effective business management while not using an infatuated project management tool. That’s why we’re starting the list with nTask. A project management software system coming back with a large number of options to help you complete your business comes with success.This can involve making utterly new systems or modifying existing ones, operating as a region of the team to blame for analysis and elegance, construction, testing, and maintenance.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row">
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Customer Support Software</h4>
                                        <p className="service_para_style">
                                            Forget about effective business management while not using a frenzied project management tool. That’s why we’re starting the list with nTask. A project management code returning with a large number of options to help you complete your business comes with success.This field changes apace creating is essential to remain on high of the most recent developments among the trade to best serve shoppers.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={bssimg3} alt="bss" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Bss2;