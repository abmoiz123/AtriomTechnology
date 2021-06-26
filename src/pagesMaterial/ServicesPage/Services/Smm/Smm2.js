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
// import smmimg1 from './smmimages/smm1.png'
// import smmimg2 from './smmimages/smm2.png'
// import smmimg3 from './smmimages/smm3.png'
import smmimg1 from './smmimages/smmnew1.png'
import smmimg2 from './smmimages/smmnew2.png'
import smmimg3 from './smmimages/smmnew3.png'

class Smm2 extends React.Component {
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
                        <AnimatedHeading text="Social Media Marketing" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Social Media Marketing</h4>
                                        <p className="service_para_style">
                                            The term "Social Media Marketing" (SMM) refers to the use of social media and social media to establish connections with company products and services. , Mission or tone. Social media marketing specifically designed data analysis tools to enable marketers to track the success of their efforts.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="seoimage_for_slide" src={smmimg1} alt="smm" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={smmimg2} alt="smm" />
                                </AnimationContainer>
                            </Col>
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">How Does Social Media (SMM) Works</h4>
                                        <p className="service_para_style">
                                            Social media has changed the way we operate as a society, including the way we interact with each other. With the advancement of platforms such as Facebook, Twitter and Instagram, companies have also noticed this. These sites promote your interest through social media marketing. This is because these sites can change consumer behavior.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Social Media Advertising</h4>
                                        <p className="service_para_style">
                                        When you have a lot of funds to grow your social media selling, a neighborhood that you simply will contemplate is social media advertising. Social media ads permit you to succeed in a wider audience than people who area unit following you.Social media advertising platforms area unit thus powerful today that you simply will specify specifically United Nations agency to show your ads to. You’ll be able to produce target audiences supported their demographics, interests, behaviors, and more.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={smmimg3} alt="smm" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Smm2;