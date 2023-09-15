import React, { useRef, useState, useEffect, useContext } from "react";
import "./navicationcssHome.css";
import { BsCoin, BsBank2 } from "react-icons/bs";
import DataUser from "../../api/DataUser/DataUser";

const NavicationBarHome = () => {

    const [showPopupDataUser, setshowPopupDataUser] = useState(true);

    const goDialogDataUser = () => {
        setshowPopupDataUser(!showPopupDataUser);
    };

    const offDialogDataUser = () => {
        setshowPopupDataUser(!showPopupDataUser);
    };

    return (
        <>

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

            <nav className="navigation-barHome">
                <ul className="list-items">
                    <span className="pointer"></span>
                    <li className="item active">
                        <a className="link" href="/Home">
                            <i className="fas fa-home fa-2x"></i>
                            <p className="textnavigattionbarHome font">หน้าหลัก</p>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="/PromotionShow">
                            <i className="fas fa-search fa-2x"></i>
                            <p className="textnavigattionbarHome font">โปรโมชั่น</p>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="/Deposit">
                            <i className="fas fa-heart fa-2x"></i>
                            <p className="textnavigattionbarHome font">ฝากเงิน</p>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#">
                            <i className="fas fa-user fa-2x"></i>
                            <p className="textnavigattionbarHome font" onClick={goDialogDataUser}>ข้อมูลส่วนตัว</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};
export default NavicationBarHome;
