import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import mobslide1 from '../EcommerceSolution/imagesforservice/mobileslide/slide1.png'
import mobslide2 from '../EcommerceSolution/imagesforservice/mobileslide/slide2.png'
import mobslide3 from '../EcommerceSolution/imagesforservice/mobileslide/slide3.png'
import tabslide1 from '../EcommerceSolution/imagesforservice/tabletslide/slide1.png'
import tabslide2 from '../EcommerceSolution/imagesforservice/tabletslide/slide2.png'
import tabslide3 from '../EcommerceSolution/imagesforservice/tabletslide/slide3.png'
// import webimg1 from './webimages/webimg1.png'
// import webimg2 from './webimages/webimg2.png'
import webimg1 from './webimages/webnewimg2.png'
import webimg2 from './webimages/webnewimg1.png'
import './webdevlopment.css'
class Webdevelopment extends React.Component {
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
            @media (max-width:992px) {
                padding: 0px;
            }
            @media (max-width:767px) {
                padding: 20px 0px 0px 0px;
            }
        `

        const settings2 = {
            arrows: false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            autoplay: true,
        };
        return (
            <Section>
                <ServiceContainer>
                    <Container className="services_inside_container">
                        <AnimatedHeading text="Web Development" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdie_text_web_col_2" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">A web development team can single-handedly change your business</h4>
                                        <p className="service_para_style">
                                            In the age of interconnectivity, web development services are inevitably on the increase. Businesses of all shapes and sizes are putting their best efforts into maximizing the standard of their online presence, frequently by outsourcing IT services or augmenting their in-house IT staff with expert engineers.However, web development covers a huge range of solutions, most of which are customized to the client’s needs. Counting on the project’s requirements, they will include solutions like web application development, cybersecurity, testing, maintenance, consultancy, and even UI/UX design.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="tabletanimation">
                                        <div className="animated_tablet_inside_div">
                                            <Slider {...settings2}>
                                                <img className="animated_tablet_img" src={tabslide1} alt="tabslide1" />
                                                <img className="animated_tablet_img" src={tabslide2} alt="tabslide2" />
                                                <img className="animated_tablet_img" src={tabslide3} alt="tabslide3" />
                                            </Slider>
                                        </div>
                                    </div>
                                </AnimationContainer>
                                <div className="mobileanimation">
                                    <div className="animated_mobile_inside_div">
                                        <Slider {...settings2}>
                                            <img className="animated_mobile_inside" src={mobslide1} alt="mobslide1" />
                                            <img className="animated_mobile_inside" src={mobslide2} alt="mobslide2" />
                                            <img className="animated_mobile_inside" src={mobslide3} alt="mobslide3" />
                                        </Slider>
                                    </div>
                                </div>
                                <AnimationContainer animation="fadeInDown" delay={600}>
                                    <div className="laptopanimation">
                                        <div className="animated_laptop_inside_div">
                                            <Slider {...settings2}>
                                                <img className="animated_laptop_img" src={tabslide1} alt="tabslide1" />
                                                <img className="animated_laptop_img" src={tabslide2} alt="tabslide2" />
                                                <img className="animated_laptop_img" src={tabslide3} alt="tabslide3" />
                                            </Slider>
                                        </div>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={webimg1} alt="webdevelopment" />
                                </AnimationContainer>
                            </Col>
                            <Col lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="serviceinsdie_text_web_col">
                                        <h4 className="service_heading_style">Full Stack Web Development Services </h4>
                                        <p className="service_para_style">
                                            This is perhaps the foremost common service in web development due to its holistic approach. Unlike super-specialized developers, full-stack engineers have the expertise required to develop both the front and rear of web applications using the foremost effective programming languages and technologies for every case.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row_web">
                            <Col lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_web_col">
                                        <h4 className="service_heading_style">A Web App Development Agency You Should Definitely Invest</h4>
                                        <p className="service_para_style">
                                            Any business that operates online knows how competitive the internet arena is. Therefore, in order to achieve good conversions and better sales, our web based application development services will enable you to stand your ground in this particular industry.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={webimg2} alt="webdevelopment" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Webdevelopment;