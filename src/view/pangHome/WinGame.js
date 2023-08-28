import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import '../pangHome/test.css';
import '../../view/SeeGame/ListGame.css'
import Slider from "react-slick";
import { Box, Container } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Typography from '@mui/material/Typography';
import cartoon from "../../img/1.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import 'swiper/css/grid';
import "bootstrap/dist/css/bootstrap.min.css"

function WinGame() {
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

    const specialgame = [
        {
            id: 1, name: 'Go Gold Planet', provider_name: 'Go Gold Planet', data_gameid: 'Go Gold Planet', alt: 'Go Gold Planet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-13.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_GoGoldPlanet/index.html',
        },
        {
            id: 2, name: 'Honey Trap of Diao Chan', provider_name: 'diaochan', data_gameid: 'PGSOFT2', alt: 'Honey Trap of Diao Chan',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-1.png',
            link: '',
        },
        {
            id: 3, name: 'Lucky Bunny Gold', provider_name: 'Lucky Bunny Gold', data_gameid: 'Lucky Bunny Gold', alt: 'Lucky Bunny Gold',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-15.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_LuckyBunnyGold/index.html',
        },
        {
            id: 4, name: 'Ocean Lord', provider_name: '1001', data_gameid: 'ASKMEBET', alt: 'Ocean Lord',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-12.png',
            link: '',
        },
        {
            id: 5, name: 'Golden Zuma', provider_name: '4004', data_gameid: 'ASKMEBET', alt: 'Golden Zuma',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-11.png',
            link: '',
        },
        {
            id: 6, name: 'Jump & Jump', provider_name: '4005', data_gameid: 'ASKMEBET', alt: 'Jump & Jump',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-3_1.png',
            link: '',
        },
        {
            id: 7, name: "Let's Shoot", provider_name: '1002', data_gameid: 'ASKMEBET', alt: "Let's Shoot",
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-4.png',
            link: '',
        },
        {
            id: 8, name: 'Plants vs. Dinos', provider_name: '1007', data_gameid: 'ASKMEBET', alt: 'Plants vs. Dinos',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-10.png',
            link: '',
        },
        {
            id: 9, name: 'Football Strike', provider_name: '602813', data_gameid: 'FUNKY', alt: 'Football Strike',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-9.png',
            link: '',
        },
        {
            id: 10, name: 'CowBoys VS Aliens', provider_name: 'CowBoys VS Aliens', data_gameid: 'CowBoys VS Aliens', alt: 'CowBoys VS Aliens',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-14.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_CowboyVSAlien/index.html',
        },
        {
            id: 11, name: "Fortune Mouse", provider_name: 'fortune-mouse', data_gameid: 'PGSOFT2', alt: "Fortune Mouse",
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-6.png',
            link: '',
        },
        {
            id: 12, name: 'Bounty BallOon', provider_name: 'Bounty BallOon', data_gameid: 'Bounty BallOon', alt: 'Bounty BallOon',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-16.png',
            link: 'https://testconstruct3games.s3.ap-southeast-1.amazonaws.com/Test_BountyBalloon/index.html',
        },
        {
            id: 13, name: 'Lucky Neko', provider_name: 'lucky-neko', data_gameid: 'PGSOFT2', alt: 'Lucky Neko',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-5.png',
            link: '',
        },
        {
            id: 14, name: 'The Great IceScape', provider_name: 'the-great-icescape', data_gameid: 'PGSOFT2', alt: 'the-great-icescape',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-7.png',
            link: '',
        },
        {
            id: 15, name: 'Sweet Bonanza', provider_name: 'vs20fruitsw', data_gameid: 'EGAMES', alt: 'Sweet Bonanza',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-8.png',
            link: '',
        },
        {
            id: 16, name: 'Win Win Won', provider_name: 'Win Win Won', data_gameid: 'Win Win Won', alt: 'Win Win Won',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/G-2.png',
            link: '',
        },
    ]

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
            axios.get(`seamlesslogIn/${codeGame}/${name}`)
                .then((response) => {
                    const link = response.data.data.data.url;
                    if (mobileOS === 'Android') {
                        window.open(link);
                    } else {
                        window.open(link, "_blank");
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
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/1.png'
        },
        {
            id: 2, name: 'SlotXO', provider_name: 'PP', data_gameid: 'SLOTXO', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/2.png'
        },
        {
            id: 3, name: 'JoKer', provider_name: 'PP', data_gameid: 'JOKER', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/3.png'
        },
        {
            id: 4, name: 'Ask me Bet', provider_name: 'SPADE', data_gameid: 'ASKMEBET', data_name: 'SPADE', alt: 'SPADE',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/4.png'
        },
        {
            id: 5, name: 'HABANERO', provider_name: 'HABANERO', data_gameid: 'HABANERO', data_name: 'HABANERO', alt: 'HABANERO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/5.png'
        },
        {
            id: 6, name: 'Spade Gaming', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/6.png'
        },
        {
            id: 7, name: 'Micro Gaming', provider_name: 'MICRO', data_gameid: 'MICRO', data_name: 'MICRO', alt: 'MICRO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/7.png'
        },
        {
            id: 8, name: 'Simple Play', provider_name: 'SIMPLEPLAY', data_gameid: 'SIMPLEPLAY', data_name: 'SIMPLEPLAY', alt: 'SIMPLEPLAY',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/8.png'
        },
        {
            id: 9, name: 'Live22', provider_name: 'Live22', data_gameid: 'Live22', data_name: 'Live22', alt: 'Live22',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/9.png'
        },
        {
            id: 10, name: 'Allwayspin', provider_name: 'ALLWAYSPIN', data_gameid: 'ALLWAYSPIN', data_name: 'ALLWAYSPIN', alt: 'ALLWAYSPIN',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/10.png'
        },
        {
            id: 11, name: 'Evoplay', provider_name: 'EVOPLAY', data_gameid: 'EVOPLAY', data_name: 'EVOPLAY', alt: 'EVOPLAY',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/11.png'
        },
        {
            id: 12, name: 'CQ9', provider_name: 'CQ9V2', data_gameid: 'CQ9V2', data_name: 'CQ9V2', alt: 'CQ9V2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/12.png'
        },
        {
            id: 13, name: 'KA Gaming', provider_name: 'KAGAME', data_gameid: 'KAGAME', data_name: 'KAGAME', alt: 'KAGAME',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/13.png'
        },
        {
            id: 14, name: 'Jili', provider_name: 'JILI', data_gameid: 'JILI', data_name: 'JILI', alt: 'JILI',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/14.png'
        },
        {
            id: 15, name: 'Mannaplay', provider_name: 'MANNA', data_gameid: 'MANNA', data_name: 'MANNA', alt: 'MANNA',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/15.png'
        },
        {
            id: 16, name: 'Funky Games', provider_name: 'FUNKY', data_gameid: 'FUNKY', data_name: 'FUNKY', alt: 'FUNKY',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/16.png'
        },
        {
            id: 17, name: 'Yggdrasil Gaming', provider_name: 'YGGDRASIL', data_gameid: 'YGGDRASIL', data_name: 'YGGDRASIL', alt: 'YGGDRASIL',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/17.png'
        },
        {
            id: 18, name: 'UPG Slot', provider_name: 'UPG', data_gameid: 'UPG', data_name: 'UPG', alt: 'UPG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/18.png'
        },
        /*{
            id: 19, name: 'JoKer', provider_name: 'PP', data_gameid: '218', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/19.png'
        },*/
        {
            id: 20, name: 'Ameba', provider_name: 'AMEBA', data_gameid: 'AMEBA', data_name: 'AMEBA', alt: 'AMEBA',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/20.png'
        },
        {
            id: 21, name: 'Ambslot', provider_name: 'AMBSLOT2', data_gameid: 'AMBSLOT2', data_name: 'AMBSLOT2', alt: 'AMBSLOT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/21.png'
        },
        // {
        //     id: 22, name: 'SlotXO', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
        //     img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/22.png'
        // },
        {
            id: 23, name: 'Netent2', provider_name: 'NETENT2', data_gameid: 'NETENT2', data_name: 'NETENT2', alt: 'NETENT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/23.png'
        },
        {
            id: 24, name: 'Red Tiger', provider_name: 'REDTIGER', data_gameid: 'REDTIGER', data_name: 'REDTIGER', alt: 'REDTIGER',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/24.png'
        },
        {
            id: 25, name: 'Dragon Gaming', provider_name: 'DRAGONGAMING', data_gameid: 'DRAGONGAMING', data_name: 'DRAGONGAMING', alt: 'DRAGONGAMING',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/25.png'
        },
        {
            id: 26, name: 'Ace333', provider_name: 'ACE333', data_gameid: 'ACE333', data_name: 'ACE333', alt: 'ACE333',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/26.png'
        },
        {
            id: 27, name: 'I8', provider_name: 'I8', data_gameid: 'I8', data_name: 'I8', alt: 'I8',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/27.png'
        },
        {
            id: 28, name: 'WmSlot', provider_name: 'WMSLOT', data_gameid: 'WMSLOT', data_name: 'WMSLOT', alt: 'WMSLOT',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/28.png'
        },
        {
            id: 29, name: 'Spinix', provider_name: 'SPINIX', data_gameid: 'SPINIX', data_name: 'SPINIX', alt: 'SPINIX',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/29.png'
        },
        /* {
             id: 30, name: 'Ninja slot', provider_name: 'NINJA', data_gameid: 'NINJA', data_name: 'NINJA', alt: 'NINJA',
             img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/30.png'
         },*/
        {
            id: 31, name: '918 Kiss', provider_name: '918KISS', data_gameid: '918KISS', data_name: '918KISS', alt: '918KISS',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/31.png'
        },
        {
            id: 32, name: 'Pragmatic Play Slot', provider_name: 'PRAGMATIC_SLOT', data_gameid: 'PRAGMATIC_SLOT', data_name: 'PRAGMATIC_SLOT', alt: 'PRAGMATIC_SLOT',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/32.png'
        },

        // {
        //     id: 33, name: 'Pragmatic Play Slot', provider_name: 'PRAGMATIC_SLOT', data_gameid: 'PRAGMATIC_SLOT', data_name: 'PRAGMATIC_SLOT', alt: 'PRAGMATIC_SLOT',
        //     img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/33.png'
        // },
        {
            id: 24, name: 'Dragon Gaming', provider_name: 'DRAGONGAMING', data_gameid: 'DRAGONGAMING', data_name: 'DRAGONGAMING', alt: 'DRAGONGAMING',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cover_slot_game/25.png'
        },
    ]

    const trading = [
        {
            id: 1, name: 'HOTGRAPH', provider_name: 'Binary', data_gameid: 'HOTGRAPH', data_name: 'Lobby', alt: 'Lobby',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/51.png'
        },
        {
            id: 2, name: 'Ambpoker', provider_name: 'AMBPOKER', data_gameid: 'AMBPOKER', data_name: 'AMBPOKER', alt: 'AMBPOKER',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/cards/48.png'
        },
    ]


    const LiveCasino = [
        {
            id: 1, name: 'Sexy Gaming', provider_name: 'SEXY', data_gameid: 'SEXY', alt: 'SEXY',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/33.png',
        },
        {
            id: 2, name: 'Pragmatic Play Casino', provider_name: 'PRAGMATIC_LIVECASINO', data_gameid: 'PRAGMATIC_LIVECASINO', alt: 'PRAGMATIC_LIVECASINO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/45.png',
        },
        {
            id: 3, name: 'Big Gaming', provider_name: 'BIGGAME', data_gameid: 'BIGGAME', alt: 'BIGGAME',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/35.png',
        },
        {
            id: 4, name: 'Dream Gaming', provider_name: 'DREAM', data_gameid: 'DREAM', alt: 'DREAM',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/36.png',
        },
        {
            id: 5, name: 'WM Casino', provider_name: 'WM', data_gameid: 'WM', alt: 'WM',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/37.png',
        },
        {
            id: 6, name: 'BetgamesTV', provider_name: 'BETGAME', data_gameid: 'BETGAME', alt: 'BETGAME',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/38.png',
        },
        {
            id: 7, name: "Ebet", provider_name: 'EBET', data_gameid: 'EBET', alt: "EBET",
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/39.png',
        },
        {
            id: 8, name: 'AllBet', provider_name: 'ALLBET', data_gameid: 'ALLBET', alt: 'ALLBET',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/40.png',
        },
        {
            id: 9, name: 'Asia Gaming AG', provider_name: 'AGGAME', data_gameid: 'AGGAME', alt: 'AGGAME',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/41.png',
        },
        {
            id: 10, name: 'Pretty Gaming', provider_name: 'PRETTY', data_gameid: 'PRETTY', alt: 'PRETTY',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/42.png',
        },
        {
            id: 11, name: "SA Gaming", provider_name: 'SAGAME', data_gameid: 'SAGAME', alt: "SAGAME",
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/43.png',
        },
        {
            id: 12, name: 'Xtreme Gaming', provider_name: 'XTREME', data_gameid: 'XTREME', alt: 'XTREME',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/live+casino-20230627T092945Z-001/live+casino/44.png',
        },
    ]

    const settings = {
        className: "center",
        centerPadding: "100px",
        infinite: true,
        slidesToShow: 4,
        rows: 3,
        speed: 100,
        // slidesPerRow: 2,
        swipeToSlide: true,
        nextArrow: <NextIcon />,
        prevArrow: <PrevIcon />,
        afterChange: (index) => {
            setProgressWidth((100 / 5) * (index + 1));
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 4,
                    centerMode: true,
                    speed: 1000,
                    centerPadding: "600px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 4,
                    centerMode: true,
                    speed: 1000,
                    centerPadding: "600px",
                },
            },

            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 4,
                    slidesPerRow: 1,
                    rows: 3,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "400px",
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    rows: 2,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "580px",
                },
            },
            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    swipeToSlide: true,
                    rows: 3,
                    speed: 300,
                    centerPadding: "575px",
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 1000,
                    centerPadding: "350px",
                },
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "680px",
                },
            },
        ],
    };

    const settingLive = {
        className: "center",
        centerPadding: "60px",
        slidesToShow: 3,
        rows: 2,
        speed: 500,
        slidesPerRow: 2,
        nextArrow: <NextIconL />,
        prevArrow: <PrevIconL />,
        afterChange: (index) => {
            setProgressWidth((100 / 5) * (index + 1));
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "680px",
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
                breakpoint: 390,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 1000,
                    centerPadding: "690px",
                },
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 1000,
                    centerPadding: "560px",
                },
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "685px",
                },
            },
            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "680px",
                },
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "680px",
                },
            },
        ],
    };

    const settingTrading = {
        className: "center",
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 150,
        slidesPerRow: 6,

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
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 1000,
                    centerPadding: "690px",
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 1000,
                    centerPadding: "720px",
                },
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "690px",
                },
            },
            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "600px",
                },
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "480px",
                },
            },
        ],
    };

    return (
        <>
            {/*  <div className="popular-game features-game posRel mgt45">
                <div className="v-exclusive  game vGameList mgt45">
                    <div className="list">
                        <Slider {...settingsgeat}>
                            {specialgame.map((row) => (
                                <div key={row.name} className="box">
                                    <div className="boxGame">
                                        <div className="card-image"
                                            role="img" alt="" style={{
                                                backgroundImage: `url(${row.img})`,
                                                transform: "scale(1)"
                                            }}>
                                        </div>
                                        <img className='shadowImage' src={row.img} alt='' style={{
                                            cursor: 'pointer',
                                            transform: "scale(1)"
                                        }} />
                                    </div>

                                    <span className="name">
                                        <span>{row.name}</span>
                                    </span>
                                    <div className="provider-name">{row.name}</div>
                                    <div className="box-play">
                                        <div className="button-play boxGoPlay" data-gameid={row.providerCode} data-name={row.name}
                                            data-pid="191" >เล่น</div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>*/}

            <div className="popular-game features-game posRel mgt45">
                <div className="vp-title testdataV addfont displaycamp">ค่ายเกมทั้งหมด</div>
                <div className="v-exclusive game mgt25">
                    <div className="list">
                        <Slider {...settings}>
                            {populargame.map((row) => (
                                <div key={row.id}>
                                    <div className="boxGame">
                                        <div className="box shadowImage">
                                            <div className="image lazy"
                                                role="img" alt="" style={{
                                                    backgroundImage: `url(${row.img})`,
                                                }}></div>

                                            <div className="provider-name">{row.name}</div>
                                            <div className="box-play">
                                                <div className="button-play boxGoPlay" data-gameid={row.id} data-name={row.name}
                                                    data-pid="191" onClick={() => SeeGameCamp(row.data_gameid)}>เข้าดูเกม</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                        {/* <Swiper
                            slidesPerView={2}
                            spaceBetween={5}
                         
                            grid={{
                                rows: 2,
                            }}
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
                                    slidesPerView: 5,
                                    spaceBetween: 5,
                                    grid: {
                                        rows: 5,
                                    }
                                }
                            }}

                            modules={[Pagination, Navigation]}
                            className="mySwiper2"
                        >
                            {populargame.map((row) => (
                                <SwiperSlide>
                                    <div key={row.id}>
                                        <div className="boxGame">
                                            <div className="box shadowImage">
                                                <div className="image lazy"
                                                    role="img" alt="" style={{
                                                        backgroundImage: `url(${row.img})`,
                                                    }}></div>

                                                <div className="provider-name">{row.name}</div>
                                                <div className="box-play">
                                                    <div className="button-play boxGoPlay" data-gameid={row.id} data-name={row.name}
                                                        data-pid="191" onClick={() => SeeGameCamp(row.data_gameid)}>เข้าดูเกม</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                    </div>
                </div>
            </div>
        </>
    );
}

const PrevIcon = ({ onClick }) => {
    return (
        <div>
            <div className="testdata addfont">ค่ายเกมทั้งหมด</div>
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

/*
const PrevIconV = ({ onClick }) => {
    return (
        <div>
            <div className="testdata addfont">เกมติดอันดับ</div>
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
*/
const NextIconV = ({ onClick }) => {
    return (
        <div className="exclusive-nextTs">
            <div className="slick-icons">
                <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
            </div>
        </div>
    );
};

const PrevIconL = ({ onClick }) => {
    return (
        <div>
            <div className="testdata addfont">LIVE CASINO</div>
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

const NextIconL = ({ onClick }) => {
    return (
        <div className="exclusive-nextTs">
            <div className="slick-icons">
                <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
            </div>
        </div>
    );
};

export default WinGame;