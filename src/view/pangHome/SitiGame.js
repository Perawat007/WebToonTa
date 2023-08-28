import React, { useState, useEffect } from 'react';
import '../pangHome/test.css';
import axios from '../../api/axios';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import vipimg from '../../img/home/02.png'
import promo from '../../img/home/01.png'
function SitiGame() {
    const [data, setData] = useState([])
    useEffect(() => {

    }, [])

    const GoShowPromotion = () => {
        window.location.href = `/PromotionShow`;
    }

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    className: "center",
                    infinite: true,
                    slidesToShow: 2,
                    slidesPerRow: 2,
                    centerMode: true,
                    centerPadding: "350px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    className: "center",
                    infinite: true,
                    slidesToShow: 2,
                    slidesPerRow: 2,
                    centerMode: true,
                    centerPadding: "350px",
                },
            },

            {
                breakpoint: 375,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 200,
                    centerPadding: "550px",
                },
            },
            {
                breakpoint: 414,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 200,
                    centerPadding: "560px",
                },
            },

            {
                breakpoint: 390,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 200,
                    centerPadding: "300px",
                },
            },

            {
                breakpoint: 428,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 200,
                    centerPadding: "560px",
                },
            },
            {
                breakpoint: 720,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: true,
                    slidesToShow: 2,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 200,
                    centerPadding: "550px",
                },
            },

            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 4,
                    slidesPerRow: 4,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "480px",
                },
            },
        ],
    };

    return (
        <>
            <div className="list">
                <Slider {...settings}>
                    <div className="lc-holder slick-slide"
                        data-slick-index="0" aria-hidden="true"
                        role="tabpanel" id="slick-slide90" aria-describedby="slick-slide-control90">
                        <div style={{ marginRight: '10px' }} onClick={GoShowPromotion}>
                            <img className="img-responsive board "
                                src={vipimg} alt='' />
                        </div>
                    </div>

                    <div className="lc-holder slick-slide"
                        data-slick-index="0" aria-hidden="true"
                        role="tabpanel" id="slick-slide90" aria-describedby="slick-slide-control90">
                        <div style={{ marginRight: '10px' }}>
                            <img className="img-responsive board "
                                src={promo} alt='' />
                        </div>
                    </div>
                </Slider>
            </div>


        </>
    );
}


export default SitiGame;