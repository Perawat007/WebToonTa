import React, { useState, useEffect, useRef } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css"
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, FreeMode } from 'swiper';
import '../pangHome/test.css';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./Card.css";
import "../dialogHomecss.css"
import axios from '../../api/axios';
import cartoon from '../../img/3.png'
SwiperCore.use([Navigation, Pagination]);

function GameRecommend() {

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const [progressWidth, setProgressWidth] = useState(20);
    const [show, setShow] = useState(false);
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

    useEffect(() => {
        //DataGet();
    },)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextIcon />,
        prevArrow: <PrevIcon />,
        afterChange: (index) => {
            setProgressWidth((100 / 5) * (index + 1));
        },
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
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 3,
                    centerMode: true,
                    centerPadding: "580px",
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
                    centerPadding: "600px",
                },
            },

            {
                breakpoint: 390,
                settings: {
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 3,
                    centerMode: true,
                    centerPadding: "575px",
                },
            },

            {
                breakpoint: 428,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: false,
                    slidesToShow: 1,
                    slidesPerRow: 3,
                    centerMode: true,
                    speed: 400,
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

    const gameType = [

        {
            id: 1, name: 'CowBoys VS Aliens', provider_name: 'CowBoys VS Aliens', data_gameid: 'CowBoys VS Aliens',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game8.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_CowboyVSAlien/index.html',
        },
        {
            id: 2, name: 'Fruity-Candy', provider_name: 'fruity-candy', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a4.png',
            link: '',
        },
        {
            id: 3, name: 'Lucky Bunny Gold', provider_name: 'Lucky Bunny Gold', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game11.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_LuckyBunnyGold/index.html',
        },
        {
            id: 4, name: 'RoBo FARM', provider_name: 'RoBo FARM', data_gameid: 'RoBo FARM', data_name: 'RoBo FARM',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game12.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_RoboFarm/index.html?fbclid=IwAR3KxC_GlFFdk3D_LoB6NXGpt5KtLwysKqnfjUTZAMxsBbAFoI-OYvUyce0',
        },

        {
            id: 5, name: 'Cruise-Royale', provider_name: 'cruise-royale', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a1.png',
            link: '',
        },
        {
            id: 6, name: 'AmbDefender', provider_name: 'fortune-mouse', data_gameid: 'AMB', data_name: 'AMB',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a2.png',
            link: '',
        },
        {
            id: 7, name: 'Go Gold Planet', provider_name: 'Go Gold Planet', data_gameid: 'Go Gold Planet', data_name: 'Go Gold Planet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game10.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_GoGoldPlanet/index.html',
        },
        {
            id: 8, name: 'Lucky Fishing', provider_name: 'AT05', data_gameid: 'CQ9', data_name: 'CQ9',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a3.png',
            link: '',
        },
        {
            id: 9, name: 'Lucky Bunny Gold', provider_name: 'Lucky Bunny Gold', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game11.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_LuckyBunnyGold/index.html',
        },

        {
            id: 10, name: 'CowBoys VS Aliens', provider_name: 'CowBoys VS Aliens', data_gameid: 'CowBoys VS Aliens',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game8.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_CowboyVSAlien/index.html',
        },
        {
            id: 11, name: 'Fruity-Candy', provider_name: 'fruity-candy', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a4.png',
            link: '',
        },
        {
            id: 12, name: 'Lucky Bunny Gold', provider_name: 'Lucky Bunny Gold', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game11.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_LuckyBunnyGold/index.html',
        },
        {
            id: 13, name: 'RoBo FARM', provider_name: 'RoBo FARM', data_gameid: 'RoBo FARM', data_name: 'RoBo FARM',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game12.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_RoboFarm/index.html?fbclid=IwAR3KxC_GlFFdk3D_LoB6NXGpt5KtLwysKqnfjUTZAMxsBbAFoI-OYvUyce0',
        },

        {
            id: 14, name: 'Cruise-Royale', provider_name: 'cruise-royale', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a1.png',
            link: '',
        },
        {
            id: 15, name: 'AmbDefender', provider_name: 'fortune-mouse', data_gameid: 'AMB', data_name: 'AMB',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a2.png',
            link: '',
        },
        {
            id: 16, name: 'Go Gold Planet', provider_name: 'Go Gold Planet', data_gameid: 'Go Gold Planet', data_name: 'Go Gold Planet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game10.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_GoGoldPlanet/index.html',
        },
        {
            id: 17, name: 'Lucky Fishing', provider_name: 'AT05', data_gameid: 'CQ9', data_name: 'CQ9',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a3.png',
            link: '',
        },
        {
            id: 18, name: 'Lucky Bunny Gold', provider_name: 'Lucky Bunny Gold', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game11.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_LuckyBunnyGold/index.html',
        },
        {
            id: 19, name: 'CowBoys VS Aliens', provider_name: 'CowBoys VS Aliens', data_gameid: 'CowBoys VS Aliens',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game8.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_CowboyVSAlien/index.html',
        },
        {
            id: 20, name: 'Fruity-Candy', provider_name: 'fruity-candy', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a4.png',
            link: '',
        },
        {
            id: 21, name: 'Lucky Bunny Gold', provider_name: 'Lucky Bunny Gold', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game11.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_LuckyBunnyGold/index.html',
        },
        {
            id: 22, name: 'RoBo FARM', provider_name: 'RoBo FARM', data_gameid: 'RoBo FARM', data_name: 'RoBo FARM',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game12.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_RoboFarm/index.html?fbclid=IwAR3KxC_GlFFdk3D_LoB6NXGpt5KtLwysKqnfjUTZAMxsBbAFoI-OYvUyce0',
        },

        {
            id: 23, name: 'Cruise-Royale', provider_name: 'cruise-royale', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a1.png',
            link: '',
        },
        {
            id: 24, name: 'AmbDefender', provider_name: 'fortune-mouse', data_gameid: 'AMB', data_name: 'AMB',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a2.png',
            link: '',
        },
        {
            id: 25, name: 'Go Gold Planet', provider_name: 'Go Gold Planet', data_gameid: 'Go Gold Planet', data_name: 'Go Gold Planet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game10.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_GoGoldPlanet/index.html',
        },
        {
            id: 26, name: 'Lucky Fishing', provider_name: 'AT05', data_gameid: 'CQ9', data_name: 'CQ9',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/a/a3.png',
            link: '',
        },
        {
            id: 27, name: 'Lucky Bunny Gold', provider_name: 'Lucky Bunny Gold', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/tall_game/game11.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_LuckyBunnyGold/index.html',
        },

    ]

    /*const SeeGame = (campGame) => {
        if (campGame === "DOGZILLA") {
            window.location.href = `/GameDogsila`;
        } else {
            window.location.href = `/${campGame}`;
        }
    }*/

    const PlayGame = (codeGame, name, linkGame) => {
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
                                    window.open(link, "_blank");
                                }
                            }
                        }
                    })
                    .catch((error) => {
                        console.log("error", error);
                        localStorage.removeItem("token");
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
                            window.open(link, "_blank");
                        }
                    })
                    .catch(error => {
                        console.log("error", error);
                        localStorage.removeItem("token");
                        window.location.reload();
                    });
            } else {
                setShow(true);
            }
        }
    }

    const cardRef = useRef(null);
    const handleClose = () => {
        setShow(false);
    };

    const cilckLogin = () => {
        window.location.href = `/Login`;
    }
    return (
        <>
            {show && (
                <div className="overlayHome">
                    <div className="imgHome">
                        <img src={cartoon} alt="/" />
                    </div>
                    <div className="modalContainerHome">
                        <div className="modalRightHome">
                            <div className="contentHome">
                                <p className="titleDialog font">คุณยังไม่ได้ Login</p>
                                <br />
                                <h3 className="detailDialog font">
                                    กรุณา Login เพื่อเข้าเล่นเกม
                                </h3>
                            </div>
                            <div className="btnContainerHome">
                                <button className="btnPrimaryHome font" onClick={cilckLogin}>
                                    ไปหน้า Login
                                </button>
                                <button className="btnPrimaryHome font" onClick={handleClose}>
                                    ยกเลิก
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="testdata addfont">เกมใหม่มาแรง</div>
            <div className="features-game posRel mgt45 showGame">
                <div className="game vGameList">
                    <div className="list">
                        {/* <Slider {...settings}>
                            {gameType.map((row) => (
                                <div key={row.name} className="box">
                                    <div className="boxGame">
                                        <div className="card-image"
                                            role="img" alt="" style={{
                                                backgroundImage: `url(${row.img})`,
                                                transform: "scale(1)"
                                            }}
                                            onClick={() => PlayGame(row.data_gameid)}>
                                        </div>
                                        <img className='shadowImage' src={row.img} alt='' style={{
                                            cursor: 'pointer',
                                            transform: "scale(1)"
                                        }} onClick={() => PlayGame(row.data_gameid)} />
                                    </div>

                                    <span className="name">
                                        <span>{row.name}</span>
                                    </span>
                                    <div className="provider-name">{row.name}</div>
                                    <div className="box-play">
                                        <div className="button-play boxGoPlay" data-gameid={row.providerCode} data-name={row.name}
                                            data-pid="191" onClick={() => PlayGame(row.provider_name, row.data_gameid, row.link)} >เล่น</div>
                                    </div>
                                </div>
                            ))}
                        </Slider>  */}

                        <Swiper
                            slidesPerView={8}
                            spaceBetween={5}
                            loop={true}


                            breakpoints={{
                                428: {
                                    slidesPerView: 9.5,
                                    spaceBetween: 1,
                                },
                                390: {
                                    slidesPerView: 9.5,
                                    spaceBetween: 1,
                                },
                                576: {
                                    slidesPerView: 8,
                                },
                                768: {
                                    slidesPerView: 8,
                                    spaceBetween: 5,
                                }
                            }}

                            modules={[FreeMode, Pagination, Navigation]}
                            className="mySwiper2 scallGame"
                            navigation={false}
                        >
                            {gameType.map((row) => (
                                <SwiperSlide>
                                    <div key={row.name} className="box ">
                                        <div className="boxGame">
                                            <div className="card-image"
                                                role="img" alt="" style={{
                                                    backgroundImage: `url(${row.img})`,
                                                    transform: "scale(1)"
                                                }}
                                                onClick={() => PlayGame(row.data_gameid)}>
                                            </div>
                                            <img className='shadowImage ' src={row.img} alt='' style={{
                                                cursor: 'pointer',
                                                transform: "scale(1)"
                                            }} onClick={() => PlayGame(row.data_gameid)} />
                                        </div>

                                        <span className="name">
                                            <span className='scallButtom'>{row.name}</span>
                                        </span>
                                        <div className="provider-name scallButtom">{row.name}</div>
                                        <div className="box-play">
                                            <div className="button-play boxGoPlay scallButtom" data-gameid={row.providerCode} data-name={row.name}
                                                data-pid="191" onClick={() => PlayGame(row.provider_name, row.data_gameid, row.link)} >เล่น</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    );
}

const PrevIcon = ({ onClick }) => {
    return (
        <div>
            <div className="testdata addfont">เกมใหม่มาแรง</div>
            <br />
            <br />
            <div className="exclusive-prevTs">
                <div className="next-btn">
                    <div className="slick-icons slick-icons--left ">
                        <RiArrowLeftSLine className="slick-icons--left" onClick={onClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NextIcon = ({ onClick }) => {
    return (
        <div className="exclusive-nextTs">
            <div className="slick-icons">
                <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
            </div>
        </div>
    );
};

export default GameRecommend;