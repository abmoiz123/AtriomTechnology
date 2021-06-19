import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import styled from 'styled-components'
import CaseStudyContent from '../CaseStudyContent/CaseStudyContent'
import CaseSlider from '../CaseStudyContent/CaseSlider/CaseSlider'

class WaysToGetMoreTraffic extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0,
            categories: [
                {
                    id: 1,
                    service: 'Web Development',
                    link: '/Webdevelopment'
                },
                {
                    id: 2,
                    service: 'E-Commerce Solution',
                    link: '/EcommerceSolutions'
                },
                {
                    id: 3,
                    service: 'Search Engine Optimization',
                    link: '/SearchEngineOptimization'
                },
                {
                    id: 4,
                    service: 'Social Media Marketing',
                    link: '/SocialMediaMarketing'
                },
                {
                    id: 5,
                    service: 'Business Software Solutions',
                    link: '/BusinessSoftwareSolutions'
                },
                {
                    id: 6,
                    service: 'Mobile App Development',
                    link: '/MobileAppDevelopment'
                },
                {
                    id: 7,
                    service: 'Customized Software Development',
                    link: '/CustomizedSoftwareDevelopment'
                },
                {
                    id: 8,
                    service: 'Graphic Design & Video Animation',
                    link: '/GraphicDesignandVideoAnimation'
                },
            ]
        }
    }

    render() {

        const Section = styled.section`
            position: relative;
        `
        const TeamContainer = styled.div`
            text-Align: center;
            margin: 0px 40px 50px 40px;
            @media (max-width:767px) {
                margin: 0px 15px;
            }
        `
        let caseBackgroundImg;
        let caseLogo;
        let caseService;
        let caseTitle;
        CaseStudyContent.map((getCase) => {
            if (getCase.id === '1') {
                caseBackgroundImg = getCase.caseBackgroundImg;
                caseLogo = getCase.caseLogo;
                caseService = getCase.caseService;
                caseTitle = getCase.caseTitle;
            }
        });
        let recentPosts = CaseStudyContent.slice(-3);
        return (
            <Section>
                <div className="Case_img_div">
                    <img className="Case_img" src={caseBackgroundImg} alt={caseService} />
                    <div className="case_content_anima_div">
                        <AnimationContainer animation="fadeInDown" delay={600}>
                            <img className="case_logo" src={caseLogo} alt={caseService} />
                            <p className="case_title_p">{caseTitle}</p>
                        </AnimationContainer>
                    </div>
                </div>
                <Container fluid>
                    <Row className="case_row">
                        <Col lg={9} md={8} sm={12} xs={12}>
                            <div>
                                <p className="case_text_p">If you own a small business and ask a marketer or business owner what they'd like most in the world of digital marketing, they'll probably tell you "more traffic". There are some ways you'll increase traffic on your website, including several ways to spice up site traffic. In today's post, we're going to look at a few of them, The easiest way to get visitors to your website is by paying Google for Google AdWords or running a Facebook advertisement campaign. But wait, this is often expensive right, and as a little business tough to afford. The question is what is often done to urge regular traffic on your website?</p>
                                <h3 className="case_heading">1-SMALL BLOGS</h3>
                                <p className="case_text_p">There are tons of small blogs struggling to cement their place on the web. you'll Google them, leave your contact information on blog posts together with your comments. confirm that your response is accurate, to the purpose, and is within the perfect line with the blog post. Don't just simply leave your website or blog URL, this might be considered spamming.</p>
                                <h3 className="case_heading">2-ADVERTISE</h3>
                                <p className="case_text_p">This one is so obvious, we're getting to inspect it first. Paid search, social media advertising, and display advertising are all excellent ways of attracting visitors, building your brand, and getting your site before individuals. Adjust your paid strategies to suit your goals do I just want more traffic, or are you careful about your objectives before you reach for your MasterCard</p>
                                <p className="case_text_p">If you're hoping that more traffic to your site also will end in additional sales, you'll need to target high commercial intent keywords as a neighborhood of your paid search strategies. Yes, competition for these search terms is often fierce (and expensive), but the payoffs are often worthwhile.</p>
                                <h3 className="case_heading">3-GET SOCIAL</h3>
                                <p className="case_text_p">It's not enough to supply great content and hope that folks find it – you've got to be proactive. One of the simplest ways to extend traffic to your website is to use social media channels to market your content. Twitter is ideal for short, snappy (and tempting) links, whereas Google+ promotion can help your site show up in personalized search results and seems especially effective in B2B niches. If you're a B2C product company, you would possibly find great traction with image-heavy social sites like Pinterest and Instagram. Here's more advice on making the foremost of social media marketing.</p>
                                <h3 className="case_heading">4-POST CONTENT TO LINKEDIN</h3>
                                <p className="case_text_p">LinkedIn has become much more than how of finding another job. The world's largest professional social network is now a valuable publishing platform in its title, which suggests you ought to be posting content to LinkedIn regularly. Doing so can boost traffic to your site, also increase your profile within your industry – especially if you've got a moderate to a large following? </p>
                                <h3 className="case_heading">5-Make Sure Your Site is Responsive</h3>
                                <p className="case_text_p">The days when internet browsing was done exclusively on desktop PCs are long gone. Today, more people than ever before are using mobile devices to access the web, and if you force your visitors to pinch and scroll their way around your site, you're telling them to go elsewhere. Even if you've got a basic website, you continue to got to make sure that it's accessible and comfortably viewable across a variety of devices, including smaller smartphones.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={12} xs={12}>
                            <div className="col_2">
                                <div className="case_categories_main_div">
                                    <h4 className="case_categories_heading">Categories</h4>
                                    <ul className="case_categories_ul">
                                        {this.state.categories.map((v, i) => {
                                            return (
                                                <li
                                                    className="case_categories_li"
                                                    key={i}
                                                >
                                                    <a
                                                        href={v.link}
                                                        className="case_categories_a">
                                                        {v.service}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="recent_post_main_div">
                                    <h4 className="case_categories_heading">Recent Posts</h4>
                                    {recentPosts.map((v, i) => {
                                        return (
                                            <div key={i} className="recent_posts_div">
                                                <div className="recent_posts_img_div">
                                                    <a href={v.link}><img className="recent_posts_img" src={v.caseBackgroundImg} alt={v.caseService} /></a>
                                                </div>
                                                <div className="recent_posts_text_div">
                                                    <p className="recent_posts_date">{v.date}</p>
                                                    {v.caseTitle.length > 50 ?
                                                        (
                                                            <p className="recent_posts_text"><a className="recent_posts_text_a" href={v.link}>{`${v.caseTitle.substring(0, 50)}...`}</a></p>
                                                        ) :
                                                        <p className="recent_posts_text"><a className="recent_posts_text_a" href={v.link}>{v.caseTitle}</a></p>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="popular_request_main_div">
                                    <h4 className="case_categories_heading">Popular Requests</h4>
                                    <div className="popular_req_tag_div">
                                        <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="#/">branding</a></p>
                                        <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="#/">digital</a></p>
                                        <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="#/">marketing</a></p>
                                        <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="#/">planing</a></p>
                                        <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="#/">seo</a></p>
                                        <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="#/">web</a></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <TeamContainer>
                    <CaseSlider />
                </TeamContainer>
            </Section >
        )
    }
}

export default WaysToGetMoreTraffic;