import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../../api/axios";
import "./PromotionShow.css";
import logo from "../../img/toonta.png";
import rightLogin from "../../img/login.png";
import cartoon from "../../img/imgDiralog.png";
import picpic from "../../img/banner2.png";
import imgMoney from "../../img/banner3.png"
import imgpanpa from "../../img/banner1.png"
import imgcartoon from "../../img/2.png"
import circle1 from "../../img/circle1.png"
import circle2 from "../../img/circle2.png"
import { Link } from "react-router-dom";
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import NavicationBar from "../../view/NavicationBar/navicationbar";

const PromotionShow = () => {
  const [phoneNumber, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [ipAddress, setIp] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);

  const [activeTab, setActiveTab] = useState('ทั้งหมด');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  let browserName = "Unknown";
  useEffect(() => {
    // handleSubmit();
  }, [phoneNumber, password]);


  const togglePopup = () => {
    setShowPopup(!showPopupA);
  };

  const filterItems = () => {
    if (activeTab === 'ทั้งหมด') {
      return 'ทั้งหมด';
    } else if (activeTab === 'เกม') {
      return 'เกม';
    } else {
      return 'เติมเงิน';
    }
  };

  return (
    <>
      {showPopupA && (
        <div className="overlayLogin">
          <div className="modalContainerLogin">
            <div className="imgLogin">
              <img src={cartoon} alt="/" />
            </div>
            <div className="modalRightLogin">
              <div className="contentLogin">
                <p className="titleDialogLogin font">Username หรือ Password ไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณากรอกUsername หรือ Password ใหม่อีกครั้ง
                </h3>
              </div>
              <div className="btnContainerLogin">
                <button className="btnPrimaryLogin" onClick={togglePopup}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <nav id="topBar-holder" className="topBar-holder">
        <Headers />
      </nav>
      <div className="main-Promotion">

        <div className="wrapper">
          <div className="tabs_wrap font">
            <ul>
              <li
                data-tabs="ทั้งหมด"
                className={activeTab === 'ทั้งหมด' ? 'active' : ''}
                onClick={() => handleTabClick('ทั้งหมด')}
              >
                ทั้งหมด
              </li>
              <li
                data-tabs="เกม"
                className={activeTab === 'เกม' ? 'active' : ''}
                onClick={() => handleTabClick('เกม')}
              >
                เกม
              </li>
              <li
                data-tabs="เติมเงิน"
                className={activeTab === 'เติมเงิน' ? 'active' : ''}
                onClick={() => handleTabClick('เติมเงิน')}
              >
                เติมเงิน
              </li>
            </ul>
          </div>
        </div>

        <div className="listPromotion">
          <div className="containerPromotion">
            {(() => {
              switch (activeTab) {
                case 'ทั้งหมด':
                  return <ul className="ulPromotion">
                    <li className="liPromotion">
                      <img className="settingImg" src={picpic} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>ผู้เล่นใหม่</h3>
                      <p className="font">สมาชิกใหม่รับโบนัสต้อนรับพิเศษจากยอดเติมเงิน 30% จากยอดเติม พิเศษที่ ToonTa เท่านั้น!</p>
                    </li>

                    <li className="liPromotion">
                      <img src={imgMoney} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                      <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
                    </li>

                    <li className="liPromotion">
                      <img src={imgMoney} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                      <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
                    </li>
                  </ul>
                case 'เกม':
                  return <ul className="ulPromotion">
                    <li className="liPromotion">
                      <img src={imgMoney} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                      <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
                    </li>

                    <li className="liPromotion">
                      <img src={imgMoney} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                      <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
                    </li>

                    <li className="liPromotion">
                      <img className="settingImg" src={picpic} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>ผู้เล่นใหม่</h3>
                      <p className="font">สมาชิกใหม่รับโบนัสต้อนรับพิเศษจากยอดเติมเงิน 30% จากยอดเติม พิเศษที่ ToonTa เท่านั้น!</p>
                    </li>
                  </ul>
                case 'เติมเงิน':
                  return <ul className="ulPromotion">
                    <li className="liPromotion">
                      <img src={imgpanpa} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                      <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
                    </li>
                    <li className="liPromotion">
                      <img className="settingImg" src={picpic} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>ผู้เล่นใหม่</h3>
                      <p className="font">สมาชิกใหม่รับโบนัสต้อนรับพิเศษจากยอดเติมเงิน 30% จากยอดเติม พิเศษที่ ToonTa เท่านั้น!</p>
                    </li>
                    <li className="liPromotion">
                      <img src={imgMoney} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                      <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
                    </li>
                  </ul>
                default:
                  <ul className="ulPromotion">
                    <li className="liPromotion">
                      <img src={imgpanpa} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                      <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
                    </li>
                    <li className="liPromotion">
                      <img className="settingImg" src={picpic} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>ผู้เล่นใหม่</h3>
                      <p className="font">สมาชิกใหม่รับโบนัสต้อนรับพิเศษจากยอดเติมเงิน 30% จากยอดเติม พิเศษที่ ToonTa เท่านั้น!</p>
                    </li>
                    <li className="liPromotion">
                      <img src={imgMoney} alt="" />
                      <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                      <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
                    </li>
                  </ul>
              }
            })()}
          </div>
        </div>
        <div className="displayFooterLogin">
          <MenuDown />
          <div className="section-footer mid-footer d-dev">
            <div className="section-footer-inner">
              <Allgamecamps />
            </div>
          </div>
          <Footer />
        </div>
        <div className="positionNav">
          <NavicationBar />
        </div>
      </div>
    </>
  );
};
export default PromotionShow;