import React from 'react'
import { Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import CaseSlider from '../../pagesMaterial/BlogPage/CaseStudy/CaseStudyContent/CaseSlider/CaseSlider' 
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
class Blog extends React.Component {

    shouldComponentUpdate() {
        return false
    }

    render() {

        const Section = styled.section`
          background-color: #013567;
          padding: 100px 0px 0px 0px;
          position: relative;
          @media (max-width:992px) {
            padding: 50px 0px 0px 0px;
            }
          @media (max-width:767px) {
              padding: 30px 0px 0px 0px;
          } 

        `

        const Overlay = styled.div`
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          // background-color: rgba(0,70,140,.3);
        `
        const TeamContainer = styled.div`
            text-Align: center;
            margin: 0px 20px;
            @media (max-width:767px) {
                margin: 0px 15px;
            }
        `
        return (
            <Section id="Blog">
                <Overlay />
                <Col md={12}>
                    <Container>
                        <AnimatedHeading text="Our Case Studies" />
                    </Container>
                    <TeamContainer>
                        <CaseSlider />
                    </TeamContainer>
                </Col>
            </Section>
        )
    }
}
export default Blog;