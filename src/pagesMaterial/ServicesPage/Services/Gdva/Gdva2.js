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
// import gdva1 from './gdvaimages/gdva1.png'
// import gdva2 from './gdvaimages/gdva2.png'
// import gdva3 from './gdvaimages/gdva3.png'
import gdva1 from './gdvaimages/graphic2.png'
import gdva2 from './gdvaimages/graphic3.png'
import gdva3 from './gdvaimages/graphic1.png'

class Gdva2 extends React.Component {
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
                        <AnimatedHeading text="Graphic Design & Video Animation" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Our Experts Provide Animated Video Creation Services</h4>
                                        <p className="service_para_style">
                                            Discover a Webflow-embraced supporter to help along with your next project. Examine consultants smitten by what you would like and connect with beginning a discussion. Create reusable pictures. Add your code. Keep elements coordinated. Fare code for transfer. Models: Core concepts, CSS associations, 3D Styles, and also the sky is that the limit from there
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={gdva1} alt="gdva" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={gdva2} alt="gdva" />
                                </AnimationContainer>
                            </Col>
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Engage your Audience through video Animation Graphics</h4>
                                        <p className="service_para_style">
                                            The upward thrust of virtual movement portraits is specifically due to its cap potential to make clear an idea and visualize within side the maximum aesthetically fascinating manner. Though ‘idea’ and ‘visualization’ join the dots again to the perception of telling an invigorating ‘story’.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row_web">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Animation Method of Photography </h4>
                                        <p className="service_para_style">
                                            Animation ought to be a method of photographing consecutive drawings, models, or possibly puppets, to make AN phantasm of motion throughout a sequence. as a result of our eyes will entirely continue an image for approx. 1/10 of a second, as soon as a couple of pix appear in rapid succession, the Genius blends them into one shifting image. In historic animation, photographs are drawn or painted on clear celluloid sheets to be photographed
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={gdva3} alt="gdva" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Gdva2;