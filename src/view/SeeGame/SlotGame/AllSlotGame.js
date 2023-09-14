import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import '../../pangHome/test.css';
import '../../SeeGame/ListGame.css'
import Slider from "react-slick";
import { Box, Container } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Typography from '@mui/material/Typography';
import '../../pangHome/menuGame.css'
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { A11y, Navigation, Pagination, FreeMode, Grid } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import 'swiper/css/grid';
import "bootstrap/dist/css/bootstrap.min.css"

SwiperCore.use([Navigation, Pagination, Grid]);

function AllSlotGame() {
    const token = localStorage.getItem("token");
    const [progressWidth, setProgressWidth] = useState(20);

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

    }, [])

    const PlayGame = (codeGame, name, linkGame) => {
        if (codeGame === 'Go Gold Planet' || codeGame === 'CowBoys VS Aliens' || codeGame === 'Lucky Bunny Gold' || codeGame === 'Bounty BallOon') {
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
                                window.open(link, "_blank");
                            } else {
                                window.open(link, "_self");
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
            axios.get(`seamlesslogIn/${codeGame}/${name}`)
                .then((response) => {
                    const link = response.data.data.data.url;
                    if (mobileOS === 'Android') {
                        window.open(link, "_blank");
                    } else {
                        window.open(link, "_self");
                    }
                })
                .catch(error => {
                    console.log('error', error);
                });
        }
    }

    const SeeGameCamp = (codeGame) => {
        window.location.href = `/${codeGame}`;
    }
    const populargame = [
        {
            id: 1, name: 'PG', provider_name: 'SEXY', data_gameid: 'PGSOFT2', data_name: 'PG', alt: 'PG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/1.jpg'
        },
        {
            id: 2, name: 'SlotXO', provider_name: 'PP', data_gameid: 'SLOTXO', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/2.jpg'
        },
        {
            id: 3, name: 'JoKer', provider_name: 'PP', data_gameid: 'JOKER', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/3.jpg'
        },
        {
            id: 4, name: 'Ask me Bet', provider_name: 'SPADE', data_gameid: 'ASKMEBET', data_name: 'SPADE', alt: 'SPADE',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/4.jpg'
        },
        {
            id: 5, name: 'HABANERO', provider_name: 'HABANERO', data_gameid: 'HABANERO', data_name: 'HABANERO', alt: 'HABANERO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/5.jpg'
        },
        {
            id: 6, name: 'Spade Gaming', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/6.jpg'
        },
        {
            id: 7, name: 'Micro Gaming', provider_name: 'MICRO', data_gameid: 'MICRO', data_name: 'MICRO', alt: 'MICRO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/7.jpg'
        },
        {
            id: 8, name: 'Simple Play', provider_name: 'SIMPLEPLAY', data_gameid: 'SIMPLEPLAY', data_name: 'SIMPLEPLAY', alt: 'SIMPLEPLAY',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/8.jpg'
        },
        {
            id: 9, name: 'Live22', provider_name: 'Live22', data_gameid: 'Live22', data_name: 'Live22', alt: 'Live22',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/9.jpg'
        },
        {
            id: 10, name: 'Allwayspin', provider_name: 'ALLWAYSPIN', data_gameid: 'ALLWAYSPIN', data_name: 'ALLWAYSPIN', alt: 'ALLWAYSPIN',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/10.jpg'
        },
        {
            id: 11, name: 'Evoplay', provider_name: 'EVOPLAY', data_gameid: 'EVOPLAY', data_name: 'EVOPLAY', alt: 'EVOPLAY',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/11.jpg'
        },
        {
            id: 12, name: 'CQ9', provider_name: 'CQ9V2', data_gameid: 'CQ9V2', data_name: 'CQ9V2', alt: 'CQ9V2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/12.jpg'
        },
        {
            id: 13, name: 'KA Gaming', provider_name: 'KAGAME', data_gameid: 'KAGAME', data_name: 'KAGAME', alt: 'KAGAME',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/13.jpg'
        },
        {
            id: 14, name: 'Jili', provider_name: 'JILI', data_gameid: 'JILI', data_name: 'JILI', alt: 'JILI',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/14.jpg'
        },
        {
            id: 15, name: 'Mannaplay', provider_name: 'MANNA', data_gameid: 'MANNA', data_name: 'MANNA', alt: 'MANNA',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/15.jpg'
        },
        {
            id: 16, name: 'Funky Games', provider_name: 'FUNKY', data_gameid: 'FUNKY', data_name: 'FUNKY', alt: 'FUNKY',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/16.jpg'
        },
        {
            id: 17, name: 'Yggdrasil Gaming', provider_name: 'YGGDRASIL', data_gameid: 'YGGDRASIL', data_name: 'YGGDRASIL', alt: 'YGGDRASIL',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/17.jpg'
        },
        {
            id: 18, name: 'UPG Slot', provider_name: 'UPG', data_gameid: 'UPG', data_name: 'UPG', alt: 'UPG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/18.jpg'
        },
        {
            id: 19, name: 'Ameba', provider_name: 'AMEBA', data_gameid: 'AMEBA', data_name: 'AMEBA', alt: 'AMEBA',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/20.jpg'
        },
        {
            id: 20, name: 'Ambslot', provider_name: 'AMBSLOT2', data_gameid: 'AMBSLOT2', data_name: 'AMBSLOT2', alt: 'AMBSLOT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/21.jpg'
        },
        {
            id: 21, name: 'Netent2', provider_name: 'NETENT2', data_gameid: 'NETENT2', data_name: 'NETENT2', alt: 'NETENT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/23.jpg'
        },
        {
            id: 23, name: 'Red Tiger', provider_name: 'REDTIGER', data_gameid: 'REDTIGER', data_name: 'REDTIGER', alt: 'REDTIGER',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/24.jpg'
        },
        {
            id: 24, name: 'Dragon Gaming', provider_name: 'DRAGONGAMING', data_gameid: 'DRAGONGAMING', data_name: 'DRAGONGAMING', alt: 'DRAGONGAMING',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/25.jpg'
        },
        {
            id: 25, name: 'Ace333', provider_name: 'ACE333', data_gameid: 'ACE333', data_name: 'ACE333', alt: 'ACE333',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/26.jpg'
        },
        {
            id: 26, name: 'I8', provider_name: 'I8', data_gameid: 'I8', data_name: 'I8', alt: 'I8',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/27.jpg'
        },
        {
            id: 27, name: 'WmSlot', provider_name: 'WMSLOT', data_gameid: 'WMSLOT', data_name: 'WMSLOT', alt: 'WMSLOT',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/28.jpg'
        },
        {
            id: 28, name: 'Spinix', provider_name: 'SPINIX', data_gameid: 'SPINIX', data_name: 'SPINIX', alt: 'SPINIX',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/29.jpg'
        },
        {
            id: 29, name: '918 Kiss', provider_name: '918KISS', data_gameid: '918KISS', data_name: '918KISS', alt: '918KISS',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/31.jpg'
        },
        {
            id: 30, name: 'Pragmatic Play Slot', provider_name: 'PRAGMATIC_SLOT', data_gameid: 'PRAGMATIC_SLOT', data_name: 'PRAGMATIC_SLOT', alt: 'PRAGMATIC_SLOT',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/32.jpg'
        },
    ]

    const h4Style = {
        color: 'red',
        display: 'inline-block',
        cursor: 'pointer',
        marginRight: '10px',
    };

    const BackPang = () => {
        window.location.href = `/`;
    }

    return (
        <>
            <React.Fragment>
                <Container maxWidth="xl" sx={{ p: 1 }}>
                    <Box display={'flex'}>
                        <Typography variant="h6">
                            <a className='grount font' style={h4Style} onClick={BackPang}>ย้อนกลับ</a>
                        </Typography>
                    </Box>
                    <div className="card-font">ค่ายเกมทั้งหมด</div>
                    <br />
                    <br />
                    <div className="game">
                        <div className="listSlot">
                            {populargame.map((row) => (
                                <div key={row.id} className="box ">
                                    <div className="boxGame">
                                        <div className="card-image"
                                            role="img" alt="" style={{
                                                backgroundImage: `url(${row.img})`,
                                                transform: "scale(1)"
                                            }}
                                            onClick={() => SeeGameCamp(row.data_gameid)}>
                                        </div>
                                        <img className='shadowImage ' src={row.img} alt='' style={{
                                            cursor: 'pointer',
                                        }} onClick={() => SeeGameCamp(row.data_gameid)} />
                                    </div>

                                    <span className="name">
                                        <span className='scallButtom'>{row.name}</span>
                                    </span>
                                    {/* <div className="provider-name scallButtom">{row.name}</div> */}
                                    <div className="box-play">
                                        <div className="button-play boxGoPlay" data-gameid={row.id} data-name={row.name}
                                            data-pid="191" onClick={() => SeeGameCamp(row.data_gameid)}>เข้าดูเกม</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        </>
    );
}

export default AllSlotGame;