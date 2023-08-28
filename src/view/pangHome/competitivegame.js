import React, { useState, useEffect } from 'react';
import '../pangHome/test.css';
import axios from '../../api/axios';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";

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
                    centerPadding: "590px",
                },
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "570px",
                },
            },

            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "580px",
                },
            },

            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "560px",
                },
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "660px",
                },
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "450px",
                },
            },
        ],
    };

    return (
        <>
            <div className="product-upcoming mgt45">
                <div className="vp-title testdataV addfont">ฟิเจอร์เกมที่น่าสนใจ</div>
                <div className="casino-container fam-list" style={{ display: 'block' }}>
                    <div className="slick-list draggable">
                        <div className="slick-track">
                            <Slider {...settings}>
                                <div className="lc-holder slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: '500px' }} tabIndex="-1">
                                    <div >
                                        <img className="img-responsive board imgGame"
                                            src="https://websitehui.s3.ap-southeast-1.amazonaws.com/tiny_ad_banner/banner_for_promote_game_slot-1.png" alt='' 
                                            onClick={() => PlayGame('fortune-ox', 'PGSOFT2', '')}/>
                                    </div>
                                </div>
                                <div className="lc-holder slick-slide"
                                    data-slick-index="0" aria-hidden="true" style={{ width: '548px' }}
                                    role="tabpanel" id="slick-slide90" aria-describedby="slick-slide-control90">
                                    <div>
                                        <img className="img-responsive board imgGame"
                                            src="https://websitehui.s3.ap-southeast-1.amazonaws.com/tiny_ad_banner/banner_for_promote_game_slot-2.png" alt='' 
                                            onClick={() => PlayGame('lucky-piggy', 'PGSOFT2', '')}/>
                                    </div>
                                </div>
                                <div className="lc-holder slick-slide slick-current slick-active"
                                    data-slick-index="1" aria-hidden="false"
                                    style={{ width: '548px' }} tabIndex="-1" role="tabpanel" id="slick-slide91"
                                    aria-describedby="slick-slide-control91">
                                    <div>
                                        <img className="img-responsive board imgGame"
                                            src="https://websitehui.s3.ap-southeast-1.amazonaws.com/tiny_ad_banner/banner_for_promote_game_slot-3.png" alt='' 
                                            onClick={() => PlayGame('Bounty BallOon', 'Bounty BallOon', 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_BountyBalloon/index.html')}/>
                                    </div>
                                </div>
                                <div className="lc-holder slick-slide"
                                    data-slick-index="2" aria-hidden="true" style={{ width: '548px' }} tabIndex="-1"
                                    role="tabpanel" id="slick-slide92" aria-describedby="slick-slide-control92">
                                    <div>
                                        <img className="img-responsive board imgGame"
                                            src="https://websitehui.s3.ap-southeast-1.amazonaws.com/tiny_ad_banner/banner_for_promote_game_slot-4.png" alt='' 
                                            onClick={() => PlayGame('Lucky Bunny Gold', 'Lucky Bunny Gold', 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_LuckyBunnyGold/index.html')}/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <ul className="slick-dots" role="tablist">
                            <li className="" role="presentation"><button type="button" role="tab"
                                id="slick-slide-control90" aria-controls="slick-slide90" aria-label="1 of 4"
                                tabIndex="0" aria-selected="true">1</button></li>
                            <li role="presentation" className="slick-active"><button type="button" role="tab"
                                id="slick-slide-control91" aria-controls="slick-slide91" aria-label="2 of 4"
                                tabIndex="-1">2</button></li>
                            <li role="presentation" className=""><button type="button" role="tab"
                                id="slick-slide-control92" aria-controls="slick-slide92" aria-label="3 of 4"
                                tabIndex="-1">3</button></li>
                            <li role="presentation" className=""><button type="button" role="tab"
                                id="slick-slide-control93" aria-controls="slick-slide93" aria-label="4 of 4"
                                tabIndex="-1">4</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Competitivegame;