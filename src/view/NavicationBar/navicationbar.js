import React, { useState } from "react";
import "./navicationcss.css";
import iconHome from '../../img/icon_bar/Home.png'
import iconPromotion from '../../img/icon_bar/Promotion.png'
import iconFinhe from '../../img/icon_bar/Finhe.png'
import iconProFile from '../../img/icon_bar/DataProfile.png'
import DataUser from "../../api/DataUser/DataUser";

import iconLogin from '../../img/icon_bar/login.png'
import iconline from '../../img/icon_bar/line.png'
import iconjoin from '../../img/icon_bar/join.png'
import icongift from '../../img/icon_bar/gift_1.png'

import iconDeposit from '../../img/icon_bar/loginsuceeat/ฝาก.png'
import iconWitdarw from '../../img/icon_bar/loginsuceeat/ถอน.png'
import iconlineLogin from '../../img/icon_bar/loginsuceeat/line.png'
import icongiftLogin from '../../img/icon_bar/loginsuceeat/gift_1.png'

const NavicationBar = () => {

    const [showPopupDataUser, setshowPopupDataUser] = useState(false);
    const token = localStorage.getItem("token");

    const goDialogDataUser = () => {
        setshowPopupDataUser(true);
    };

    const offDialogDataUser = () => {
        setshowPopupDataUser(!showPopupDataUser);
    };

    if (token) {
        return (
            <>
                <nav className="navigation-bar">
                    <ul className="list-items">
                        <span className="pointer"></span>
                        <li className="item">
                            <a className="link" href="#">
                                <i className="fa-2x">
                                    <img
                                        src={iconlineLogin}
                                        alt=""
                                        className="imgIcon"
                                    />
                                </i>
                                <p className="textnavigattionbar font">ไลน์</p>
                            </a>
                        </li>
                        <li className="item">
                            <a className="link" href="/PromotionShow" >
                                <i className="fa-2x">
                                    <img
                                        src={icongiftLogin}
                                        alt=""
                                        className="imgIcon"
                                    />
                                </i>
                                <p className="textnavigattionbar font">โปรโมชั่น</p>
                            </a>
                        </li>
                        <li className="item active">
                            <a className="link" href="/Deposit">
                                <i className=" fa-2x">
                                    <img
                                        src={iconDeposit}
                                        alt=""
                                        className="imgIcon"
                                    />
                                </i>
                                <p className="textnavigattionbar font">ฝาก</p>
                            </a>
                        </li>
                        <li className="item">
                            <a className="link" href="/Witdraw">
                                <i className="fa-2x">
                                    <img
                                        src={iconWitdarw}
                                        alt=""
                                        className="imgIcon"
                                    />
                                </i>
                                <p className="textnavigattionbar font">ถอน</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </>
        )
    } else {
        return (
            <>
                <nav className="navigation-bar">
                    <ul className="list-items">
                        <span className="pointer"></span>

                        <li className="item">
                            <a className="link" href="#">
                                <i className="fa-2x">
                                    <img
                                        src={iconline}
                                        alt=""
                                        className="imgIcon"
                                    />
                                </i>
                                <p className="textnavigattionbar font">ไลน์</p>
                            </a>
                        </li>
                        <li className="item" >
                            <a className="link" href="/PromotionShow">
                                <i className="fa-2x">
                                    <img
                                        src={icongift}
                                        alt=""
                                        className="imgIcon"
                                    />
                                </i>
                                <p className="textnavigattionbar font">โปรโมชั่น</p>
                            </a>
                        </li>
                        <li className="item active">
                            <a className="link" href="/Login">
                                <i className=" fa-2x">
                                    <img
                                        src={iconLogin}
                                        alt=""
                                        className="imgIcon"
                                    />
                                </i>
                                <p className="textnavigattionbar font">ล็อคอิน</p>
                            </a>
                        </li>
                        <li className="item">
                            <a className="link" href="/Register">
                                <i className="fa-2x">
                                    <img
                                        src={iconjoin}
                                        alt=""
                                        className="imgIcon"
                                    />
                                </i>
                                <p className="textnavigattionbar font">สมัคร</p>
                            </a>
                        </li>
                       
                    </ul>
                </nav>
            </>
        )
    }
};
export default NavicationBar;
