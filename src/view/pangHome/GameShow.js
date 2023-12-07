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
import "react-multi-carousel/lib/styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./Card.css";
import "../dialogHomecss.css"
import axios from '../../api/axios';
import cartoon from '../../img/3.png'
import GameimgDiao from '../../img/GameShowImg/game_1.webp'
import GameimgFortune from '../../img/GameShowImg/game_2.webp'
import GameimgIceScape from '../../img/GameShowImg/game_3.webp'
import GameimgSweetBonaza from '../../img/GameShowImg/game_4.webp'
import GameimgBoynty from '../../img/GameShowImg/game_Boynty.webp'
import GameimgToWerRush from '../../img/GameShowImg/game_6.webp'
import GameimgWinWinWon from '../../img/GameShowImg/game_7.webp'
import GameimgCowBoys from '../../img/GameShowImg/game_CowBoys.webp'
import GameimgLucky from '../../img/GameShowImg/game_9.webp'
import GameimgGoGolo from '../../img/GameShowImg/game_GOGOLO.webp'
import GameimgLuckyBunny from '../../img/GameShowImg/game_LuckyBunny.webp'
import GameimgRoBoFarm from '../../img/GameShowImg/game_RoBoFarm.webp'

SwiperCore.use([Navigation, Pagination]);

