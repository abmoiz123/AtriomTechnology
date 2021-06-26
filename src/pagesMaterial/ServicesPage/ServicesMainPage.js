import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import AnimationContainer from 'components/animation-container'
import webservice from './Services/webdevlopment/webimages/webnewimg2.png'
import Ecommerceservice from './Services/EcommerceSolution/imagesforservice/ecommerce1.png'
import Seoservice from './Services/Seo/seoimages/seonew3.png'
import Socialservice from './Services/Smm/smmimages/smmnew1.png'
import Softwareservice from './Services/Bss/bssimages/bss4.png'
import Customizedservice from './Services/Csd/csdimages/csd6.png'
import Mobileappservice from './Services/Mad/mobappimages/mad3.png'
import Graphicdesignservice from './Services/Gdva/gdvaimages/graphic1.png'
import './Services/webdevlopment/webdevlopment.css'

class ServicesMainPage extends React.Component {
    render() {
        const Section = styled.section`
            position: relative;
          }
        `

        const ServiceContainer = styled.div`
            padding: 50px 0;
            @media (max-width:767px) {
                padding: 20px 0;
            }
        `

        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Our Services" />
                        <Row className="services_row">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <a href="/Webdevelopment" className="read_more_link"><img className="service_img" src={webservice} alt="Web-devlopment" /></a>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInDown" delay={600}>
                                    <a href="/Webdevelopment" className="read_more_link"><h1 className="service_heading">Web development</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">It refers to the work related to developing websites and their hosting through the use of the internet. The process of web development includes web content development, web design, network security and marketing.</p>
                                    <a href="/Webdevelopment" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_row2">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <a href="/EcommerceSolutions" className="read_more_link"><img className="service_img" src={Ecommerceservice} alt="E-commerceservice" /></a>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <a href="/EcommerceSolutions" className="read_more_link"><h1 className="service_heading">E-Commerce Solutions</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">Through eCommerce solutions, we help you get e-commerce services that help you to conduct business digitally. The range of eCommerce is broad, including traditional designs and creative websites, dropshipping stores. Our e-commerce solutions include:</p>
                                    <a href="/EcommerceSolutions" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_row">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <a href="/SearchEngineOptimization" className="read_more_link"><img className="service_img" src={Seoservice} alt="SEO" /></a>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInDown" delay={600}>
                                    <a href="/SearchEngineOptimization" className="read_more_link"><h1 className="service_heading">Search Engine Optimization</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">It is an aggregate of strategies, tactics, and techniques utilized to increase traffic flow to your website. It happens through ranking in search engine results, including Bing, Google, and Yahoo. Therefore,</p>
                                    <a href="/SearchEngineOptimization" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_row2">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <a href="/SocialMediaMarketing" className="read_more_link"><img className="service_img" src={Socialservice} alt="Web-devlopment" /></a>
                                </AnimationContainer>

                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <a href="/SocialMediaMarketing" className="read_more_link"><h1 className="service_heading">Social Media Marketing</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">Through this technique, we help you to reach your targeted social media users and other suitable applications that will help you spread brand awareness. Social media marketing is popular and widely used all over the countries.</p>
                                    <a href="/SocialMediaMarketing" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_row">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <a href="/BusinessSoftwareSolutions" className="read_more_link"><img className="service_img" src={Softwareservice} alt="Web-devlopment" /></a>
                                </AnimationContainer>

                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInDown" delay={600}>
                                    <a href="/BusinessSoftwareSolutions" className="read_more_link"><h1 className="service_heading">Business Software Solutions</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">It is a set of computer programs that businesses use to perform various functions. The applications are useful in increasing productivity and also measuring the production of the company to see which areas need improvement.</p>
                                    <a href="/BusinessSoftwareSolutions" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_row2">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <a href="/CustomizedSoftwareDevelopment" className="read_more_link"><img className="service_img" src={Customizedservice} alt="customized-service" /></a>
                                </AnimationContainer>

                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <a href="/CustomizedSoftwareDevelopment" className="read_more_link"><h1 className="service_heading">Customized Software Development</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">Through this technique, we help you to reach your targeted social media users and other suitable applications that will help you spread brand awareness. Social media marketing is popular and widely used all over the countries.</p>
                                    <a href="/CustomizedSoftwareDevelopment" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_row">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <a href="/MobileAppDevelopment" className="read_more_link"><img className="service_img" src={Mobileappservice} alt="mobileappservice" /></a>
                                </AnimationContainer>

                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInDown" delay={600}>
                                    <a href="/MobileAppDevelopment" className="read_more_link"><h1 className="service_heading">Mobile App Development</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">It entails the process through which a new application is made to be run on devices such as the android operating system or IOS. Mobile app development is not so notable, but if you necessitate it for your business, we chip in to offer you our expertise in developing mobile apps.</p>
                                    <a href="/MobileAppDevelopment" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_row2">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <a href="/GraphicDesignandVideoAnimation" className="read_more_link"><img className="service_img" src={Graphicdesignservice} alt="graphicdesignservice" /></a>
                                </AnimationContainer>

                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <a href="/GraphicDesignandVideoAnimation" className="read_more_link"><h1 className="service_heading">Graphic Design and Video Animation</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">There is no limit what so ever to what you can get designed at Atriom Technologies. The art of varying motion of either flat cell animation or as drawn animation or animation consisting of photographs either in whole or partially.</p>
                                    <a href="/GraphicDesignandVideoAnimation" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default ServicesMainPage;