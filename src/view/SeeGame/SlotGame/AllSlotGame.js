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

    const SeeGameCamp = (codeGame) => {
        window.location.href = `/${codeGame}`;
    }
    const populargame = [
        {
            id: 0, name: 'DOGZILLA', provider_name: 'DOGZILLA', data_gameid: 'GameDogzilla', data_name: 'DOGZILLA', alt: 'DOGZILLA',
            img: '/GameCamp/33.webp'
        },
        {
            id: 1, name: 'PG', provider_name: 'SEXY', data_gameid: 'PGSOFT2', data_name: 'PG', alt: 'PG',
            img: '/GameCamp/1.webp'
        },
        {
            id: 2, name: 'SlotXO', provider_name: 'PP', data_gameid: 'SLOTXO', data_name: 'SlotXO', alt: 'SlotXO',
            img: '/GameCamp/2.webp'
        },
        {
            id: 3, name: 'JoKer', provider_name: 'PP', data_gameid: 'JOKER', data_name: 'JoKer', alt: 'JoKer',
            img: '/GameCamp/3.webp'
        },
        {
            id: 4, name: 'Ask me Bet', provider_name: 'SPADE', data_gameid: 'ASKMEBET', data_name: 'SPADE', alt: 'SPADE',
            img: '/GameCamp/4.webp'
        },
        {
            id: 5, name: 'HABANERO', provider_name: 'HABANERO', data_gameid: 'HABANERO', data_name: 'HABANERO', alt: 'HABANERO',
            img: '/GameCamp/5.webp'
        },
        {
            id: 6, name: 'Spade Gaming', provider_name: 'PP', data_gameid: 'SPADE', data_name: 'SlotXO', alt: 'SlotXO',
            img: '/GameCamp/6.webp'
        },
        {
            id: 7, name: 'Micro Gaming', provider_name: 'MICRO', data_gameid: 'MICRO', data_name: 'MICRO', alt: 'MICRO',
            img: '/GameCamp/7.webp'
        },
        {
            id: 8, name: 'Simple Play', provider_name: 'SIMPLEPLAY', data_gameid: 'SIMPLEPLAY', data_name: 'SIMPLEPLAY', alt: 'SIMPLEPLAY',
            img: '/GameCamp/8.webp'
        },
        {
            id: 9, name: 'Live22', provider_name: 'Live22', data_gameid: 'LIVE22', data_name: 'Live22', alt: 'Live22',
            img: '/GameCamp/9.webp'
        },
        // {
        //     id: 10, name: 'Allwayspin', provider_name: 'ALLWAYSPIN', data_gameid: 'ALLWAYSPIN', data_name: 'ALLWAYSPIN', alt: 'ALLWAYSPIN',
        //     img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/10.jpg'
        // },
        {
            id: 11, name: 'Evoplay', provider_name: 'EVOPLAY', data_gameid: 'EVOPLAY', data_name: 'EVOPLAY', alt: 'EVOPLAY',
            img: '/GameCamp/11.webp'
        },
        {
            id: 12, name: 'CQ9', provider_name: 'CQ9', data_gameid: 'CQ9', data_name: 'CQ9', alt: 'CQ9',
            img: '/GameCamp/12.webp'
        },
        // {
        //     id: 13, name: 'KA Gaming', provider_name: 'KAGAME', data_gameid: 'KAGAME', data_name: 'KAGAME', alt: 'KAGAME',
        //     img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/new_size/gamecamp/13.jpg'
        // },
        {
            id: 14, name: 'Jili', provider_name: 'JILI', data_gameid: 'JILI', data_name: 'JILI', alt: 'JILI',
            img: '/GameCamp/14.webp'
        },
        {
            id: 15, name: 'Mannaplay', provider_name: 'MANNA', data_gameid: 'MANNA', data_name: 'MANNA', alt: 'MANNA',
            img: '/GameCamp/15.webp'
        },
        {
            id: 16, name: 'Funky Games', provider_name: 'FUNKY', data_gameid: 'FUNKY', data_name: 'FUNKY', alt: 'FUNKY',
            img: '/GameCamp/16.webp'
        },
        {
            id: 17, name: 'Yggdrasil Gaming', provider_name: 'YGGDRASIL', data_gameid: 'YGGDRASIL', data_name: 'YGGDRASIL', alt: 'YGGDRASIL',
            img: '/GameCamp/17.webp'
        },
        {
            id: 18, name: 'UPG Slot', provider_name: 'UPG', data_gameid: 'UPG', data_name: 'UPG', alt: 'UPG',
            img: '/GameCamp/18.webp'
        },
        {
            id: 19, name: 'Ameba', provider_name: 'AMEBA', data_gameid: 'AMEBA', data_name: 'AMEBA', alt: 'AMEBA',
            img: '/GameCamp/20.webp'
        },
        {
            id: 20, name: 'Ambslot', provider_name: 'AMBSLOT2', data_gameid: 'AMBSLOT2', data_name: 'AMBSLOT2', alt: 'AMBSLOT2',
            img: '/GameCamp/21.webp'
        },
        {
            id: 21, name: 'Netent2', provider_name: 'NETENT2', data_gameid: 'NETENT2', data_name: 'NETENT2', alt: 'NETENT2',
            img: '/GameCamp/23.webp'
        },
        {
            id: 23, name: 'Red Tiger', provider_name: 'REDTIGER', data_gameid: 'REDTIGER', data_name: 'REDTIGER', alt: 'REDTIGER',
            img: '/GameCamp/24.webp'
        },
        {
            id: 24, name: 'Dragon Gaming', provider_name: 'DRAGONGAMING', data_gameid: 'DRAGONGAMING', data_name: 'DRAGONGAMING', alt: 'DRAGONGAMING',
            img: '/GameCamp/25.webp'
        },
        {
            id: 25, name: 'Ace333', provider_name: 'ACE333', data_gameid: 'ACE333', data_name: 'ACE333', alt: 'ACE333',
            img: '/GameCamp/26.webp'
        },
        {
            id: 26, name: 'I8', provider_name: 'I8', data_gameid: 'I8', data_name: 'I8', alt: 'I8',
            img: '/GameCamp/27.webp'
        },
        {
            id: 27, name: 'WmSlot', provider_name: 'WMSLOT', data_gameid: 'WMSLOT', data_name: 'WMSLOT', alt: 'WMSLOT',
            img: '/GameCamp/28.webp'
        },
        {
            id: 28, name: 'Spinix', provider_name: 'SPINIX', data_gameid: 'SPINIX', data_name: 'SPINIX', alt: 'SPINIX',
            img: '/GameCamp/29.webp'
        },
        {
            id: 29, name: '918 Kiss', provider_name: '918KISS', data_gameid: '918KISS', data_name: '918KISS', alt: '918KISS',
            img: '/GameCamp/31.webp'
        },
        {
            id: 30, name: 'Pragmatic Play Slot', provider_name: 'PRAGMATIC_SLOT', data_gameid: 'PRAGMATIC_SLOT', data_name: 'PRAGMATIC_SLOT', alt: 'PRAGMATIC_SLOT',
            img: '/GameCamp/32.webp'
        },
    ]

    const h4Style = {
        color: 'white',
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
                <div className="card-font">ค่ายเกมทั้งหมด</div>
                    <Box display={'flex'}>
                        <Typography variant="h6">
                            <a className='grount font' style={h4Style} onClick={BackPang}>ย้อนกลับ</a>
                        </Typography>
                    </Box>
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