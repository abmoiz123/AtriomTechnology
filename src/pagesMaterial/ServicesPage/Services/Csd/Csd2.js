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
import csdimg1 from './csdimages/csd1.png'
import csdimg2 from './csdimages/csd2.png'
import csdimg3 from './csdimages/csd3.png'

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
                                        <h4 className="service_heading_style">We are the Leaders among Top Social Media Marketing Companies</h4>
                                        <p className="service_para_style">
                                            Other than SEO expert Karachi, our experts are also SEO consultant Karachi. They help you in gaining top ranking in google search results. Among one of the top leading digital marketing companies in Karachi, we have been providing high-quality work to our clients for the past several years.
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
                                        <h4 className="service_heading_style">Top SEO Company Grow Traffic for your Website</h4>
                                        <p className="service_para_style">
                                            Do you know that effective Search Engine Optimization practices can increase the engagement of your website effectively? Being a top SEO company, our experts do a wide-ranging competitor research and market analysis to see which technique of SEO is the best for our client. This technique brings a long-lasting traffic towards your website.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">We have earned a huge name for providing successful SMM Strategy</h4>
                                        <p className="service_para_style">
                                            No business is successful without a strong marketing strategy. Any business whether it is of goods or services needs to be marketed effectively. You always need to reach out to your audience at the right time & at the right place to your audience at the right time & at the right place.
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