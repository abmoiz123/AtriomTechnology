import React from 'react'
import Slider from 'react-slick'
import CaseStudyContent from '../CaseStudyContent'
import './CaseSlider.css'

class CaseSlider extends React.Component {

    render() {
        const settings = {
            centerMode: true,
            centerPadding: "0px",
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        centerPadding: "60px",
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: "100px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerPadding: "80px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        centerPadding: "40px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        };
        return (
            <div className="case_Slider_Div">
                <Slider {...settings}>
                    {CaseStudyContent.map((v, i) => {
                        return (
                            <div className="Blog_div" key={i}>
                                <a className="light_box" href={v.link}>
                                    <img className="blog_img" src={v.caseBackgroundImg} alt={v.caseService} />
                                    <div className="blog_heading">{v.caseService}
                                        {v.caseTitle.length > 20 ?
                                            (
                                                <div className="blog_title">
                                                    {`${v.caseTitle.substring(0, 20)}...`}
                                                </div>
                                            ) :
                                            <span className="blog_title">{v.caseTitle}</span>
                                        }
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default CaseSlider;