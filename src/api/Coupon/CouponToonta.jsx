import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./CouponToonta.css";
import "./dialogcssCouponToonta.css";
import cartoon from "../../img/imgDiralog.png";
import imgwomen from "../../img/1.png"
import imgpanpa from "../../img/icon/cartoon05.webp"
import imgpanpaII from "../../img/10.png"
import circle1 from "../../img/circle2.png"
import circle2 from "../../img/circle1.png"
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import NavicationBar from "../../view/NavicationBar/navicationbar";
import { Link } from "react-router-dom";

const CouponToonta = () => {
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);
  const user = localStorage.getItem("user");
  const [open, setOpen] = React.useState(false);
  const [openlog, setOpenlog] = React.useState(false);
  const [openlogsuncent, setopenlogsuncent] = React.useState(false);
  const [logResetError, setlogResetError] = useState(false);

  const handleSubmit = async () => {
    if (passwordConfirm !== '') {
      try {
        const response = await axios.post("post/GetCouponMember", {
          couponpassword: passwordConfirm,
          password_coupon: passwordConfirm,
          username: user,
        });
        console.log(response.data.message);
        if (response.data.message === "คุณรับคูปองสำเร็จ") {
          setopenlogsuncent(true)

        } else {
          setlogResetError(true);
        }
      } catch (err) {
        setShowPopup(!showPopupA);
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
      }
    } else {
      setlogResetError(true);
    }
  }
  const handleSubmitResetPassword = () => {
    setOpen(true);
  };

  const PasswordChangedSuccessfully = () => {
    window.location.href = "/Home";
  };

  const submitResetPassword = () => {
    handleSubmit();
    setOpen(false);
  }

  const succentConpon = () => {
    setopenlogsuncent(false);
  }

  const handleClose = () => {
    setOpen(false);
    setlogResetError(false);
    setOpenlog(false);
  };

  return (
    <>
      {open && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันใช้งานคูปอง</p>
                <br />
                <h3 className="detailDialog font">คุณต้องการใช้งานคูปองนี้ใช่หรือไม่</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={submitResetPassword}>
                  ยืนยัน
                </button>
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {openlogsuncent && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน</p>
                <br />
                <h3 className="detailDialog font">คุณรับคูปองสำเร็จ</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={succentConpon}>
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {logResetError && (
        <div className="overlayMoney">
          <div className="imgMoneyCartoon">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน การใช้งานคูปอง</p>
                <br />
                <h3 className="detailDialog font">คุณกรอกคูปองไม่ถูกต้อง กรุณาตรวจคูปองและลองใหมอีกครั้ง</h3>
                <div className="btnContainerMoney">
                  <button className="btnPrimaryMoney" onClick={handleClose}>
                    ตกลง
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <Headers />
      </div>
      <div className="main-AddWitdraw">
        <div className="wrapperCoupon">
          <div className="form-containerWitdraw">
            <div className="form-innerCoupon">
              <form action="#" className="login">
                <div className="fieldDataCoupon font textinputWitdraw ">
                  <p className="textTitleWitdraw font">รหัสคูปอง</p>
                  <div className="wrapInputWitdraw ">
                    <input
                      type="text"
                      placeholder="กรุณายืนยันรหัสผ่าน"
                      value={passwordConfirm}
                      onChange={(e) => setpasswordConfirm(e.target.value)}
                      required
                      className="input-with-iconReposit colorFontWindarw font"
                    />
                  </div>
                </div>
                <div className="fieldReset btnsubmitCoupon font">
                  <input type="submitCoupon" defaultValue="เติมคูปอง" onClick={() => handleSubmitResetPassword()} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="displayFooterWitdraw">
          <MenuDown />
          <div className="section-footer mid-footer">
            <div className="section-footer-inner">
              <Allgamecamps />
            </div>
          </div>
          <Footer />
        </div>
        <div className="positionNav">
          <NavicationBar />
        </div>

        <div className="imgWayWitdraw">
          <img className="scaltimgWitdraw " src={imgwomen} id="wel-img-id" alt="" />

          <div className="WitdrawimgShadowCircleI">
            <img className="scaltimgWitdrawCircle" src={circle1} alt="" />
          </div>

          <div className="WitdrawimgShadowCircleII">
            <img className="scaltimgWitdrawCircle" src={circle2} alt="" />
          </div>

          <div className="WitdrawimgShadowCircleV">
            <img className="scaltimgWitdrawCircle" src={circle1} alt="" />
          </div>

          <div className="WitdrawimgShadowCircleVI">
            <img className="scaltimgWitdrawCircle" src={circle1} alt="" />
          </div>


          <img className="scaltimgWitdrawCircleIII" src={imgpanpa} alt="" />

          <img className="scaltimgWitdrawCircleIIII" src={imgpanpaII} alt="" />

        </div>
      </div>
    </>
  );
};
export default CouponToonta;
