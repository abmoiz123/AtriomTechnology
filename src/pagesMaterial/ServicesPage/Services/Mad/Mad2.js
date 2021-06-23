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
import mobimg1 from './mobappimages/mobapp1.png'
import mobimg2 from './mobappimages/mobapp2.png'
import mobimg3 from './mobappimages/mobapp3.png'
import mobimg4 from './mobappimages/mobapp4.png'

class Mad2 extends React.Component {
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
                        <AnimatedHeading text="Mobile App Development" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Set the Goals and Objectives of the Mobile Application</h4>
                                        <p className="service_para_style">
                                            In all the application projects we have participated in, I have noticed a continuing trend: mobile application development is a bit like a recorder, especially if you don’t have any programming skills. According to a recent study, about one-fifth of small and medium-sized companies have developed mobile apps, and many companies plan to launch them in 2016.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={mobimg1} alt="mobApp" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={mobimg2} alt="mobApp" />
                                </AnimationContainer>
                            </Col>
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Developing the App</h4>
                                        <p className="service_para_style">
                                            In fact, application development involves many steps and processes. If you are not using an application development platform or a mobile BaaS provider, your developers need to understand the storage solutions, databases, APIs, and specific servers behind the application. ... If you don't have an app store yet, don't forget to coordinate the developer account of the app store you want to use to distribute the app.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row_web">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Define the Backend of the Mobile Application</h4>
                                        <p className="service_para_style">
                                            Wireframes and storyboards can be used as a guide to the internal structure required supporting the application-think about APIs, data patterns, servers, data integration, and pushing notification services. In many cases, small and medium businesses find that choosing a mobile server as a service (BaaS) platform is a wise choice because it solves common problems such as scalability and internal functionality.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={mobimg3} alt="mobApp" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row_web2">
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={mobimg4} alt="mobApp" />
                                </AnimationContainer>
                            </Col>
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Our Premium Android Application Development Services</h4>
                                        <p className="service_para_style">
                                            Setting goals for mobile applications. This is an important step in the planning phase of mobile applications. Once you are sure that the application will help you achieve important goals in your mobile marketing plan, you need to outline how your application will help you achieve your goals.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Mad2;