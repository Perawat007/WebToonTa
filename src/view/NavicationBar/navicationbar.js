import React, { useRef, useState, useEffect, useContext } from "react";
import "./navicationcss.css";
import { BsCoin, BsBank2 } from "react-icons/bs";
import iconHome from '../../img/icon_bar/Home.png'
import iconPromotion from '../../img/icon_bar/Promotion.png'
import iconFinhe from '../../img/icon_bar/Finhe.png'
import iconProFile from '../../img/icon_bar/DataProfile.png'
const NavicationBar = () => {

    return (
        <>
            <nav className="navigation-bar">
                <ul className="list-items">
                    <span className="pointer"></span>
                    <li className="item active">
                        <a className="link" href="/Home">
                            <i className=" fa-2x">
                                <img
                                    src={iconHome}
                                    alt=""
                                    className="imgIcon"
                                />
                            </i>
                            <p className="textnavigattionbar font">หน้าหลัก</p>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="/PromotionShow">
                            <i className="fa-2x">
                                <img
                                    src={iconPromotion}
                                    alt=""
                                    className="imgIcon"
                                />
                            </i>
                            <p className="textnavigattionbar font">โปรโมชั่น</p>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="/Deposit">
                            <i className="fa-2x">
                                <img
                                    src={iconFinhe}
                                    alt=""
                                    className="imgIcon"
                                />
                            </i>
                            <p className="textnavigattionbar font">ฝากเงิน</p>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#">
                            <i className="fa-2x">
                                <img
                                    src={iconProFile}
                                    alt=""
                                    className="imgIcon"
                                />
                            </i>
                            <p className="textnavigattionbar font">ข้อมูลส่วนตัว</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};
export default NavicationBar;
