import React, { useState, useEffect } from "react";
import "./HomePang/Login.css";
import "./pangHome/Modal.css";
import "./header.css";
import nft from "../img/toonta.png";
import nftLogin from "./pangHome/nft.jpg";
import th from "../img/lang/th.svg";
import axios from "../api/axios";
import { BsCreditCardFill } from "react-icons/bs";
import DataUser from "../api/DataUser/DataUser";
import $ from "jquery";

import imgbronze from "../img/ver.2-20230915T140421Z-001/icon_bronze.png";
import imgdaimond from "../img/ver.2-20230915T140421Z-001/icon_daimond.png";
import imggold from "../img/ver.2-20230915T140421Z-001/icon_gold.png";
import imgnew from "../img/ver.2-20230915T140421Z-001/icon_new.png";
import imgsilver from "../img/ver.2-20230915T140421Z-001/icon_silver.png";
import imgcoin from "../img/coinimg.png";
import setting from "../img/icon/setting.png"
import iconWitdarw from "../img/icon_bar/Windraw.png"
import iconDeposit from "../img/icon_bar/Deposit.png"
import imgLogout from "../img/icon_bar/logout.png"

import imgbronzeV2 from "../img/ver.2-20230915T140421Z-001/ver.2/icon_bronze.png";
import imgdaimondV2 from "../img/ver.2-20230915T140421Z-001/ver.2/icon_daimond.png";
import imggoldV2 from "../img/ver.2-20230915T140421Z-001/ver.2/icon_gold.png";
import imgnewV2 from "../img/ver.2-20230915T140421Z-001/ver.2/icon_new.png";
import imgsilverV2 from "../img/ver.2-20230915T140421Z-001/ver.2/icon_silver.png";

