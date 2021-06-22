import React from 'react'
import styled from 'styled-components'
import {
    Container,
    Row,
    Col,
    Navbar,
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import "./Footer2.css"
import Paymentpic from '../../../../static/paymentfooter.png'
import googlepartner from '../../../../static/googlepartner.png'
import hubspot from '../../../../static/hubspot.png'
import ppc from '../../../../static/ppc.png'
import bingads from '../../../../static/bingads.png'
import facebookpartner from '../../../../static/facebookpartner.png'
// import review from '../../../../static/review.png'
import shopify from '../../../../static/shopify.jpg'



class Footer2 extends React.Component {
    constructor() {
        super()
        this.state = {
            tags: [
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
    subscribrbtn = () => {
        alert('Sorry for the inconvenience \r\n Contact Us Update As Soon As Possible \r\n Further Contact on: \r\n +44 7401379573 \r\n +92 3020825699 \r\n info@atriom.co.uk')
    }
    render() {
        const Separator = styled.div`
                height: 5px;
                width: 50px;
                // background-color: #04e5e5;
                background-color: #00468b;
                // margin-bottom: 10px;
                margin-left: 6px;
            `

        let tag = this.state.tags
        let tag2 = tag.slice(-4);
        return (
            <Container fluid className="footer_container">
                <Row>
                    <Col lg={3} md={4} sm={6}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">About Us</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div>
                                    <h3 className="About_Us_heading">About Us</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="info_ul">
                                        <li className="info_li">
                                            <FontAwesomeIcon className="contact_form_icon" icon={faQuoteRight} />
                                            We Promise the Growth of your Business!</li>
                                        <li className="info_li">
                                            <FontAwesomeIcon className="contact_form_icon" icon={faPhone} />
                                            +44 7401379573</li>
                                        <li className="info_li">
                                            <FontAwesomeIcon className="contact_form_icon" icon={faPhone} />
                                            +92 3020825699</li>
                                        <li className="info_li">
                                            <FontAwesomeIcon className="contact_form_icon" icon={faEnvelope} />
                                            info@atriom.co.uk</li>
                                        <li className="info_li">
                                            <FontAwesomeIcon className="contact_form_icon" icon={faBusinessTime} />
                                            7 Days a week from 10-00 am to 6-00 pm</li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={2} md={4} sm={6}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">About Us</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div>
                                    <h3 className="About_Us_heading">About Us</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="info_ul">
                                        <li className="info_li"><Link to="/About" className="info_li_link">About Us</Link></li>
                                        <li className="info_li"><Link to="/Portfolio" className="info_li_link">Portfolio</Link></li>
                                        <li className="info_li"><Link to="/Contact" className="info_li_link">Contact Us</Link></li>
                                        <li className="info_li"><Link to="#" className="info_li_link">FAQs</Link></li>
                                        <li className="info_li"><Link to="/PrivacyPolicies" className="info_li_link">Privacy Policies</Link></li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={2} md={4} sm={6}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">Services</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div>
                                    <h3 className="About_Us_heading">Services</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="info_ul">
                                        {tag2.map((v, i) => {
                                            return (
                                                <li className="info_li" key={i}><Link id={v.id} to={v.link} className="info_li_link">{v.service}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={5} md={12} sm={6}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">Subscribe Newsletter</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="subscribediv">
                                    <h3 className="About_Us_heading">Subscribe Newsletter</h3>
                                    <Separator className="About_Us_heading" />
                                    <InputGroup className="subscribeinputgroup">
                                        <FormControl
                                            className="subscribeinput"
                                            placeholder="Your Email Address"
                                            // aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button onClick={this.subscribrbtn} className="subscribe_btn">Send</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <h6 className="About_Us_heading">Follow Us</h6>
                                    <Separator className="About_Us_heading" />
                                    <ul className="social_btn_icon_ul">
                                        <li className="social_btn_li"><a className="social_btn_a" href="https://www.facebook.com/">
                                            <FaFacebookF className="social_icon" />
                                        </a>
                                        </li>
                                        <li className="social_btn_li"><a className="social_btn_a" href="https://www.facebook.com/">
                                            <FaInstagram className="social_icon" />
                                        </a>
                                        </li>
                                        <li className="social_btn_li"><a className="social_btn_a" href="https://www.facebook.com/">
                                            <FaTwitter className="social_icon" />
                                        </a>
                                        </li>
                                        <li className="social_btn_li"><a className="social_btn_a" href="https://www.facebook.com/">
                                            <FaLinkedinIn className="social_icon" />
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">Our Partners</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="subscribediv">
                                    <h3 className="About_Us_heading">Our Partners</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="partners_ul">
                                        <li className="partners_li"><img src={googlepartner} alt="Partners" className="partners_pic" /></li>
                                        <li className="partners_li"><img src={hubspot} alt="Partners" className="partners_pic" /></li>
                                        <li className="partners_li"><img src={ppc} alt="Partners" className="partners_pic" /></li>
                                        <li className="partners_li"><img src={bingads} alt="Partners" className="partners_pic" /></li>
                                        <li className="partners_li"><img src={facebookpartner} alt="Partners" className="partners_pic" /></li>
                                        <li className="partners_li"><img src={shopify} alt="Partners" className="partners_pic" /></li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">Popular Tags</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="subscribediv">
                                    <h3 className="About_Us_heading">Popular Tags</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="popular_tags_ul">
                                        {tag.map((v, i) => {
                                            return (
                                                <li
                                                    className="popular_tags_li"
                                                    key={i}
                                                >
                                                    <a
                                                        id={v.id}
                                                        className="popular_tags_a"
                                                        href={v.link}
                                                    >
                                                        {v.service}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="copyright_div">
                            <p className="copyright_p"><a className="atriom_copyright_link" href="https://www.facebook.com/">Atriom Technologies</a> © 2021 . All Rights Reserved.</p>
                            <img src={Paymentpic} alt="Payments" className="paymentpic" />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer2