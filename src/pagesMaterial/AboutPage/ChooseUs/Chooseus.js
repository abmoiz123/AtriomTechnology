import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import Particles from 'react-particles-js';
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import webimage from '../../../../static/WEBDEVELOPMENT.png'
import mobimage from '../../../../static/MOBDEVELOPMENT.png'
import seoimage from '../../../../static/SEO2.png'
import emailimage from '../../../../static/EMAILS.png'
import networkimage from '../../../../static/NETWORK2.png'
import sketchimage from '../../../../static/UIUX.png'
import './ChooseUs.css'

class ChooseUs extends React.Component {


    shouldComponentUpdate() {
        return false
    }

    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #013567;
            .heading {
                width: 100%;
            }
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            padding: 300px 0 100px 0;
            @media (max-width:992px) {
                padding: 220px 0 80px 0;
            }
            @media (max-width:767px) {
                padding: 50px 15px;
            }
        `


        const ServiceElement = styled.div`
            // margin-bottom: 20px;
            text-align: center;
            height: 320px !important;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #013567;
                box-shadow: 0 28px 60px rgb(255,255,255, .3);
                transform: translateY(-10px);
            }
            @media (max-width:767px) {
                height: 250px !important;
                padding: 20px;
                background-color: #013567;
                box-shadow: 0 28px 60px rgb(255,255,255, .3);
                transform: translateY(-10px);
            }
            @media (max-width:576px) {
                height: 220px !important;
                padding: 10px;
            }
            @media (max-width:400px) {
                height: auto !important;
                padding: 10px;
            }
        `
        const ServiceHeading = styled.h4`
            font-size: 35px;
            font-weight: 500;
            font-family: Teko;
            margin-top: 20px;
            color: #fff;
            @media (max-width:767px) {
                font-size: 25px;
            }
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #00468b;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 130px;
            }
            @media (max-width:767px) {    
                margin-bottom: 10px;
                img {
                    max-height: 100px;
                }
            }
            @media (max-width:576px) {    
                margin-bottom: 10px;
                img {
                    max-height: 80px;
                }
            }
        `

        return (
            <Section>
                <Particles
                    className="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 100,
                                "density": {
                                    "enable": true,
                                    "value_area": 2000
                                }
                            },
                            "color": {
                                // "value": ["#03afaf", "#04e5e5"]
                                "value": ["#f6b10a", "#f6b10a"]
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#fff"
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": true,
                                    "speed": 0.5,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 8.017060304327615,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 12.181158184520175,
                                    "size_min": 0.1,
                                    "sync": true
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": this.context.theme === "dark" ? "#fff" : "#555",
                                // "color": this.context.theme === "dark" ? "#fff" : "#fff",
                                "opacity": 0.5,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 1,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "bounce",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": false,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }} />
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Why Choose Us" />
                        <Row>
                            <Col className="service_col" lg={4} md={6} sm={6} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={mobimage} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Timely Completion Of Projects
                                            </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" lg={4} md={6} sm={6} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={emailimage} alt="Email Marketing" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Expert Developers
                                        </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" lg={4} md={6} sm={6} xs={12}>
                                <AnimationContainer animation="fadeInDown" delay={400}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={webimage} alt="Web Development" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Customer Service
                                        </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" lg={4} md={6} sm={6} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={seoimage} alt="seo experts" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Affordable Packages
                                        </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" lg={4} md={6} sm={6} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={networkimage} alt="Network Management" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Professional E-Commerce Management Team
                                        </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" lg={4} md={6} sm={6} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={1200}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={sketchimage} alt="UI/UX Development" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Provision Of SEO Services
                                            </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}
export default ChooseUs;