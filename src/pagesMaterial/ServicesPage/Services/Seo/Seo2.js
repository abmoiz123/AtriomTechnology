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
// import seoimg1 from './seoimages/seo1.png'
// import seoimg2 from './seoimages/seo2.png'
// import seoimg3 from './seoimages/seo3.png'
import seoimg1 from './seoimages/seonew3.png'
import seoimg2 from './seoimages/seonew1.png'
import seoimg3 from './seoimages/seonew2.png'
import './Seo.css'

class Seo2 extends React.Component {
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
                        <AnimatedHeading text="Search Engine Optimization" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Search Engine Optimization</h4>
                                        <p className="service_para_style">
                                            It’s important to stay in mind that if program traffic is your only goal, your results will probably suffer. so as to please both the search engines (who will reward you with high rankings over time) and potential customers and return visitors, you would like to supply value above and beyond program optimization. In other words, don’t produce “thin” content that ranks and obtain clicks, but doesn’t provide any additional value to the program user. Sites that promote “thin,” low-value content run the danger of being penalized by Google; they also tend to possess high bounce rates and low conversion rates.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="seoimage_for_slide" src={seoimg1} alt="seoimg" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={seoimg2} alt="seoimg" />
                                </AnimationContainer>
                            </Col>
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">SEO Content and Writings</h4>
                                        <p className="service_para_style">
                                        SEO writing (also known as “writing for SEO”) is the process of planning, creating and optimizing content with the primary goal of ranking in search engines.Content should be your first priority when brooding about SEO. Quality content is how you engage, inform, support and delight your audiences. Creating authentic, valuable content is additionally critical for program visibility. Indeed, that’s why the table Of SEO Factors begins with the content “elements,” with the very first element being about content quality.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={600}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Hosts, Domains and URLs</h4>
                                        <p className="service_para_style">
                                        The Uniform Resource Locator or URL is the unique address of a file on the Internet. The URL consists of the protocol, the hostname (corresponding to the document root directory of the host in the host file system), and the relative path of the downloaded file (relative to the document root directory. This is a short form. We will now before we understand some related concepts, Please dig into the different parts of the URL as early as possible.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={12} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <img className="webimage_for_slide" src={seoimg3} alt="seoimg" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Seo2;