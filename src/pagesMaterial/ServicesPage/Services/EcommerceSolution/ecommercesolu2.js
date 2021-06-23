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
import './ecommercesolu.css'
import addtocart from './imagesforservice/products.png'
import image1 from './imagesforservice/slideersection2/img1.png'
import image2 from './imagesforservice/slideersection2/img2.png'
import phone from './imagesforservice/slidersection3/img1.png'
import phone2 from './imagesforservice/slidersection3/img3.png'
import mobslide1 from './imagesforservice/mobileslide/slide1.png'
import mobslide2 from './imagesforservice/mobileslide/slide2.png'
import mobslide3 from './imagesforservice/mobileslide/slide3.png'
import tabslide1 from './imagesforservice/tabletslide/slide1.png'
import tabslide2 from './imagesforservice/tabletslide/slide2.png'
import tabslide3 from './imagesforservice/tabletslide/slide3.png'
import Ecommercecounter from './ecommercecounter'

class Ecommercesolu2 extends React.Component {
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
                    <Container>
                        <AnimatedHeading text="E-Commerce Solutions" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdie_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Managed E-Commerce Solutions</h4>
                                        <p className="service_para_style">
                                            We offer the best web-based services that ensure your audience remains on your page and learns more about your business instead of leaving
                                            Our diligence and dedication has earned us a ranking within the top e-Commerce development companies
                                            Our skilled team has the knowledge and tools that make them the simplest at e-Commerce website designing
                                            The result we come up with always fulfils our client's requirements and satisfies them.
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
                                <div className="div_1_for_slide">
                                    <AnimationContainer animation="fadeInUp" delay={1000}>
                                        <img className="image_1_for_slide" src={image1} alt="e-commerce" />
                                    </AnimationContainer>
                                </div>
                                <div className="div_2_for_slide">
                                    <AnimationContainer animation="fadeInLeft" delay={1000}>
                                        <img className="image_2_for_slide" src={image2} alt="e-commerce" />
                                    </AnimationContainer>
                                </div>
                            </Col>
                            <Col className="serviceinsdie_text_col_2" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Amazon, Dropshipping and Digital Marketing Services</h4>
                                        <p className="service_para_style">
                                            We design eCommerce websites with complete optimization that ensures it is user friendly and easy to use and catches the public eyes. We are providing the safe, secure and user-friendly Payment Gateway Integration that means, the payment gateway feature that provides secure and fast transaction with an easy return.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row">
                            <Col className="serviceinsdie_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Amazon Services</h4>
                                        <p className="service_para_style">
                                            Amazon's eCommerce services entail making money through retail, web services, and subscriptions. Retail is the primary source of revenue for Amazon when both online and physical stores contributing huge income. Advertising is also one of the fastest-growing businesses. Therefore, if you need any of these services, we are right here to help you to achieve them.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <img className="image_3_for_slide" src={addtocart} alt="e-commerce" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={1000}>
                                    <img className="image_3_for_slide" src={phone} alt="e-commerce" />
                                </AnimationContainer>
                                <AnimationContainer animation="fadeInLeft" delay={1000}>
                                    <img className="image_4_for_slide" src={phone2} alt="e-commerce" />
                                </AnimationContainer>
                            </Col>
                            <Col className="serviceinsdie_text_col_end" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Dropshipping Solution</h4>
                                        <p className="service_para_style">
                                            Dropshipping is a business transaction that involves the vendor who fulfils the orders for the third party, and they are shipped directly to the owner. The vendor will pay the discounted price for the item to the manufacturer; they make a profit through then the difference between the item cost and its selling price. So, dropshipping is one worth idea for your business, and you get assisted to achieve it with Atriom technologies. With all the resources you have at your disposal, this is doable, and you will reap from it profitably.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                    <Ecommercecounter />
                </ServiceContainer>
            </Section>
        )
    }

}

export default Ecommercesolu2;