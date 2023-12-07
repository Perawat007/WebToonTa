import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../../api/axios";
import "./PromotionShow.css";
import cartoon from "../../img/imgDiralog.png";
import picpic from "../../img/banner2.jpg";
import imgMoney from "../../img/banner3.jpg"
import imgpanpa from "../../img/banner1.jpg"
import imgcartoon from "../../img/2.png"
import circle1 from "../../img/ver.2-20230915T140421Z-001/gift_1.png"
import circle2 from "../../img/ver.2-20230915T140421Z-001/gift_2.png"
import { Link } from "react-router-dom";
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import NavicationBar from "../../view/NavicationBar/navicationbar";
import PromotionPopup from "../../api/PromotionPopup/PromotionPopup";
const PromotionShow = () => {
  const [phoneNumber, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [ipAddress, setIp] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");
  const [activeTab, setActiveTab] = useState('ทั้งหมด');
  const [data, setData] = useState([]);
  const [showPopupDataUser, setshowPopupDataUser] = useState(false);
  const [dataPromotion, setdataPromotion] = useState();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  let browserName = "Unknown";
  useEffect(() => {
    axios.get("/post/getlistPromotion", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        //console.log(response);
        setData(response.data.data)
      })
      .catch((error) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        localStorage.removeItem("credit");
        window.location.href = "/";
        console.log("error", error);
      });
  }, []);

  const offPopup = () => {
    setshowPopupDataUser(!showPopupDataUser);
  }

  const OKPromotion = () => {
    //console.log(dataPromotion.id)
    localStorage.setItem("%rootProDataN%", dataPromotion.namepromotion)
    if (token) {
      window.location.href = `/DepositPromotion/${dataPromotion.id}`;
    } else {
      setShowPopup(!showPopupA)
    }
  }

  const OKLogin = () => {
    window.location.href = `/Login`;
  }

  const togglePopupShow = (dataPromo) => {
    setShowPopup(!showPopupA)
  };

  const togglePopup = (dataPromo) => {
    setshowPopupDataUser(!showPopupDataUser);
    setdataPromotion(dataPromo)
  };

  const PopupShowClone = () => {
    console.log('on');
    setshowPopupDataUser(!showPopupDataUser)
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
        <div className="overlayPopupShow">
          <div className="modalContainerLogin">
            <div className="imgLogin">
              <img src={cartoon} alt="/" />
            </div>
            <div className="modalRightLogin">
              <div className="contentLogin">
                <p className="titleDialogLogin font">กรุณา Login</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณาเข้าสู่ระบบเพื่อรับโปรโมชั่น
                </h3>
              </div>
              <div className="btnContainerLogin">
                <button className="btnPrimaryLogin font" onClick={OKLogin}>
                  เข้าสู่ระบบ
                </button>
                <button className="btnPrimaryLogin font" onClick={togglePopupShow}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <header>
        {showPopupDataUser && (
          <div className="overlayPromotion">
            <div className="modalContainerShowPromotion">
              <div className="modalData">
                <div className="contentData">
                  <PromotionPopup dataPromotion={dataPromotion} onClick={PopupShowClone} />

                  <div className="btnContainerDataCutomer">
                    <button className="custom-btnCutomer btn-Cutomer font" onClick={offPopup}>
                      <h6 style={{color : '#FFFFFF', display: 'inline-block'}}>พบปัญหา</h6>
                      <h6 style={{color : '#fcf700', display: 'inline-block', marginLeft: '10px'}}>ติดต่อฝ่ายบริการลูกค้า</h6>
                    </button>
                  </div>
                  <div className="btnContainerDataPromotion">
                    <button className="custom-btnPromotion btn-Promotion font" onClick={OKPromotion}>รับโปรโมชั่น</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <nav>
        <Headers />
      </nav>
      <div className="main-Promotion">
        <div className="wrapper">
          <div className="heant">
            <div className="textFramePromotion">
              <div className="imgContainer">
                <img className="imgGitIT" src={circle1} id="wel-img-id" alt="" />
                <img className="imgGitIIT" src={circle2} id="wel-img-id" alt="" />
              </div>
              <div className="title-textPromotion">
                <div className="font">โปรโมชั่น</div>
              </div>
            </div>
          </div>
          {/* <div className="tabs_wrap font">
            <ul>
              <li
                data-tabs="ทั้งหมด"
                className={activeTab === 'ทั้งหมด' ? 'active' : ''}
                onClick={() => handleTabClick('ทั้งหมด')}
              >
                ทั้งหมด
              </li>
              <li
                data-tabs="ฝาก"
                className={activeTab === 'ฝาก' ? 'active' : ''}
                onClick={() => handleTabClick('ฝาก')}
              >
                ฝาก
              </li>
              <li
                data-tabs="มีคืน"
                className={activeTab === 'มีคืน' ? 'active' : ''}
                onClick={() => handleTabClick('มีคืน')}
              >
                มีคืน
              </li>
              <li
                data-tabs="เทิร์นโอเวอร์"
                className={activeTab === 'เทิร์นโอเวอร์' ? 'active' : ''}
                onClick={() => handleTabClick('เทิร์นโอเวอร์')}
              >
                เทิร์นโอเวอร์
              </li>
            </ul>
          </div> */}
          <br />
          {(() => {
            switch (activeTab) {
              case 'ทั้งหมด':
                return <>
                  <div className="gamePromotion vGameList">
                    <div className="list">
                      {data.map((row) => (
                        <div key={row.id} className="box">
                          <div className="card-image"
                            role="img" alt="" style={{
                              backgroundImage: `url(${row.img})`,
                              transform: "scale(1)"
                            }}>
                          </div>
                          <img src={"https://dogzilla.live/images/" + row.filename} alt="" style={{
                            cursor: 'pointer',
                          }} />
                          {/* <div className="provider-name">{row.name}</div> */}
                          <div className="box-play">
                            <div className="button-play boxGoPlay"
                              data-pid="191" onClick={() => togglePopup(row)}>เข้าชม</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              case 'ฝาก':
                return <ul className="ulPromotion">
                  {data.map((row) => (
                    <div key={row.id}>
                      <li className="liPromotion">
                        <img className="settingImg" src={"https://dogzilla.live/images/" + row.filename} alt="" />
                        <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>{row.namepromotion}</h3>
                        <p className="font">{row.details}</p>
                      </li>
                    </div>
                  ))}
                </ul>
              case 'มีคืน':
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
              case 'เทิร์นโอเวอร์':
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
          <br />
          <br />
          <div className="promotionblock">
            <MenuDown />
            <div className="section-footer mid-footer d-dev">
              <div className="section-footer-inner">
                <Allgamecamps />
              </div>
            </div>
            <Footer />
          </div>
          <div className="positionNavpromotion">
            <NavicationBar />
          </div>
        </div>
      </div>
    </>
  );
};
export default PromotionShow;