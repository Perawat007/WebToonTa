import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./ForgotPassword.css";
import "./dialogcssForgotPassword.css";
import circle2 from "../../img/circle2.png";
import imgDiralog from "../../img/imgDiralog.png";
import cartoon from "../../img/7.png";
import imgMoney from "../../img/5.png"
import imgpanpa from "../../img/panda2.png"
import imgcartoon from "../../img/2.png"
import circle1 from "../../img/circle1.png"
import regitercartoon from "../../img/regitercartoon.png";
import regitercartoonV2 from "../../img/RegiterV2.png";
import { Link } from "react-router-dom";
import Headers from "../../view/headersII";
import Select from "react-select";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { BsUnlockFill, BsPhoneFill } from "react-icons/bs";
import NavicationBar from "../../view/NavicationBar/navicationbar";

const ForgotPassword = () => {
  const [password, setPwd] = useState("");
  const [Confrimpassword, setPwdConfrim] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [showPopupB, setShowPopupB] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  // Dialog
  const [showRegiterA, setRegiterA] = useState(false);
  const [showRegiterOTP, setRegiterOTP] = useState(false);
  const [showRegiterB, setRegiterB] = useState(false);
  const [tokenpin, settokenpin] = useState("");
  const [otpPin, setotppin] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openlog, setOpenlog] = React.useState(false);//
  const [openlogsuncent, setopenlogsuncent] = React.useState(false);
  const [logResetError, setlogResetError] = useState(false);

  const [show, setShow] = useState(false);
  const [showPhoneCheck, setShowPhoneCheck] = useState(false);
  const [showUsernameCheck, setShowusernameCheck] = useState(false);
  const [showUsernameCheckvalue, setShowusernameCheckvalue] = useState(false);
  const [showpasswordCheck, setShowpasswordCheck] = useState(false);
  const [showpasswordNot, setShowpasswordNot] = useState(false);
  const [showOPTError, setshowOPTError] = useState(false);
  const [showBank, setShowBank] = useState(false);

  //Img
  const [showImg, setShowImg] = useState(regitercartoon);
  const [showprogressBar, setShowprogressBar] = useState(25);
  const [styleBar, setStyle] = useState({});
  const [title, setTitel] = useState("กรุณากรอกเบอร์โทรศัพท์");

  const handleClose = () => {
    setShow(false);
    setShowPhoneCheck(false);
    setShowusernameCheck(false);
    setShowpasswordCheck(false);
    setShowusernameCheckvalue(false);
    setShowpasswordNot(false);
    setShowBank(false);
  };

  useEffect(() => {
    setRegiterA(true);
    const newStyle = {
      opacity: 3,
      width: `25%`,
    };
    setStyle(newStyle);
  }, []);

  const otpError = () => {
    setshowOPTError(false);
  };

  const handleSubmitA = async (e) => {
    e.preventDefault();
    if (numberPhone !== "" && numberPhone !== undefined) {
      if (/^\d{0,10}$/.test(numberPhone) && numberPhone.length === 10) {
        const requestBody = {
          phoneNumber: numberPhone,
        };
        axios.post("otpRequestForgotPassword", requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response) {
              return response.data;
            } else {
              throw new Error("Error: " + response.statusText);
            }
          })
          .then((dataOTP) => {
            //console.log(dataOTP.message);
            if (dataOTP.message === "This phonenumber is not available.") {
              setShowPhoneCheck(true);
            } else {
              settokenpin(dataOTP.dataRes.data.token);
              setRegiterOTP(true);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        setShow(true);
      }
    } else {
      setShow(true);
    }
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    fetch("https://dogzilla.live/otpVerify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pin: otpPin,
        token: tokenpin,
      }),
    })
      .then((response) => {
        if (response) {
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then((data) => {
        //console.log(data);
        if (data.dataRes === "Code is invalid.") {
          setshowOPTError(true)
        } else {
          setShowImg(regitercartoonV2);
          setShowprogressBar(50);
          const newStyle = {
            opacity: 3,
            width: `50%`,
          };
          setStyle(newStyle);
          setTitel("กรุณากำหนด Password");
          setRegiterOTP(false);
          setRegiterA(false);
          setRegiterB(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCancelOTP = async (e) => {
    setRegiterOTP(false);
  };

  const submitResetPassword = () => {
    handleSubmit();
    setOpen(false);
  }

  const handleSubmitB = async (e) => {
    e.preventDefault();
    if (password.length > 5 && password.length <= 16) {
      if (password === Confrimpassword) {
        setShowprogressBar(75);
        const newStyle = {
          opacity: 3,
          width: `75%`,
        };
        setStyle(newStyle);
        handleSubmit();
      } else {
        setShowpasswordCheck(true);
      }
    } else {
      setShowpasswordNot(true);
    }
  };

  const handleSubmit = async () => {
    if (password !== '' && Confrimpassword !== '') {
      if (password === Confrimpassword) {
        try {
          const response = await axios.put("post/resetPasswordUserToonta", {
            newPassword: Confrimpassword,
            username: numberPhone,
            idUser: '0',
            idedit: '0',
            typeedit: "member",
            agent_id: '2',
            note: 'เปลี่ยนจากเว็บ Toonta.com'
          });

          //console.log(response.data);
          if (response.data.message === "User Member editPassword Success") {
            setopenlogsuncent(true)

          } else {
            setlogResetError(true);
          }
        } catch (err) {
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
        setOpenlog(true);
      }
    }
  }

  const PasswordChangedSuccessfully = () => {
    window.location.href = "/Login";
  };

  return (
    <>
      {show && (
        <div className="overlayRegiter">
          <div className="modalContainerForgot">
            <div className="imgForGet">
              <img src={cartoon} alt="/" />
            </div>
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialogFor font">เบอร์โทรไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialogRegiter font">
                  กรุณากรอกเบอร์โทรให้ถูกต้อง โดยเบอร์โทรศัพท์หลักแรก
                  ต้องเป็นเลข 0 และต่อจากนั้น จะเป็นเลข 9 ตัว เช่น 0XXXXXXXXX
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPhoneCheck && (
        <div className="overlayRegiter">
          <div className="imgForGet">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialogFor font">ไม่พบผู้ใช้ในระบบ</p>
                <br />
                <h3 className="detailDialogRegiter font">
                  กรุณากรอกเบอร์โทรใหม่ ไม่พบเบอร์โทร {numberPhone} ในระบบ
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showpasswordCheck && (
        <div className="overlayRegiter">
          <div className="imgForGet">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialogFor font">Password ไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialogRegiter font">
                  กรุณากรอก Password ให้เหมือนกันทั้ง 2 ช่อง
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showpasswordNot && (
        <div className="overlayRegiter">
          <div className="imgForGet">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialogFor font">Password ไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialogRegiter font">
                  กรุณาตั้ง Password 6 ตัวอักษรขึ้นไป
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="overlayMoney">
          <div className="imgForGet">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialogFor font">แจ้งเตือน ยืนยันการเปลี่ยนรหัสผ่าน</p>
                <br />
                <h3 className="detailDialog font">คุณต้องการเปลี่ยนรหัสผ่านตามนี้เลยใช่หรือไม่</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={submitResetPassword}>
                  ยืนยันการเปลี่ยนรหัสผ่าน
                </button>
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {openlog && (
        <div className="overlayMoney">
          <div className="imgForGet">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialogFor font">แจ้งเตือน ยืนยันการเปลี่ยนรหัสผ่าน</p>
                <br />
                <h3 className="detailDialog font">กรุณากรอกรหัสใหม่กับยืนยันรหัสผ่านให้เหมือนกัน</h3>
              </div>
              <div className="btnContainerMoney">
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
          <div className="imgForGet">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialogFor font">แจ้งเตือน ยืนยันการเปลี่ยนรหัสผ่าน</p>
                <br />
                <h3 className="detailDialog font">เปลี่ยนรหัสผ่านสำเร็จ</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={PasswordChangedSuccessfully}>
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {logResetError && (
        <div className="overlayMoney">
          <div className="imgForGet">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialogFor font">แจ้งเตือน การเปลี่ยนรหัสผ่าน</p>
                <br />
                <h3 className="detailDialog font">คุณกรอกรหัสผ่านไม่ถูกต้อง กรุณาตรวจรหัสผ่านและลองใหมอีกครั้ง</h3>
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


      {showRegiterOTP && (
        <div className="overlayRegiter">

          <div className="modalContainerForgot">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialogRegiter font">ยืนยัน OTP</p>
              </div>
              <div className="form-innerForgotPassword">
                <div className="DialogImg">
                  <img className="scaltimgDialogImg" src={imgDiralog} alt="" />
                </div>
                <form action="#" className="ForgotPassword">
                  <div className="fieldDataForgotPassword font textinputForgotPassword input-containerForgotPassword">
                    <div className="wrapInputRegiter">
                      <input
                        type="text"
                        placeholder="กรุณากรอก OTP"
                        value={otpPin}
                        onChange={(e) => setotppin(e.target.value)}
                        required
                        className="input-with-iconForgotPassword"
                      />
                    </div>
                    <BsPhoneFill className="input-iconForgotPassword" style={{ top: '22px', color: '#FFFFFF' }} />
                    <div className="textOTP" style={{ color: '#FFFFFF' }}>
                    </div>
                  </div>

                  <div className="fieldForgotPasswordOTP btnsubmitForgotPassword font">
                    <div className="btn-layerForgotPassword"> </div>
                    <input
                      type="submit"
                      value="ยืนยัน"
                      onClick={handleSubmitOTP}
                    />
                  </div>
                  <div className="fieldForgotPasswordOTP btnsubmitForgotPassword font">
                    <div className="btn-layerForgotPassword"> </div>
                    <input
                      type="submit"
                      value="ยกเลิก"
                      onClick={handleCancelOTP}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {showOPTError && (
       <div className="overlayRegiter">
       <div className="imgForGet">
         <img src={cartoon} alt="/" />
       </div>
       <div className="modalContainerMoney">
         <div className="modalRightMoney">
           <div className="contentMoney">
             <p className="titleDialogFor font">OPT ไม่ถูกต้อง</p>
             <br />
             <h3 className="detailDialogRegiter font">
               กรุณากรอก OTP ให้ถูกต้อง
             </h3>
           </div>
           <div className="btnContainerRegiter">
             <button className="btnPrimaryRegiter" onClick={handleClose}>
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
        <div className="wrapperForgotPassword">
          <div className="textFrameForgotPassword">
            <div className="title-textForgotPassword font">ลืม Password</div>
          </div>

          <div className="textFrameHeadersForgotPassword">
            <div className="title-textForgotPassword font" style={{ color: '#ffffff' }}>{title}</div>
          </div>

          <div className="progressBarForgot">
            <div className="progressBarForgot-done" style={styleBar}>
              {showprogressBar}%
            </div>
          </div>

          <div className="imgWaycircleForgot">
            <img className="scaltimgcirclesmForgot" src={showImg} alt="" />
          </div>

          <div className="form-containerForgotPassword">
            <div className="form-innerForgotPassword">
              {(() => {
                if (showRegiterA === true) {
                  return (
                    <>
                      <form className="ForgotPassword" onSubmit={handleSubmitA}>
                        <div className="fieldDataForgotPassword font textinputForgotPassword input-containerForgotPassword">
                          <p className="textTitleForgotPassword font">เบอร์โทรศัพท์</p>
                          <div className="wrapInputRegiter">
                            <input
                              type="Number"
                              placeholder="กรอกเบอร์โทรศัพท์"
                              value={numberPhone}
                              onChange={(e) => setNumberPhone(e.target.value)}
                              required
                              className="input-with-iconForgotPassword font"
                            />
                            <BsPhoneFill className="input-iconForgotPassword" style={{ color: '#1218ff' }} />
                          </div>
                        </div>
                        <div className="fieldForgotPassword btnsubmitForgotPassword font">
                          <div className="btn-layerForgotPassword"> </div>
                          <input type="submit" value="ยืนยัน" onClick={handleSubmitA} />
                        </div>
                        <div className="ForgotPassword-link font">
                          <a style={{ color: '#ffd000' }}>พบปัญหา ติดต่อฝ่ายบริการลูกค้า</a>
                        </div>
                      </form>
                    </>
                  );
                }
                if (showRegiterB === true) {
                  return (
                    <>
                      <form className="login">

                        <div className="fieldDataForgotPassword font textinputForgotPassword input-containerForgotPassword">
                          <p className="textTitleForgotPassword font">รหัสผ่านใหม่</p>
                          <div className="wrapInputRegiter">
                            <input
                              type="password"
                              placeholder="กรุณากรอก Password"
                              value={password}
                              onChange={(e) => setPwd(e.target.value)}
                              required
                              className="input-with-iconForgotPassword"
                            />
                            <BsUnlockFill className="input-iconForgotPassword" style={{ color: '#1218ff' }} />
                          </div>
                        </div>

                        <div className="fieldDataForgotPassword font textinputForgotPassword input-containerForgotPassword">
                          <p className="textTitleForgotPassword font">ยืนยันรหัสผ่าน</p>
                          <div className="wrapInputRegiter">
                            <input
                              type="password"
                              placeholder="กรุณายืนยัน Password"
                              value={Confrimpassword}
                              onChange={(e) => setPwdConfrim(e.target.value)}
                              required
                              className="input-with-iconForgotPassword"
                            />
                            <BsUnlockFill className="input-iconForgotPassword" style={{ color: '#1218ff' }} />
                          </div>
                        </div>

                        <div className="buttomDown">
                          <div className="fieldForgotPassword btnsubmitForgotPassword font">
                            <input type="submit" value="ถัดไป" onClick={handleSubmitB} />
                          </div>
                        </div>
                        <div className="ForgotPassword-link font">
                          <a style={{ color: '#ffd000' }} >พบปัญหา ติดต่อฝ่ายบริการลูกค้า</a>
                        </div>
                      </form>
                    </>
                  );
                }
              })()}
            </div>
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

        <div className="imgWayForgotPassword">
          <img className="scaltimgForgotPassword" src={imgMoney} id="wel-img-id" alt="" />
        </div>

        <div className="imgWayForgotPassword">
          <img className="scaltimgForgotPasswordCircleI" src={circle1} alt="" />
        </div>
        <div className="imgWayForgotPassword">
          <img className="scaltimgForgotPasswordCircleV" src={circle1} alt="" />
        </div>
        <div className="imgWayForgotPassword">
          <img className="scaltimgLoginCircleVI" src={circle1} alt="" />
        </div>
        <div className="imgWayForgotPassword">
          <img className="scaltimgForgotPasswordCircleII" src={circle2} alt="" />
        </div>
        <div className="imgWayForgotPassword">
          <img className="scaltimgForgotPasswordCircleIII" src={imgpanpa} alt="" />
        </div>

        <div className="imgWayForgotPassword">
          <img className="scaltimgForgotPasswordCircleIIII" src={imgcartoon} alt="" />
        </div>

      </div>
    </>
  );
};
export default ForgotPassword;
