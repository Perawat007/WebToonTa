import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./Login.scss";
import "./Login.css";
import "./dialogcssLogin.css";
import cartoon from "../../img/imgDiralog.png";
import picpic from "../../img/picpic.png";
import imgMoney from "../../img/picpic.png"
import imgpanpa from "../../img/panda1.png"
import imgcartoon from "../../img/2.png"
import circle1 from "../../img/circle1.png"
import circle2 from "../../img/circle2.png"
import { Link } from "react-router-dom";
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import NavicationBar from "../../view/NavicationBar/navicationbar";
import { FaUnlockAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import imgDiralog from "../../img/imgDiralog.png";
import {
  Box,
  Button,
  styled,
  alpha,
  InputBase,
  FormControl,
  TextField,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";

const LoginBar = () => {
  const [phoneNumber, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);

  useEffect(() => {
    // handleSubmit();
  }, [phoneNumber, password]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post("login/member", {
        phoneNumber: phoneNumber,
        password: password,
        agent_id: '2',
      });
      if (response.data.token !== "undefined") {
        const accessToken = response.data.token;
        localStorage.setItem("token", accessToken);
        setUser("");
        setPwd("");
        window.location.href = "/Home";
      } else {
        console.log(response?.status.JSON);
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
  };

  const togglePopup = () => {
    setShowPopup(!showPopupA);
  };

  const cilckRegiter = () => {
    window.location.href = `/Register`;
  }

  const inputStyle = {
    color: 'red' // สีแดง
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
                <h3 className="detailDialogLogin font">
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

      <nav >
        <Headers />
      </nav>
      <div className="main-Login">
        <div className="wrapperLogin">

          <div className="slide-controlsLogin">
            <input type="radio" name="slide" id="login" />
            <input type="radio" name="slide" id="signup" />
            <label className="slideLogin login font">เข้าสู่ระบบ</label>
            <label className="slideLogin signup font" onClick={cilckRegiter}>สมัครสมาชิก</label>
            <div className="slider-tabLogin"></div>
          </div>

          <div className="textFrameLogin">
            <div className="title-textLogin font">Login เข้าสู่เว็บไซต์</div>
          </div>
          <div className="form-containerLogin">
            <div className="form-innerLogin">

              <form action="#" className="login">

                <div className="fieldDataLogin font textinputLogin input-containerLogin">
                  <p className="textTitleLogin font">เบอร์โทรศัพท์</p>
                  <div className="wrapInput">
                    <input
                      type="text"
                      placeholder="กรอกเบอร์โทรศัพท์"
                      value={phoneNumber}
                      onChange={(e) => setUser(e.target.value)}
                      required
                      className="input-with-iconLogin font"
                    />
                    <MdPhoneIphone  className="input-iconLogin" style={{ color: '#1218ff' }}/>
                  </div>
                </div>

                <div className="fieldDataLogin font textinputLogin input-containerLogin">
                  <p className="textTitleLogin font">password</p>
                  <div className="wrapInput">
                    <input
                      type="password"
                      placeholder="กรอกรหัสผ่าน"
                      value={password}
                      onChange={(e) => setPwd(e.target.value)}
                      required
                      className="input-with-iconLogin font"
                    />
                    <FaUnlockAlt className="input-iconLogin" style={{ color: '#1218ff' }} />
                  </div>
                </div>
                <div className="pass-link font">
                  <a className="font" href="/ForgotPassword">Forgot password?</a>
                </div>

                <br />
                <div className="fieldLogin btnsubmitLogin font">
                  <div className="btn-layerLogin"> </div>
                  <input type="submit" value="เข้าสู่ระบบ" onClick={handleSubmit} />
                </div>

                <div className="Login-link font">
                  <a className="font" href=""> พบปัญหา ติดต่อฝ่ายบริการลูกค้า</a>
                </div>
              </form>
            </div>
          </div>
        </div >
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

        <div className="imgWayLogin">
          <img className="scaltimgLogin" src={imgMoney} id="wel-img-id" alt="" />
        </div>

        <div className="imgWaymonterLoginIIIC">
          <img className="scaltimgDepositCircle" src={circle1} alt="" />
        </div>

        <div className="imgWaymonterLoginIII">
          <img className="scaltimgDepositCircle" src={circle1} alt="" />
        </div>
        <div className="imgWaymonterLoginII">
          <img className="scaltimgDepositCircle" src={circle2} alt="" />
        </div>
        <div className="imgWaymonterLoginI">
          <img className="scaltimgDepositCircle" src={circle2} alt="" />
        </div>
        <div className="imgWayLogin">
          <img className="scaltimgLoginCircleIII" src={imgpanpa} alt="" />
        </div>

        <div className="imgWayLogin">
          <img className="scaltimgLoginCircleIIII" src={imgcartoon} alt="" />
        </div>
      </div >
    </>
  );
};
export default LoginBar;