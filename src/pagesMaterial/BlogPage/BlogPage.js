import React from 'react'
import { Col, Container } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import backgroundimg from './BlogPageImages/mock3.jpg'
import CaseStudyContent from './CaseStudy/CaseStudyContent/CaseStudyContent'
import './BlogPage.css'

class BlogPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0,
            forQuotation: false,
        }
    }
    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({ height: window.innerHeight })
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({ width: window.innerWidth })
        }
    }


    componentDidMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth })
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    showQuotationbtn = () => {
        if (this.state.forQuotation === false) {
            this.setState({
                forQuotation: true,
            })
        }
        else {
            this.setState({
                forQuotation: false,
            })
        }
    }

    render() {

        const Section = styled.section`
            position: relative;
        `

        const CompanyImage = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            background-color: #fff;
            background-image: linear-gradient(0deg, grey, #fff);
            img {
                // position: absolute;
                width: 100%;
                opacity: 0.7;
            }
        `
        return (
            <Section>
                <div className="ourcaseheading"><AnimatedHeading text="Our Case Studies" /></div>
                <CompanyImage style={{ height: `${this.state.width > 500 ? this.state.height : 450}px` }}>
                    <img src={backgroundimg} style={{ height: `${this.state.width >= 300 && this.state.width < 1200 ? "100%" : "auto"}` }} alt="companyimg" />
                    <div className="blogpage_company_text_div">
                        <AnimationContainer animation="fadeInUp" delay={600}>
                            <h1 className="blogpage_company_text_h1">Let’s Talk Results</h1>
                            <p className="blogpage_company_text_p">From AdWords management to remarketing to conversion rate optimization, <strong>we help our clients get better results</strong> with our creative and data-driven approach to online advertising.</p>
                        </AnimationContainer>
                    </div>
                </CompanyImage>
                <Container className="blogPage_Container">
                    {CaseStudyContent.map((v, i) => {
                        return (
                            <Col Key={i} className="blogPage_img_Col">
                                <div id={v.id} className="blogPage_img_div">
                                    <img className="blogPage_img" src={v.caseBackgroundImg} alt={v.caseService} />
                                    <div className="blog_content_anima_div">
                                        <AnimationContainer animation="fadeInDown" delay={600}>
                                            <img className="blog_logo" src={v.caseLogo} alt={v.caseService} />
                                            {v.caseTitle.length > 52 ?
                                                (
                                                    <p className="blog_title_p">{`${v.caseTitle.substring(0, 52)}...`}</p>
                                                ) :
                                                <p className="blog_title_p2">{v.caseTitle}</p>
                                            }
                                            <a className="blog_case_a" href={v.link}>read case study</a>
                                        </AnimationContainer>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Container>
            </Section >
        )
    }
}

export default BlogPage;