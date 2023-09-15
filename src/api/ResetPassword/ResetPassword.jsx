import React, { useState } from "react";
import axios from "../axios";
import "./ResetPassword.css";
import "./dialogWitdrawTa.css";
import cartoon from "../../img/imgDiralog.png";
import imgwomen from "../../img/1.png"
import imgpanpa from "../../img/9.png"
import imgpanpaII from "../../img/10.png"
import circle1 from "../../img/circle2.png"
import circle2 from "../../img/circle1.png"
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import { BsUnlockFill } from "react-icons/bs";
import NavicationBar from "../../view/NavicationBar/navicationbar";

const ResetPassword = () => {
  const [passwordOle, setpasswordOle] = useState("");
  const [passwordNew, setpasswordNew] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);
  const user = localStorage.getItem("user");
  const [open, setOpen] = React.useState(false);
  const [openlog, setOpenlog] = React.useState(false);
  const [openlogsuncent, setopenlogsuncent] = React.useState(false);
  const [logResetError, setlogResetError] = useState(false);


  const handleSubmit = async () => {
    if (passwordOle !== '' && passwordNew !== '' && passwordConfirm !== '') {
      if (passwordNew === passwordConfirm) {
        try {
          const response = await axios.put("post/resetPasswordUserToontaWeb", {
            passwordOle: passwordOle,
            passwordConfirm: passwordConfirm,
            useranme: user,
            typeedit: "member",
          });
          if (response.data.message === "เปลียนรหัสผ่านสำเร็จ") {
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
        setOpenlog(true);
      }
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
                <p className="titleDialog font">แจ้งเตือน ยืนยันการเปลี่ยนรหัสผ่าน</p>
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
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการเปลี่ยนรหัสผ่าน</p>
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
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการเปลี่ยนรหัสผ่าน</p>
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
          <div className="imgMoneyCartoon">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน การเปลี่ยนรหัสผ่าน</p>
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

      <div>
        <Headers />
      </div>
      <div className="main-AddWitdraw">
        <div className="wrapperWitdraw">
          <div className="textFrameWitdraw">
            <div className="title-textWitdraw font">เปลี่ยนรหัสผ่าน</div>
          </div>
          <div className="form-containerWitdraw">
            <div className="form-innerWitdraw">
              <form action="#" className="login">

                <div className="fieldDataWitdraw font textinputWitdraw input-containerWitdraw">
                  <p className="textTitleWitdraw font">รหัสผ่านเดิม</p>
                  <div className="wrapInputWitdraw">
                    <input
                      type="password"
                      placeholder="กรุณากรอกรหัสผ่านเก่า"
                      value={passwordOle}
                      onChange={(e) => setpasswordOle(e.target.value)}
                      required
                      className="input-with-iconReposit colorFontWindarwcredit font"

                    />
                    <BsUnlockFill className="input-iconWitdraw" />
                  </div>
                </div>

                <div className="fieldDataWitdraw font textinputWitdraw input-containerWitdraw">
                  <p className="textTitleWitdraw font">รหัสผ่านใหม่</p>
                  <div className="wrapInputWitdraw">
                    <input
                      type="password"
                      placeholder="กรุณากรอกรหัสผ่านใหม่"
                      value={passwordNew}
                      onChange={(e) => setpasswordNew(e.target.value)}
                      required
                      className="input-with-iconReposit font"

                    />
                    <BsUnlockFill className="input-iconWitdraw" />
                  </div>
                </div>

                <div className="fieldDataWitdraw font textinputWitdraw input-containerWitdraw">
                  <p className="textTitleWitdraw font">ยืนยันรหัสผ่าน</p>
                  <div className="wrapInputWitdraw ">
                    <input
                      type="password"
                      placeholder="กรุณายืนยันรหัสผ่าน"
                      value={passwordConfirm}
                      onChange={(e) => setpasswordConfirm(e.target.value)}
                      required
                      className="input-with-iconReposit colorFontWindarw font"
                    />
                    <BsUnlockFill className="input-iconWitdraw" />
                  </div>
                </div>
                <br />
                <div className="fieldWitdraw btnsubmitWitdraw font">
                  <input type="submitWitdraw" defaultValue="ยืนยันเปลี่ยนรหัสผ่าน" onClick={() => handleSubmitResetPassword()} />
                </div>
                <br />
                <div className="money-link ">
                  <a className="font" href="#"> พบปัญหา ติดต่อฝ่ายบริการลูกค้า</a>
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
export default ResetPassword;
