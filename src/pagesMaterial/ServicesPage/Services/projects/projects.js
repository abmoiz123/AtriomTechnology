import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import portimage from '../../../PortfolioPage/PortfolioImages'
import './Projects.css'
import ClientImg from '../../../../../content/team/member-1/mem1.jpg'
import Client1project from '../projects/clientspic/salimkhanproject.png'
import Client2project from '../projects/clientspic/masoodahmadproject.png'
import Client3project from '../projects/clientspic/usmanabdurrazzaqproject.png'
import Client4project from '../projects/clientspic/Asimlatifproject.png'
import Client1img from '../projects/clientspic/salimkhan.jpg'
import Client2img from '../projects/clientspic/masoodahmad.jpg'
import Client3img from '../projects/clientspic/usmanabdurrazzaq.jpg'
import Client4img from '../projects/clientspic/Asimlatif.jpg'


class Projects extends React.Component {

    constructor() {
        super()
        this.state = {
            portfolio: [
                {
                    id: 1,
                    image: portimage.project1,
                    title: "A2Z Utility",
                    category: "WordPress",
                    link: "https://a2zutility.com/",
                },
                {
                    id: 2,
                    image: portimage.project2,
                    title: "AK Cell",
                    category: "Woo Commerce",
                    link: "http://akcelltrader.com/",
                },
                {
                    id: 3,
                    image: portimage.project3,
                    title: "Arina Decor",
                    category: "Magento",
                    link: "/Portfolio",
                },
                {
                    id: 4,
                    image: portimage.project4,
                    title: "The Beauty Stocks",
                    category: "SHOPIFY",
                    link: "https://thebeautystocks.com/",
                },
                {
                    id: 5,
                    image: portimage.project5,
                    title: "Be Buyer",
                    category: "SHOPIFY",
                    link: "https://bebuyer.co.uk/",
                },
                {
                    id: 6,
                    image: portimage.project6,
                    title: "Big Mape Apparel",
                    category: "Woo Commerce",
                    link: "https://bigmapeapparel.com/",
                },
                {
                    id: 7,
                    image: portimage.project7,
                    title: "Big Map Clothing",
                    category: "Woo Commerce",
                    link: "https://bigmapclothing.com.pk",
                },
                {
                    id: 8,
                    image: portimage.project8,
                    title: "big Map Steel",
                    category: "WordPress",
                    link: "https://bigmapsteel.com.pk/",
                },
                {
                    id: 9,
                    image: portimage.project9,
                    title: "ASJ",
                    category: "Fintech",
                    link: "http://asj-accountants.co.uk/",
                },
            ],
            reviews: [
                // {
                //     id: 1,
                //     projectName: "The Beauty Stock",
                //     reviewDate: "October 05, 2019",
                //     service: "E-commerce",
                //     projectLogo: servicebackgroundimage,
                //     review: "We developed a great business Relationship with Atriom because of their dedication and 24/7 service to our Project which is evident in all aspects of our Project & Business, thankyou so much for doing a Great Job well done",
                //     clientImg: ClientImg,
                //     clientName: "Abdul Nafay",
                //     clientStatus: "CEO",
                //     link: "https://a2zutility.com/",
                // },
                {
                    id: 2,
                    projectName: "Zaiqa Delivery",
                    reviewDate: "November 25, 2019",
                    service: "E-commerce",
                    projectLogo: Client1project,
                    review: "Atriom developed our e-commerce site. They are very professional and patience. Throughout the development, we had numerous requests e.g. trying different fonts, pictures, backgrounds, adding pages etc., every time, they listened and came back with even better ideas. I am very happy and would highly recommend them.",
                    clientImg: Client1img,
                    clientName: "Salim Khan",
                    clientStatus: "Director",
                    link: "https://zaiqadelivery.com/",
                },
                {
                    id: 3,
                    projectName: "Zubair Coals",
                    reviewDate: "December 15, 2019",
                    service: "Web Development",
                    projectLogo: Client2project,
                    review: "Our decision to select Atriom Technologies as our Website Solution partner, now turned into relationship, is never regretted. Atriom is best web development company in Pakistan and serving us with best of the best professional Web development services.",
                    clientImg: Client2img,
                    clientName: "Masood Ahmad",
                    clientStatus: "CEO",
                    link: "https://www.zubaircoals.com/",
                },
                {
                    id: 4,
                    projectName: "Waha Industries.ltd",
                    reviewDate: "February 12, 2020",
                    service: "Graphics Designing, E-commerce",
                    projectLogo: Client3project,
                    review: "We worked with Atriom for past 3 months and we are completely satisfied with the Project handled by their team. Excellent efforts and highly professional communication. Their staff is efficient, trained well and organized. Follow up was effective from them and team lead Sameer Ul Hassan Ansari has successfully completed all our customized requests and was cooperative throughout the project. We highly recommend Atriom and its team members and are planning to line up more projects with them in near future! Good Luck and Job Nicely Done!",
                    clientImg: Client3img,
                    clientName: "Usman Abdur Razaq",
                    clientStatus: "Head of IT",
                    link: "https://wahaind.co.uk/",
                },
                {
                    id: 5,
                    projectName: "E-commercecentral",
                    reviewDate: "March 30, 2020",
                    service: "E-commerce",
                    projectLogo: Client4project,
                    review: "Very professional and reasonable prices. Highly recommended! Special commendations and kudos to Asad Sheikh",
                    clientImg: Client4img,
                    clientName: "Asim Latif",
                    clientStatus: "Director",
                    link: "https://e-commercecentral.com/",
                },
                {
                    id: 5,
                    projectName: "big Map Clothing",
                    reviewDate: "February 14, 2020",
                    service: "E-commerce",
                    projectLogo: Client2project,
                    review: "Good service. Highly Recommended",
                    clientImg: ClientImg,
                    clientName: "Syed Bilal",
                    clientStatus: "Director",
                    link: "https://a2zutility.com/",
                },
            ],
        }
    }

