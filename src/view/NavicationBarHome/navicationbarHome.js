import React, { useRef, useState, useEffect, useContext } from "react";
import "./navicationcss.css";
import { BsCoin, BsBank2 } from "react-icons/bs";

const NavicationBarHome = () => {

    return (
        <>
            <nav className="navigation-barHome">
                <ul className="list-items">
                    <span className="pointer"></span>
                    <li className="item active">
                        <a className="link" href="#">
                            <i className="fas fa-home fa-2x"></i>
                            <p className="textnavigattionbar font">หน้าหลัก</p>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#">
                            <i className="fas fa-search fa-2x"></i>
                            <p className="textnavigattionbar font">โปรโมชั่น</p>
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#">
                            <i className="fas fa-heart fa-2x"></i>
                            <p className="textnavigattionbar font">ฝากเงิน</p>
                        </a>
                    </li>
                    {/* <li className="item">
              <a className="link" href="#">
                <i className="fas fa-bell fa-2x"></i>
                <p className="textnavigattionbar font">แชทสด</p>
              </a>
            </li> */}
                    <li className="item">
                        <a className="link" href="#">
                            <i className="fas fa-user fa-2x"></i>
                            <p className="textnavigattionbar font">ข้อมูลส่วนตัว</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};
export default NavicationBarHome;