function HeadersII() {
    const [username, setUser] = useState("");
    const [password, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [imgRank, setimgRank] = useState();
    const [rankuser, setrankusers] = useState('');
    const [showPopupA, setShowPopup] = useState(false);
    const [showPopupDataUser, setshowPopupDataUser] = useState(false);
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const credit = localStorage.getItem("credit");
    const pages = ["Products", "Pricing", "Blog"];
    const settings = ["Profile", "Account", "Dashboard", "Logout"];
    const [data, setData] = useState([]);
    const [dataCredit, setCredit] = useState("");
    let test = false;

    function animation() {
        $(".nav-switch").on("click", function (event) {
            test = true;
            $(".main-menu").slideToggle(100);
            //event.preventDefault();
        });
    }
    
    function sliderMenu() { }
    useEffect(() => {
        animation();
        sliderMenu();

        if (token) {
            if (data.length === 0) {
                axios
                    .post("/post/token", "", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    .then((response) => {
                        axios
                            .get(`list_user/${response.data.data.id}`)
                            .then((response) => {
                                setData(response.data.data[0]);
                                const rounded = Math.round(response.data.data[0].credit);        
                                const formattedNumber = rounded.toLocaleString("en-US");
                                setCredit(formattedNumber);                            
                                localStorage.setItem("user", response.data.data[0].phonenumber);
                                localStorage.setItem("credit", formattedNumber)
                                localStorage.setItem("id", response.data.data[0].id)
                                localStorage.setItem("rank", response.data.data[0].groupmember)
                                localStorage.setItem("%rootTroot%", response.data.data[0].turnover)
                                //console.log( response.data.data[0]);
                                setrankusers(response.data.data[0].groupmember);
                                switch (response.data.data[0].groupmember) {
                                    case "Bronze":
                                        setimgRank(imgbronzeV2)
                                        break;
                                    case "Silver":
                                        setimgRank(imgsilverV2)
                                        break;
                                    case "Gold":
                                        setimgRank(imggoldV2)
                                        break;
                                    case "Daimond":
                                        setimgRank(imgdaimondV2)
                                        break;
                                    case "NewMember":
                                        setimgRank(imgnew)
                                        break;
                                    default:
                                        setimgRank(imgnew)
                                        break;
                                }
                            })
                            .catch((error) => {
                                console.log("error", error);
                            });
                    })
                    .catch((error) => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        localStorage.removeItem("credit");
                        localStorage.removeItem("%rootTroot%");
                        window.location.href = "/";
                        console.log("error", error);
                    });
            }
        }
    }, [username, password]);

    const handleSubmit = () => {
        window.location.href = `/Login`;
    };

    const handleRegiter = () => {
        window.location.href = `/Register`;
    };
    const handleDataUser = () => {
        window.location.href = `/DataUser`;
    };
    const style = {
        color: "red",
    };

    const togglePopup = () => {
        // ตกลงแก้ไข
        setShowPopup(!showPopupA);
        setshowPopupDataUser(!showPopupA);
    };

    const goDeposit = () => {
        window.location.href = `/Deposit`;
    };

    const gowithdraw = () => {
        window.location.href = `/Witdraw`;
    };

    const goDialogDataUser = () => {
        setshowPopupDataUser(!showPopupA);
    };

    const offDialogDataUser = () => {
        setshowPopupDataUser(!showPopupDataUser);
    };

    const goDialog = () => {
        setShowPopup(!showPopupA);
    };

    const logout = () => {
        axios
            .put("/post/logoutMember", { memberID: data.id })
            .then((response) => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.removeItem("credit");
                window.location.href = "/";
            })
            .catch((error) => console.log("error", error));
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const SeeGameCamp = (codeGame) => {
        window.location.href = `Game/${codeGame}`;
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
            </header>

            <header>
                {showPopupDataUser && (
                    <div className="overlayHome">
                        <div className="modalContainerDataProfile">
                            <div className="modalData">
                                <div className="contentData">
                                    <DataUser />
                                </div>
                                <div className="btnContainerDataUsers">
                                    <button className="btnPrimaryData font" onClick={offDialogDataUser}>
                                        ออก
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <div>
                {(() => {
                    if (token) {
                        return (
                            <>
                                <header className="header-section">
                                    <div className="containerHeader">
                                        <a className="site-logo" href="/Home">
                                            <img src={nft} alt="logo" />
                                        </a>
                                        <div className="nav-switch">
                                            {/* <i className="fa fa-bars"></i> */}
                                            <div className="user-panelthaiset">
                                                <div>
                                                    <img src={setting} alt="th" className="imgborder" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="user-panel">
                                            <div className="button button-login">
                                                <div
                                                    className="font"
                                                    onClick={logout}
                                                    style={{
                                                        display: "inline-block",
                                                    }}
                                                >
                                                    ออกจากระบบ

                                                </div>
                                                <div
                                                    style={{
                                                        color: "white",
                                                        display: "inline-block",
                                                    }}
                                                    className=" font"
                                                >
                                                    <div className="user-panelthaiRank">
                                                        <div>
                                                            <img src={imgLogout} alt="th" className="imgborder" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="user-panelthai">
                                            <div>
                                                <img src={th} alt="th" className="imgborder" />
                                            </div>
                                        </div>
                                        <div className="user-panel">
                                            <div
                                                className="mbtnLoginTop button button-login font"
                                                onClick={goDialogDataUser}
                                            >
                                                ข้อมูลส่วนตัว
                                            </div>
                                        </div>

                                        <div className="user-panel">
                                            {/* <div
                                                className="mbtnLoginTop button button-witdarw font"
                                                onClick={gowithdraw}
                                            >
                                                ถอนเงิน
                                            </div> */}
                                            <div className="button  button-witdarw">
                                                <div
                                                    className="font"
                                                    onClick={gowithdraw}
                                                    style={{
                                                        display: "inline-block",
                                                    }}
                                                >
                                                    ถอนเงิน

                                                </div>
                                                <div
                                                    style={{
                                                        color: "white",
                                                        display: "inline-block",
                                                    }}
                                                    className=" font"
                                                >
                                                    <div className="user-panelthaiRank">
                                                        <div>
                                                            <img src={iconWitdarw} alt="th" className="imgborder" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="user-panel">
                                            {/* <div
                                                className="mbtnLoginTop button button-Deposit font"
                                                onClick={goDeposit}
                                            >
                                                เติมเงิน
                                            </div> */}

                                            <div className="button  button-Deposit">
                                                <div
                                                    className="font"
                                                    onClick={goDeposit}
                                                    style={{
                                                        display: "inline-block",
                                                    }}
                                                >
                                                    เติมเงิน

                                                </div>
                                                <div
                                                    style={{
                                                        color: "white",
                                                        display: "inline-block",
                                                    }}
                                                    className=" font"
                                                >
                                                    <div className="user-panelthaiRank">
                                                        <div>
                                                            <img src={iconDeposit} alt="th" className="imgborder"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="controlHeaders usernameolne">
                                            <div>
                                                <div
                                                    style={{
                                                        color: "#E7CF27",
                                                        display: "inline-block",
                                                        marginRight: "5px",
                                                        scale: "100%",
                                                    }}
                                                >
                                                    <div className="user-panelthaiRank">
                                                        <div>
                                                            <img src={imgRank} alt="th" className="imgborder"  style={{width:'78%'}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        color: "white",
                                                        display: "inline-block",
                                                        transform: `translate(${0}px, ${3}px)`,
                                                    }}
                                                    className="font"
                                                >
                                                    {user}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="controlHeaders marginData">
                                            <div>
                                                <div
                                                    style={{
                                                        color: "#E7CF27",
                                                        display: "inline-block",
                                                        marginRight: "5px",
                                                        scale: "100%",
                                                    }}
                                                >
                                                    <div className="user-panelthaiRank">
                                                        <div>
                                                            <img src={imgcoin} alt="th" className="imgborder" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: "inline-block" }} className="textcoinHeaders font">
                                                    {dataCredit}
                                                </div>
                                            </div>
                                        </div>

                                        <nav className="main-menu">
                                            <div className="sidebar-menu s-div" id="sidebar-menu">
                                                <div className="sidebar-header">
                                                    <img
                                                        className="logo"
                                                        src={nft}
                                                        alt="logo"
                                                    />
                                                </div>
                                                <h4 className="texttitle">{user}</h4>
                                                <br />
                                                <div>
                                                    <h5 className="texttitle font" style={{}}>ระดับ : {rankuser}</h5>
                                                </div>
                                                <br />
                                                <div className="button-signup menuslider">
                                                    <div style={{ display: "inline-block" }}>
                                                        <div
                                                            style={{
                                                                color: "#E7CF27",
                                                                display: "inline-block",
                                                                marginRight: "15px",
                                                                transform: `translate(${0}px, ${-3}px)`,
                                                                scale: "150%",
                                                            }}
                                                        >
                                                            <BsCreditCardFill />
                                                        </div>
                                                        <div
                                                            style={{
                                                                color: "white",
                                                                display: "inline-block",
                                                            }}
                                                        >
                                                            {dataCredit}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="sidebar-body">
                                                    <div className="sidebar-list">
                                                        <a className="box" href="/Home">
                                                            <span className="icon icon-home"></span>
                                                            <span>บ้าน</span>
                                                        </a>
                                                        <a
                                                            className="box"
                                                            data-type="slot"
                                                            data-v="game"
                                                            data-name="สล็อต"
                                                            href="#"
                                                        >
                                                            <span className="icon-slot"></span>
                                                            <span onClick={goDialogDataUser}>ข้อมูลส่วนตัว</span>
                                                        </a>

                                                        <a
                                                            className="box"
                                                            data-type="slot"
                                                            data-v="game"
                                                            data-name="สล็อต"
                                                            href="/Gameslot"
                                                        >
                                                            <span className="icon-slot"></span>
                                                            <span>สล็อต</span>
                                                        </a>
                                                        <a
                                                            className="box"
                                                            data-type="card"
                                                            data-v="game"
                                                            data-name="การ์ด"
                                                            href="/Gametable"
                                                        >
                                                            <span className="icon-card"></span>
                                                            <span>โต๊ะเกม</span>
                                                        </a>
                                                        <a
                                                            className="box"
                                                            data-type="fish"
                                                            data-v="game"
                                                            data-name="เกมส์ยิงปลา"
                                                            href="/Gamefishing"
                                                        >
                                                            <span className="icon-fish"></span>
                                                            <span>เกมส์ยิงปลา</span>
                                                        </a>
                                                        <a
                                                            className="box"
                                                            data-type="fish"
                                                            data-v="game"
                                                            data-name="เกมส์ยิงปลา"
                                                            href="/Gameskill"
                                                        >
                                                            <span className="icon-fish"></span>
                                                            <span>สกิลเกม</span>
                                                        </a>
                                                        <a className="box" href="/PromotionShow">
                                                            <span className="icon icon-promotion"></span>
                                                            <span>โปรโมชั่น</span>
                                                        </a>

                                                        <a className="box" href="#">
                                                            <i className="fa-regular fa-user-headset"></i>
                                                            <span>ติดต่อพวกเรา</span>
                                                        </a>
                                                        <a className="box">
                                                            <i className="fa-regular fa-user-headset"></i>
                                                            <span onClick={logout}>ออกจากระบบ</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="offMenu">
                                                <li>
                                                    <a className="font" href="/Gameslot">
                                                        สล็อต
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="font" href="/Gamefishing">
                                                        ตกปลา
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="font" href="/Gameskill">
                                                        สกิลเกม
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="font" href="/Gametable">
                                                        โต๊ะเกม
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="font" href="/PromotionShow">
                                                        โปรโมชั่น
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </header>
                            </>
                        );
                    } else {
                        return (
                            <>
                                <header className="header-section">
                                    <div className="containerHeader">
                                        <a className="site-logo" href="/Home">
                                            <img src={nft} alt="logo" />
                                        </a>
                                        <div className="nav-switch">
                                            {/* <i className="fa fa-bars"></i> */}
                                            <div className="user-panelthaiset">
                                                <div>
                                                    <img src={setting} alt="th" className="fa imgborder" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="user-panelthai">
                                            <div>
                                                <img src={th} alt="th" className="imgborder" />
                                            </div>
                                        </div>

                                        <div className="user-panel">
                                            {/* <a href="#" onClick={handleSubmit}>เข้าสู่ระบบ</a>  /  <a href="#">ลงทะเบียน</a> */}
                                            <div
                                                className="mbtnLoginTop button button-login"
                                                onClick={handleSubmit}
                                            >
                                                ลงชื่อเข้าใช้
                                            </div>
                                        </div>
                                        <div className="user-panel">
                                            <div
                                                className="mbtnLoginTop button button-signup"
                                                onClick={handleRegiter}
                                            >
                                                ลงทะเบียน
                                            </div>
                                        </div>

                                        <nav className="main-menu">
                                            <div className="sidebar-menu s-div" id="sidebar-menu">
                                                <div className="sidebar-header">
                                                    <img
                                                        className="logo"
                                                        src={nft}
                                                        alt="logo"
                                                    />
                                                </div>
                                                <div className="sidebar-body">
                                                    <div className="sidebar-list">
                                                        <a className="box" href="/Home">
                                                            <span className="icon icon-home"></span>
                                                            <span>หน้าหลัก</span>
                                                        </a>
                                                        <a
                                                            className="box"
                                                            data-type="slot"
                                                            data-v="game"
                                                            data-name="สล็อต"
                                                            href="/Gameslot"
                                                        >
                                                            <span className="icon-slot"></span>
                                                            <span>สล็อต</span>
                                                        </a>
                                                        <a
                                                            className="box"
                                                            data-type="card"
                                                            data-v="game"
                                                            data-name="การ์ด"
                                                            href="/Gameskill"
                                                        >
                                                            <span className="icon-card"></span>
                                                            <span>โต๊ะเกม</span>
                                                        </a>
                                                        <a
                                                            className="box"
                                                            data-type="fish"
                                                            data-v="game"
                                                            data-name="เกมส์ยิงปลา"
                                                            href="/Gamefishing"
                                                        >
                                                            <span className="icon-fish"></span>
                                                            <span>เกมส์ยิงปลา</span>
                                                        </a>
                                                        <a
                                                            className="box"
                                                            data-type="fish"
                                                            data-v="game"
                                                            data-name="เกมส์ยิงปลา"
                                                            href="/Gameskill"
                                                        >
                                                            <span className="icon-fish"></span>
                                                            <span>สกิลเกม</span>
                                                        </a>
                                                        <a className="box" href="/PromotionShow">
                                                            <span className="icon icon-promotion"></span>
                                                            <span>โปรโมชั่น</span>
                                                        </a>
                                                        <a className="box" href="#">
                                                            <i className="fa-regular fa-circle-info"></i>
                                                            <span>ศูนย์ข้อมูล</span>
                                                        </a>
                                                        <a className="box" href="#">
                                                            <i className="fa-regular fa-user-headset"></i>
                                                            <span>ติดต่อพวกเรา</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="offMenu">
                                                <li>
                                                    <a className="font" href="/Gameslot">
                                                        สล็อต
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="font" href="/Gamefishing">
                                                        ตกปลา
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="font" href="/Gameskill">
                                                        สกิลเกม
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="font" href="/Gametable">
                                                        โต๊ะเกม
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="font" href="/PromotionShow">
                                                        โปรโมชั่น
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </header>
                            </>
                        );
                    }
                })()}
            </div>
        </>
    );
}

export default HeadersII;