    readmore = (e) => {
        console.log(e.id)
    }

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
        `
        const ProjectContainer = styled.div`
            padding: 10px 50px 50px 50px;
            @media (max-width:767px) {
              padding: 10px 10px;
            }
        `
        const Web = styled.div`
        display: block;
        @media (max-width:767px) {
          display: none;
        }
    `

        const Mobile = styled.div`
        display: none;
        @media (max-width:767px) {
        display: block;
        }
    `
        const ProjectImg = styled.img` 
            width: 100%;
            height: 500px;
            transition: .5s;
            @media (max-width:600px) {
                height: 300px;
                width: 100%;
            }
        `
        const Text = styled.div` 
        transform: translateY(70px);
        transition: .5s;
        width: 100%;
        text-align: center;
    `
        const Heading = styled.h4`
        color: #fff;
        font-weight: 600;
        font-size: 25px;
        @media (max-width:767px) {
            color: #013567;
            font-weight: 500;
            font-size: 20px;
        }
        @media (max-width:600px) {
            color: #013567;
            font-weight: 500;
            font-size: 20px;
        }
    `

        const SubHeading = styled.h5`
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        @media (max-width:767px) {
            color: #f6b10a;
            font-size: 18px;
            font-weight: 400;
        }
        @media (max-width:600px) {
            color: #f6b10a;
            font-size: 15px;
            font-weight: 400;
        }
    `

        const MobileContent = styled.div`
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        // opacity: 0 !important;
        transition: .5s;
        display: flex;
        align-items: flex-end;
        visibility: visible;
        ${Text} {
            transform: translateY(-10px);
        }
        @media (min-width:1025px) {
            display: none !important;
        }
    `

        const DesktopContent = styled.div`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            // opacity: 0 !important;
            transition: .5s;
            display: flex;
            align-items: flex-end;
            visibility: visible;
            &:hover {
                background-image: linear-gradient(to top, rgba(0,70,140,1), rgba(255, 255, 255, 0));
            }
        `
        const Item = styled.div`
        position: relative;
        min-height: 300px;
        max-height: 500px;
        @media (max-width:1500px) {
            min-height: 400px;
            max-height: 700px;
        }
        @media (max-width:1024px) {
            min-height: 300px;
            max-height: 500px;
        }
        @media (max-width:992px) {
            min-height: 250px;
            max-height: 350px;
        }
        @media (max-width:767px) {
            min-height: 250px;
            max-height: 350px;
        }
        overflow: hidden;
        max-width: 100%;
        border-radius: 10px;
        &:hover {
            ${Text} {
                transform: translateY(-10px);
            }
            img {
                transform: scale(1.1);
            }
            ${MobileContent} {
                opacity: 1 !important;
            }
            ${DesktopContent} {
                opacity: 1 !important;
            }
        }
    `

        const settings = {
            centerMode: true,
            centerPadding: "150px",
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            swipe: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        centerPadding: "80px",
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: "80px",
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerPadding: "150px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding: "80px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        }
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
        let items = this.state.portfolio
        let reviews = this.state.reviews
        return (
            <Section>
                <ServiceContainer>
                    <Container className="projects_con">
                        <AnimatedHeading text="What Our Clients Say?" />
                        <Row className="projects_row">
                            <Col lg={2} md={1} sm={12} xs={12}></Col>
                            <Col lg={8} md={10} sm={12} xs={12}>
                                <Slider {...settings2}>
                                    {reviews.map((v, i) => {
                                        return (
                                            <div className="client_review_col" key={i}>
                                                <div className="client_info_div">
                                                    <div className="client_Project_Name_div">
                                                        {v.projectName.length > 12 ?
                                                            (
                                                                <div className="client_Project_Name_2">
                                                                    {`${v.projectName.substring(0, 12)}...`}
                                                                </div>
                                                            ) :
                                                            <p className="client_Project_Name_2">{v.projectName}</p>
                                                        }
                                                        <p className="client_Project_Name">{v.projectName}</p>
                                                        <p className="client_review_date">{v.reviewDate}</p>
                                                        {v.service.length > 12 ?
                                                            (
                                                                <div className="client_get_service_2">
                                                                    {`${v.service.substring(0, 12)}...`}
                                                                </div>
                                                            ) :
                                                            <p className="client_get_service_2">{v.projectName}</p>
                                                        }
                                                        <p className="client_get_service">{v.service}</p>
                                                    </div>
                                                    <div className="client_project_logo_div">
                                                        <img className="client_project_logo" src={v.projectLogo} alt={v.projectName} />
                                                    </div>
                                                </div>
                                                <div className="client_review_detail">
                                                    {v.review.length > 140 ?
                                                        (
                                                            <div className="review">
                                                                {`${v.review.substring(0, 140)}...`}<button className="review_readmore_btn" onClick={(e) => this.readmore(e)}>Read more</button>
                                                            </div>
                                                        ) :
                                                        <p className="review">{v.review}</p>
                                                    }
                                                </div>
                                                {/* <div className="client_review_detail">
                                                    <p className="review">{v.review}</p>
                                                </div> */}
                                                <div className="client_info_div">
                                                    <div className="client_img_div">
                                                        <img className="client_img" src={v.clientImg} alt={v.clientName} />
                                                    </div>
                                                    <div className="client_Name_div">
                                                        <p className="client_Name_p">{v.clientName}</p>
                                                        <p className="client_Name_p2">
                                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                                        </p>
                                                        <p className="client_status">{v.clientStatus}</p>
                                                    </div>
                                                    <div className="client_Project_visit_div">
                                                        <a className="visit_project_btn" href={v.link} target="_blank" rel="noopener noreferrer" >Visit Project</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </Col>
                            <Col lg={2} md={1} sm={12} xs={12}></Col>
                        </Row>
                    </Container>
                </ServiceContainer>
                <ProjectContainer>
                    <AnimatedHeading text="Our Clients Projects" />
                    <Web>
                        <Slider {...settings}>
                            {items.map((v, i) => {
                                return (
                                    <Col key={i}>
                                        <a href={v.link} target="_blank" rel="noopener noreferrer" id={v.id}>
                                            <Item>
                                                <ProjectImg src={v.image} alt={v.title} />
                                                <DesktopContent>
                                                    <Text>
                                                        <Heading>{v.title}</Heading>
                                                        <SubHeading>{v.category}</SubHeading>
                                                    </Text>
                                                </DesktopContent>
                                            </Item>
                                        </a>
                                    </Col>
                                )
                            })}
                        </Slider>
                    </Web>
                    <Mobile>
                        <Slider {...settings}>
                            {items.map((v, i) => {
                                return (
                                    <Col md={4} key={i}>
                                        <a href={v.link} target="_blank" rel="noopener noreferrer" id={v.id}>
                                            <Item>
                                                <ProjectImg src={v.image} alt={v.title} />
                                                <MobileContent>
                                                    <Text>
                                                        <Heading>{v.title}</Heading>
                                                        <SubHeading>{v.category}</SubHeading>
                                                    </Text>
                                                </MobileContent>
                                            </Item>
                                        </a>
                                    </Col>
                                )
                            })}
                        </Slider>
                    </Mobile>
                </ProjectContainer>
            </Section>
        )
    }

}

export default Projects;