function GameShow() {

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

    const gameType = [
        {
            id: 1, name: 'Honey Trap of Diao Chan', provider_name: 'diaochan', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgDiao,
            link: '',
        },
        {
            id: 2, name: 'Fortune Mouse', provider_name: 'fortune-mouse', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgFortune,
            link: '',
        },
        {
            id: 3, name: 'The Great IceScape', provider_name: 'the-great-icescape', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgIceScape,
            link: '',
        },
        {
            id: 4, name: 'Sweet Bonanza', provider_name: 'vs20fruitsw', data_gameid: 'PRAGMATIC_SLOT', data_name: 'PRAGMATIC_SLOT',
            img: GameimgSweetBonaza,
            link: '',
        },
        {
            id: 5, name: 'Bounty BallOon', provider_name: 'Dogzilla', data_gameid: 'Bounty BallOon', data_name: 'Bounty BallOon',
            img: GameimgBoynty,
            link: 'https://bountyballoon.toonta.com',
        },
        {
            id: 6, name: 'Tower Rush', provider_name: 'Dogzilla', data_gameid: 'Tower Rush', data_name: 'Tower Rush',
            img: GameimgToWerRush,
            link: 'https://towerrush.toonta.com',
        },
        {
            id: 7, name: 'Win Win Won', provider_name: 'win-win-won', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgWinWinWon,
            link: '',
        },
        {
            id: 8, name: 'CowBoys VS Aliens', provider_name: 'Dogzilla', data_gameid: 'CowBoys VS Aliens',
            img: GameimgCowBoys,
            link: 'https://cowboyvsalien.toonta.com',
        },
        {
            id: 9, name: 'Lucky Neko', provider_name: 'lucky-neko', data_gameid: 'PGSOFT2',
            img: GameimgLucky,
            link: '',
        },
        {
            id: 10, name: 'Go Gold Planet', provider_name: 'Dogzilla', data_gameid: 'Go Gold Planet', data_name: 'Go Gold Planet',
            img: GameimgGoGolo,
            link: 'https://gogoldplanet.toonta.com',
        },
        {
            id: 11, name: 'Lucky Bunny Gold', provider_name: 'Dogzilla', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: GameimgLuckyBunny,
            link: 'https://luckybunnygold.toonta.com',
        },
        {
            id: 12, name: 'RoBo FARM', provider_name: 'Dogzilla', data_gameid: 'RoBo FARM', data_name: 'RoBo FARM',
            img: GameimgRoBoFarm,
            link: 'https://robofarm.toonta.com',
        },

        {
            id: 13, name: 'Honey Trap of Diao Chan', provider_name: 'diaochan', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgDiao,
            link: '',
        },
        {
            id: 14, name: 'Fortune Mouse', provider_name: 'fortune-mouse', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgFortune,
            link: '',
        },
        {
            id: 15, name: 'The Great IceScape', provider_name: 'the-great-icescape', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgIceScape,
            link: '',
        },
        {
            id: 16, name: 'Sweet Bonanza', provider_name: 'vs20fruitsw', data_gameid: 'PRAGMATIC_SLOT', data_name: 'PRAGMATIC_SLOT',
            img: GameimgSweetBonaza,
            link: '',
        },
        {
            id: 17, name: 'Bounty BallOon', provider_name: 'Dogzilla', data_gameid: 'Bounty BallOon', data_name: 'Bounty BallOon',
            img: GameimgBoynty,
            link: 'https://bountyballoon.toonta.com',
        },
        {
            id: 18, name: 'Tower Rush', provider_name: 'Dogzilla', data_gameid: 'Tower Rush', data_name: 'Tower Rush',
            img: GameimgToWerRush,
            link: 'https://towerrush.toonta.com',
        },
        {
            id: 19, name: 'Win Win Won', provider_name: 'win-win-won', data_gameid: 'PGSOFT2', data_name: 'PGSOFT2',
            img: GameimgWinWinWon,
            link: '',
        },
        {
            id: 20, name: 'CowBoys VS Aliens', provider_name: 'Dogzilla', data_gameid: 'CowBoys VS Aliens',
            img: GameimgCowBoys,
            link: 'https://cowboyvsalien.toonta.com',
        },
        {
            id: 21, name: 'Lucky Neko', provider_name: 'lucky-neko', data_gameid: 'PGSOFT2',
            img: GameimgLucky,
            link: '',
        },
        {
            id: 22, name: 'Go Gold Planet', provider_name: 'Dogzilla', data_gameid: 'Go Gold Planet', data_name: 'Go Gold Planet',
            img: GameimgGoGolo,
            link: 'https://gogoldplanet.toonta.com',
        },
        {
            id: 23, name: 'Lucky Bunny Gold', provider_name: 'Dogzilla', data_gameid: 'Lucky Bunny Gold', data_name: 'Lucky Bunny Gold',
            img: GameimgLuckyBunny,
            link: 'https://luckybunnygold.toonta.com',
        },
        {
            id: 24, name: 'RoBo FARM', provider_name: 'Dogzilla', data_gameid: 'RoBo FARM', data_name: 'RoBo FARM',
            img: GameimgRoBoFarm,
            link: 'https://robofarm.toonta.com',
        },
    ]

    /*const SeeGame = (campGame) => {
        if (campGame === "DOGZILLA") {
            window.location.href = `/GameDogsila`;
        } else {
            window.location.href = `/${campGame}`;
        }
    }*/

    const PlayGame = async (codeGame, name, linkGame, nameGame) => {
        const tokenEn = encodeURIComponent(token);

        const response = await axios.post("userplayGame", {
            username: user,
            nameGame: nameGame,
            agent_id: "2",
        });
        if (response.data.message === "saveNameGame") {
            if (codeGame === 'Dogzilla') {
                if (token) {
                    axios.post("/post/token", "", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                        .then((response) => {
                            if (response.data.message === "TokenOn") {
                                if (response && response.data.message === "saveNameGame") {
                                    const link = linkGame + `?token=${tokenEn}`;
                                    if (mobileOS === 'Android') {
                                        window.open(link, "_blank");
                                    } else {
                                        window.open(link, "_self");
                                    }
                                } else {
                                    console.log(response?.status.JSON);
                                }
                            }
                        })
                        .catch((error) => {
                            console.log("error", error);
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
                        const link = responseGet.data.data.data.url;
                        if (mobileOS === 'Android') {
                            window.open(link, "_blank");
                        } else {
                            window.open(link, "_self");
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
            <div className="testdata addfont">เกมติดอันดับ</div>
            <div className="features-game posRel mgt45 showGame">
                <div className="game vGameList">
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
                                1000: {
                                    slidesPerView: 8,
                                    spaceBetween: 5,
                                },
                                1200: {
                                    slidesPerView: 8,
                                    spaceBetween: 5,
                                }
                            }}

                            modules={[FreeMode, Pagination, Navigation]}
                            className="mySwiper2"
                            navigation={false}
                        >
                            {gameType.map((row) => (
                                <SwiperSlide>
                                    <div key={row.id} className="box ">
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

                                        {/* <span className="name">
                                            <span className='scallButtom'>{row.name}</span>
                                        </span> */}
                                        {/* <div className="provider-name scallButtom">{row.name}</div> */}
                                        <div className="box-play">
                                            <div className="button-play boxGoPlay scallButtom" data-gameid={row.providerCode} data-name={row.name}
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
export default GameShow;