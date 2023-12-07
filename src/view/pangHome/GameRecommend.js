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

import GameimgFruity from '../../img/GameShowImg/game_8.jpg'
import GameimgAMBDefender from '../../img/GameShowImg/game_11.jpg'
import GameimgLuckyFish from '../../img/GameShowImg/game_10.jpg'
import GameimgToWerRush from '../../img/GameShowImg/game_6.webp'
import GameimgCowBoys from '../../img/GameShowImg/game_CowBoys.webp'
import GameimgGoGolo from '../../img/GameShowImg/game_GOGOLO.webp'
import GameimgLuckyBunny from '../../img/GameShowImg/game_LuckyBunny.webp'
import GameimgRoBoFarm from '../../img/GameShowImg/game_RoBoFarm.webp'

SwiperCore.use([Navigation, Pagination]);

function GameRecommend() {

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const [show, setShow] = useState(false);
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

    const gameType = [

        {
            id: 1, name: 'CowBoys VS Aliens', provider_name: 'Dogzilla', data_gameid: 'CowBoys VS Aliens',
            img: GameimgCowBoys,
            link: 'https://cowboyvsalien.toonta.com',
        },
        {
            id: 2, name: 'Fruity-Candy', provider_name: 'fruity-candy', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgFruity,
            link: '',
        },
        {
            id: 3, name: 'Lucky Bunny Gold', provider_name: 'Dogzilla', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: GameimgLuckyBunny,
            link: 'https://luckybunnygold.toonta.com',
        },
        {
            id: 4, name: 'RoBo FARM', provider_name: 'Dogzilla', data_gameid: 'RoBo FARM', data_name: 'RoBo FARM',
            img: GameimgRoBoFarm,
            link: 'https://robofarm.toonta.com',
        },

        {
            id: 5, name: 'Tower Rush', provider_name: 'Dogzilla', data_gameid: 'Tower Rush', data_name: 'Tower Rush',
            img: GameimgToWerRush,
            link: 'https://towerrush.toonta.com',
        },
        {
            id: 6, name: 'AmbDefender', provider_name: 'AMBDEFENDER', data_gameid: 'AMBSLOT2', data_name: 'AMBSLOT2',
            img: GameimgAMBDefender,
            link: '',
        },
        {
            id: 7, name: 'Go Gold Planet', provider_name: 'Dogzilla', data_gameid: 'Go Gold Planet', data_name: 'Go Gold Planet',
            img: GameimgGoGolo,
            link: 'https://gogoldplanet.toonta.com',
        },
        {
            id: 8, name: 'Lucky Fishing', provider_name: 'AT05', data_gameid: 'CQ9V2', data_name: 'CQ9V2',
            img: GameimgLuckyFish,
            link: '',
        },
        {
            id: 9, name: 'Lucky Bunny Gold', provider_name: 'Dogzilla', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: GameimgLuckyBunny,
            link: 'https://luckybunnygold.toonta.com',
        },

        {
            id: 10, name: 'CowBoys VS Aliens', provider_name: 'Dogzilla', data_gameid: 'CowBoys VS Aliens',
            img: GameimgCowBoys,
            link: 'https://cowboyvsalien.toonta.com',
        },
        {
            id: 11,  name: 'Fruity-Candy', provider_name: 'fruity-candy', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgFruity,
            link: '',
        },
        {
            id: 12, name: 'Lucky Bunny Gold', provider_name: 'Dogzilla', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: GameimgLuckyBunny,
            link: 'https://luckybunnygold.toonta.com',
        },
        {
            id: 13, name: 'RoBo FARM', provider_name: 'Dogzilla', data_gameid: 'RoBo FARM', data_name: 'RoBo FARM',
            img: GameimgRoBoFarm,
            link: 'https://robofarm.toonta.com',
        },

        {
            id: 14,  name: 'Tower Rush', provider_name: 'Dogzilla', data_gameid: 'Tower Rush', data_name: 'Tower Rush',
            img: GameimgToWerRush,
            link: 'https://towerrush.toonta.com',
        },
        {
            id: 15, name: 'AmbDefender', provider_name: 'AMBDEFENDER', data_gameid: 'AMBSLOT2', data_name: 'AMBSLOT2',
            img: GameimgAMBDefender,
            link: '',
        },
        {
            id: 16, name: 'Go Gold Planet', provider_name: 'Dogzilla', data_gameid: 'Go Gold Planet', data_name: 'Go Gold Planet',
            img: GameimgGoGolo,
            link: 'https://gogoldplanet.toonta.com',
        },
        {
            id: 17, name: 'Lucky Fishing', provider_name: 'AT05', data_gameid: 'CQ9V2', data_name: 'CQ9V2',
            img: GameimgLuckyFish,
            link: '',
        },
        {
            id: 18, name: 'Lucky Bunny Gold', provider_name: 'Dogzilla', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: GameimgLuckyBunny,
            link: 'https://luckybunnygold.toonta.com',
        },
        {
            id: 19, name: 'CowBoys VS Aliens', provider_name: 'Dogzilla', data_gameid: 'CowBoys VS Aliens',
            img: GameimgCowBoys,
            link: 'https://cowboyvsalien.toonta.com',
        },
        {
            id: 20, name: 'Fruity-Candy', provider_name: 'fruity-candy', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgFruity,
            link: '',
        },
        {
            id: 21, name: 'Lucky Bunny Gold', provider_name: 'Dogzilla', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: GameimgLuckyBunny,
            link: 'https://luckybunnygold.toonta.com',
        },
        {
            id: 22, name: 'RoBo FARM', provider_name: 'Dogzilla', data_gameid: 'RoBo FARM', data_name: 'RoBo FARM',
            img: GameimgRoBoFarm,
            link: 'https://robofarm.toonta.com',
        },

        {
            id: 23,  name: 'Tower Rush', provider_name: 'Dogzilla', data_gameid: 'Tower Rush', data_name: 'Tower Rush',
            img: GameimgToWerRush,
            link: 'https://towerrush.toonta.com',
        },
        {
            id: 24, name: 'AmbDefender', provider_name: 'AMBDEFENDER', data_gameid: 'AMBSLOT2', data_name: 'AMBSLOT2',
            img: GameimgAMBDefender,
            link: '',
        },
        {
            id: 25, name: 'Go Gold Planet', provider_name: 'Dogzilla', data_gameid: 'Go Gold Planet', data_name: 'Go Gold Planet',
            img: GameimgGoGolo,
            link: 'https://gogoldplanet.toonta.com',
        },
        {
            id: 26, name: 'Lucky Fishing', provider_name: 'AT05', data_gameid: 'CQ9V2', data_name: 'CQ9V2',
            img: GameimgLuckyFish,
            link: '',
        },
        {
            id: 27, name: 'Lucky Bunny Gold', provider_name: 'Dogzilla', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: GameimgLuckyBunny,
            link: 'https://luckybunnygold.toonta.com',
        },

    ]

    const PlayGame = async (codeGame, name, linkGame, nameGame) => {
        const tokenEn = encodeURIComponent(token);
        if (codeGame === 'Dogzilla') {
            if (token) {
                axios.post("/post/token", "", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    if (response.data.message === "TokenOn") {
                        return axios.post("userplayGame", {
                            username: user,
                            nameGame: nameGame,
                            agent_id: '2',
                        });
                    }
                })
                .then((gameResponse) => {
                    if (gameResponse && gameResponse.data.message === "saveNameGame") {
                        const link = linkGame + `?token=${tokenEn}`;
                        if (mobileOS === 'Android') {
                            window.open(link, "_blank");
                        } else {
                            window.open(link, "_self");
                        }
                    } else {
                        console.log(gameResponse?.status.JSON);
                    }
                })
                .catch((error) => {
                    console.log("error", error);
                    // Show an error message to the user or perform necessary actions
                    localStorage.removeItem("token");
                    setShow(true); // Set your show state for UI notification
                });
            } else {
                setShow(true);
            }

        } else {
            if (token) {
                try {
                    const responseGet = await axios.get(`seamlesslogIn/${codeGame}/${name}/${user}`);
                    const responsePost = await axios.post("userplayGame", {
                        username: user,
                        nameGame: nameGame,
                        agent_id: '2',
                    });
    
                    if (responsePost.data.message === "saveNameGame") {
                        const link = responseGet.data.data.data.url;
                        if (mobileOS === 'Android') {
                            window.open(link, "_blank");
                        } else {
                            window.open(link, "_self");
                        }
                    } else {
                        console.log(responseGet?.status.JSON);
                    }
                } catch (error) {
                    console.log("error", error);
                    // localStorage.removeItem("token");
                    // window.location.reload();
                }
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
                <div className=" game vGameList">
                    <div className="list scallGame">
                
                        <Swiper
                            slidesPerView={8}
                            spaceBetween={5}
                            loop={true}
               

                            breakpoints={{
                                428: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 1,
                                },
                                414: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 1,
                                },
                                390: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 1,
                                },
                                280: {
                                    slidesPerView: 2.8,
                                    spaceBetween: 1,
                                },
                                576: {
                                    slidesPerView: 4,
                                    spaceBetween: 5,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 5,
                                },
                                800: {
                                    slidesPerView: 5,
                                    spaceBetween: 5,
                                },
                                1000: {
                                    slidesPerView: 8,
                                    spaceBetween: 5,
                                },
                                1200: {
                                    slidesPerView: 8,
                                    spaceBetween: 5,
                                },
                            }}

                            modules={[FreeMode, Pagination, Navigation]}
                            className="mySwiper2 "
                            navigation={false}
                        >
                            {gameType.map((row) => (
                                <SwiperSlide>
                                    <div key={row.id} className="box ">
                                        <div className="boxGame">
                                            <div className="card-image "
                                                onClick={() => PlayGame(row.data_gameid)}>
                                            </div>
                                            <img className='shadowImage' src={row.img} alt='' style={{
                                                cursor: 'pointer',
                                                transform: "scale(1)"
                                            }} onClick={() => PlayGame(row.data_gameid)} />
                                        </div>
                                        {/* <span className="name">
                                            <span className='scallButtom'>{row.name}</span>
                                        </span>
                                        <div className="provider-name ">{row.name}</div> */}
                                        <div className="box-play">
                                            <div className="button-play boxGoPlay " data-gameid={row.providerCode} data-name={row.name}
                                                data-pid="191" onClick={() => PlayGame(row.provider_name, row.data_gameid, row.link, row.name)} >เล่น</div>
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