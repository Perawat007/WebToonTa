import React, { useState, useEffect } from 'react';
import '../pangHome/test.css';
import axios from '../../api/axios';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css"
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination, FreeMode } from 'swiper';

function Competitivegame() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const [progressWidth, setProgressWidth] = React.useState(20);
    const [show, setShow] = React.useState(false);
    const [data, setData] = React.useState([])

    const getMobileOperatingSystem = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        return "Unknown";
    };

    const mobileOS = getMobileOperatingSystem();

    const PlayGame = (codeGame, name, linkGame) => {
        console.log('playgame')
        if (codeGame === 'Go Gold Planet' || codeGame === 'CowBoys VS Aliens' || codeGame === 'Lucky Bunny Gold' || codeGame === 'Bounty BallOon' || codeGame === 'RoBo FARM') {
            if (token) {
                axios.post("/post/token", "", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => {
                        if (response.data.message === "TokenOn") {
                            const tokenEn = encodeURIComponent(token);
                            if (linkGame !== null) {
                                const link = linkGame + `?token=${tokenEn}`;
                                if (mobileOS === 'Android') {
                                    window.open(link);
                                } else {
                                    window.open(link, "_self");
                                }
                            }
                        }
                    })
                    .catch((error) => {
                        console.log("error", error);
                        localStorage.removeItem("token");
                        localStorage.removeItem("user")
                        window.location.reload();
                    });
            } else {
                setShow(true);
            }

        } else {
            if (token) {
                axios.get(`seamlesslogIn/${codeGame}/${name}/${user}`)
                    .then((response) => {
                        const link = response.data.data.data.url;
                        if (mobileOS === 'Android') {
                            window.open(link);
                        } else {
                            window.open(link, "_self");
                        }
                    })
                    .catch(error => {
                        console.log("error", error);
                        localStorage.removeItem("token");
                        localStorage.removeItem("user")
                        window.location.reload();
                    });
            } else {
                setShow(true);
            }
        }
    }



    const specialgame = [
        {
            id: 1, name: 'Sexy', provider_name: 'BGSOFT', data_gameid: '17570', data_name: 'Crypto', alt: 'SIAM855 Baccarat Classic',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_1(1).png'
        },
        {
            id: 2, name: 'Sexy', provider_name: 'BGSOFT', data_gameid: '17572', data_name: 'Double', alt: 'SIAM855 Baccarat Classic',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_2(1).png'
        },
        {
            id: 3, name: 'Sexy', provider_name: 'BGSOFT', data_gameid: '17574', data_name: 'Keno', alt: 'SIAM855 Baccarat Classic',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_3(1).png'
        },
        {
            id: 4, name: 'Sexy', provider_name: 'SPB-INST', data_gameid: '17575', data_name: 'Limbo', alt: 'SIAM855 Baccarat Classic',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_4(1).png'
        },
    ]
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                },
            },

            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },

            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },

            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },

            {
                breakpoint: 280,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },

            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "10px",
                },
            },
        ],
    };

    return (
        <>
            <div style={{marginBottom : "2%"}} className="testdata addfont">ฟิเจอร์เกมที่น่าสนใจ</div>
            <div className="product-upcoming mgt45 showADS" >
                <div className="fam-list scallASD">
                    <div className="slick-list">
                        <div className="slick-track" >
                            <Slider {...settings}>

                                <div className="lc-holder slick-slide">
                                    <img className="imgGame shadowImage"
                                        src="/banner/01.webp" alt=''
                                        onClick={() => PlayGame('fortune-ox', 'PGSOFT2', '')} />
                                </div>
                                <div className="lc-holder slick-slide">
                                    <img className="board imgGame"
                                         src="/banner/02.webp" alt=''
                                        onClick={() => PlayGame('lucky-piggy', 'PGSOFT2', '')} />
                                </div>
                                <div className="lc-holder slick-slide slick-current slick-active"
                                    data-slick-index="1" aria-hidden="false"
                                    tabIndex="-1" role="tabpanel" id="slick-slide91"
                                    aria-describedby="slick-slide-control91">
                                    <div>
                                        <img className="board imgGame"
                                             src="/banner/03.webp" alt=''
                                            onClick={() => PlayGame('Bounty BallOon', 'Bounty BallOon', 'https://bountyballoon.toonta.com')} />
                                    </div>
                                </div>
                                <div className="lc-holder slick-slide"
                                    data-slick-index="2" aria-hidden="true" tabIndex="-1"
                                    role="tabpanel" id="slick-slide92" aria-describedby="slick-slide-control92">
                                    <div>
                                        <img className="board imgGame"
                                             src="/banner/04.webp" alt=''
                                            onClick={() => PlayGame('Lucky Bunny Gold', 'Lucky Bunny Gold', 'https://luckybunnygold.toonta.com')} />
                                    </div>
                                </div>
                                <div className="lc-holder slick-slide"
                                    data-slick-index="2" aria-hidden="true" tabIndex="-1"
                                    role="tabpanel" id="slick-slide92" aria-describedby="slick-slide-control92">
                                    <div>
                                        <img className="board imgGame"
                                             src="/banner/05.webp" alt=''
                                            onClick={() => PlayGame('Lucky Bunny Gold', 'Lucky Bunny Gold', 'https://robofarm.toonta.com')} />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Competitivegame;