import React, { useState, useEffect } from 'react';
import './Login.css'
import './pangHome/Modal.css'
import nft from "../img/toonta.png";
import nftLogin from "./pangHome/nft.jpg";
import th from "../img/lang/th.svg";
import axios from '../api/axios';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Menu, MenuItem, Button, AppBar } from '@mui/material';
import { BsPersonFill, BsCreditCardFill, BsPersonCircle } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

function HeadersII() {
    const [username, setUser] = useState("");
    const [password, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [showPopupA, setShowPopup] = useState(false);
    const token = localStorage.getItem("token");
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [data, setData] = useState([])
    const [dataCredit, setCredit] = useState('')

    useEffect(() => {
        if (token) {
            if (data.length === 0) {
                axios.post("/post/token", '', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => {
                        axios.get(`list_user/${response.data.data.id}`)
                            .then((response) => {
                                setData(response.data.data[0]);
                                const formattedNumber = response.data.data[0].credit.toLocaleString('en-US');
                                setCredit(formattedNumber)
                                localStorage.setItem("user", response.data.data[0].phonenumber);
                            })
                            .catch(error => {
                                console.log('error', error);
                            });
                    })
                    .catch(error => {
                        localStorage.removeItem("token")
                        window.location.href = "/";
                        console.log('error', error)
                    }
                    );
            }
        }

    }, [username, password])

    const handleSubmit = () => {
        window.location.href = `/Login`;
    };

    const handleRegiter = () => {
        window.location.href = `/Register`;
    };
    const style = {
        color: 'red',
    };

    const togglePopup = () => { // ตกลงแก้ไข
        setShowPopup(!showPopupA);
    };

    const goDeposit = () => {
        window.location.href = `/Deposit`;
    }

    const gowithdraw = () => {
        window.location.href = `/Witdraw`;
    }

    const goDialogWithdrawMoney = () => {
        setShowPopup(!showPopupA);
    }

    const goDialog = () => {
        setShowPopup(!showPopupA);
    }

    const logout = () => {
        axios.put("/post/logoutMember", { memberID: data.id },)
            .then(response => {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                window.location.href = "/";
            })
            .catch(error => console.log('error', error));
    }

    const h3Style = {
        color: 'white',
        display: 'inline-block',
        marginRight: '10px',
    };

    const Style = {
        color: 'white',
        display: 'inline-block',
        marginRight: '10px',
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <header>
                {showPopupA && (
                    <div className="overlay">
                        <div className="modalContainer">
                            <img src={nftLogin} alt="/" />
                            <div className="modalRight">
                                <div className="content">
                                    <p style={style}>Username หรือ Password ผิด</p>
                                    <br />
                                    <h3>กรุณากรอก</h3>
                                    <h3>username และ Passwordใหม่</h3>
                                    <h3>หรือถ้าคุณยังไม่เป็นสมาชิก กรุณาลงทะเบียน</h3>
                                </div>
                                <div className="btnContainer">
                                    <button className="btnPrimary" onClick={togglePopup}>
                                        ตกลง
                                    </button>

                                    <button className="btnPrimary" onClick={togglePopup}>
                                        ออก
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showPopupA && (
                    <div className="overlay">
                        <div className="modalContainer">
                            <img src={nftLogin} alt="/" />
                            <div className="modalRight">
                                <div className="content">
                                    <p style={style}>Username หรือ Password ผิด</p>
                                    <br />
                                    <h3>กรุณากรอก</h3>
                                    <h3>username และ Passwordใหม่</h3>
                                    <h3>หรือถ้าคุณยังไม่เป็นสมาชิก กรุณาลงทะเบียน</h3>
                                </div>
                                <div className="btnContainer">
                                    <button className="btnPrimary" onClick={togglePopup}>
                                        ตกลง
                                    </button>

                                    <button className="btnPrimary" onClick={togglePopup}>
                                        ออก
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showPopupA && (
                    <div className="overlay">
                        <div className="modalContainer">
                            <img src={nftLogin} alt="/" />
                            <div className="modalRight">
                                <div className="content">
                                    <p style={style}>Username หรือ Password ผิด</p>
                                    <br />
                                    <h3>กรุณากรอก</h3>
                                    <h3>username และ Passwordใหม่</h3>
                                    <h3>หรือถ้าคุณยังไม่เป็นสมาชิก กรุณาลงทะเบียน</h3>
                                </div>
                                <div className="btnContainer">
                                    <button className="btnPrimary" onClick={togglePopup}>
                                        ตกลง
                                    </button>

                                    <button className="btnPrimary" onClick={togglePopup}>
                                        ออก
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <nav>
                    <div className='topBarDiv'>
                        <div className="topBar-container">
                            <div className="topBar-left">
                                <div id="btnSideBar" className="m-dev positionSideBar">
                                    <i className="fa-solid"></i>
                                </div>
                                <div className="controlLogoII">
                                    <img src={nft} alt="logo" />
                                </div>
                                <div className="topbar-menu">
                                    <div className="topNavBarMenu">
                                        <div className="topNavBar-link topNavBar-linkMB">

                                            <ul className="dropdown-mainNav">
                                                <li>
                                                    <a className="box active" data-type="home" data-v="home" href="/Home">
                                                        <span className="icon-home"></span>
                                                        <span className='addfont' style={{ color: '#FFFFFF' }}>หน้าแรก</span>
                                                    </a>
                                                </li>
                                                <li><a className="box addfont" data-type="slot" data-v="game" data-name="สล็อต">
                                                    <span className="icon-slot"></span>
                                                    <span className='addfont' style={{ color: '#FFFFFF' }}>สล็อต</span>
                                                </a></li>
                                                <li><a className="box addfont" data-type="card" data-v="game" data-name="การ์ด">
                                                    <span className="icon-card"></span>
                                                    <span className='addfont' style={{ color: '#FFFFFF' }}>การ์ด</span>
                                                </a></li>
                                                <li><a className="box addfont" data-type="fish" data-v="game" data-name="เกมส์ยิงปลา" >
                                                    <span className="icon-fish"></span>
                                                    <span className='addfont' style={{ color: '#FFFFFF' }}>เกมส์ยิงปลา</span>
                                                </a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {<div className="headers-right">
                                <form className="top-login-form d-dev" noValidate="novalidate">
                                    <div className="menuItem">
                                        <div className="topbarButtons-holder">
                                            <div className="mbtnLoginTop button button-login" onClick={handleSubmit}>ลงชื่อเข้าใช้</div>
                                            <div className="mbtnLoginTop button button-signup" onClick={handleRegiter}>ลงทะเบียน</div>
                                        </div>

                                    </div>
                                </form>
                            </div>}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}


export default HeadersII;