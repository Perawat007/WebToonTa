import * as React from 'react';
import axios from '../../api/axios';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.css';
import './dialogLoginGame.css'
import Typography from '@mui/material/Typography';
import { Box, Container, Pagination } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import PaginationJS from './Pagination';
import cartoon from '../../img/3.png'

function GamePlay() {
    const [items, setItems] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage, setPostsPerPage] = React.useState(18);
    const [GameValus, setValus] = React.useState(18);
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const [data, setData] = React.useState([])
    const [show, setShow] = React.useState(false);
    let valus = 0;

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

    React.useEffect(() => {
        if (token) {
            if (data.length === 0) {
                axios.post("/post/token", '', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => {
                        setData(response.data.data);
                    })
                    .catch(error => {
                        localStorage.removeItem("token")
                        localStorage.removeItem("user")
                        window.location.href = "/";
                        console.log('error', error)
                    }
                    );
            }
        }
        DataGet();
    }, [])

    const DataGet = () => {
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');

        axios.get(`listGame/${pathSegments[1]}`)
            .then((response) => {
                if (response.data.data.data.games.length <= 20) {
                    setValus(1500)
                }
                else if (response.data.data.data.games.length >= 100 && pathSegments[1] !== 'YGGDRASIL') {
                    setValus(1200)
                } else if (pathSegments[1] === 'YGGDRASIL') {
                    setValus(200)
                }
                setItems(response.data.data.data.games);
            })
            .catch(error => {
                console.log('error', error);
            });
    };
    const PlayGame = (codeGame) => {
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');

        if (data.phonenumber !== '' && data.phonenumber !== undefined) {
            axios.get(`seamlesslogIn/${codeGame}/${pathSegments[1]}/${data.phonenumber}`)
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
        } else {
            setShow(true);
        }
    }

    const BackPang = () => {
        window.location.href = `/`;
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = items.slice(firstPostIndex, lastPostIndex);

    const h4Style = {
        color : 'white',
        display: 'inline-block',
        cursor: 'pointer',
        marginRight: '10px',
    };

    const handleClose = () => {
        setShow(false);
    };

    const cilckLogin = () => {
        window.location.href = `/Login`;
    }

    return (
        <>
            {show && (
                <div className="overlayLoginGame">
                    <div className="imgLoginGame">
                        <img src={cartoon} alt="/" />
                    </div>
                    <div className="modalContainerLoginGame">
                        <div className="modalRightLoginGame">
                            <div className="contentLoginGame">
                                <p className="titleDialog font">คุณยังไม่ได้ Login</p>
                                <br />
                                <h3 className="detailDialog font">
                                    กรุณา Login เพื่อเข้าเล่นเกม
                                </h3>
                            </div>
                            <div className="btnContainerLoginGame">
                                <button className="btnPrimaryLoginGame font" onClick={cilckLogin}>
                                    ไปหน้า Login
                                </button>
                                <button className="btnPrimaryLoginGame font" onClick={handleClose}>
                                    ยกเลิก
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <React.Fragment>
            <div className="card-font">รายชื่อเกม</div>
                <Container maxWidth="xl" sx={{ p: 3 }}>
                    <Box display={'flex'}>
                        <Typography variant="h6">
                            <a style={h4Style} className='grount font' onClick={BackPang}>ย้อนกลับ</a>
                        </Typography>
                    </Box>
                    <br />
                    <div className=" game vGameList">
                        <div className="list">
                            {currentPosts.map((row) => (
                                <div key={row.name} className="box">
                                    <div className="card-image"
                                        role="img" alt="" style={{
                                            backgroundImage: `url(${row.img})`,
                                            transform: "scale(1)"
                                        }}>
                                    </div>
                                    <img src={row.img} alt='' style={{
                                        cursor: 'pointer',
                                    }} />
                                     <span className="name">
                                        <span>{row.name}</span>
                                    </span>
                                    {/* <div className="provider-name">{row.name}</div> */}
                                    <div className="box-play">
                                        <div className="button-play boxGoPlay" data-gameid={row.providerCode} data-name={row.name}
                                            data-pid="191" onClick={() => PlayGame(row.code)}>เล่น</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </React.Fragment>
            <PaginationJS
                totalPosts={items.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    );
}


export default GamePlay;