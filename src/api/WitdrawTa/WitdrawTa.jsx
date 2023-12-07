import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./WitdrawTa.css";
import "./dialogWitdrawTa.css";
import cartoon from "../../img/imgDiralog.png";
import imgwomen from "../../img/1.png"
import imgpanpa from "../../img/9.png"
import imgpanpaII from "../../img/10.png"
import circle1 from "../../img/circle2.png"
import circle2 from "../../img/circle1.png"
import { Link } from "react-router-dom";
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import { BsCoin, BsBank2 } from "react-icons/bs";
import NavicationBar from "../../view/NavicationBar/navicationbar";
import gitWitdraw from '../../img/icon/money.gif'
import nottifocationimgOne from '../../img/lang/pop1.png'
import nottifocationimgTwo from '../../img/lang/pop2.png'
import nottifocationimgThree from '../../img/lang/pop_up3.png'

import StatusWitdrawTa from "../StatusWithDraw/StatusWitdrawTa";

const WitdrawTa = () => {
  const [Witdrawamount, setWitdrawamount] = useState();
  const [accountNumber, setaccountNumber] = useState("");
  const [creditusers, setcreditusers] = useState("");
  const [valueWitDraw, setvalueWitDraw] = useState(0.00);
  const [amountWitDraw, setamountWitDraw] = useState("");
  const [datapromotion, setDatapromotion] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const credit = localStorage.getItem("credit");
  const turnover = localStorage.getItem("%rootTroot%");
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openDialogdialog, setOpenDialogdialog] = React.useState(false);
  const pathA = window.location.pathname;
  const pathSegments = pathA.split('/');

  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedImageUrlshow, setSelectedImageUrlshow] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [reaSleepData, setreaSleepData] = useState('');
  const [resOpenOne, setresOpenOne] = useState(false);
  const [logTime, setlogTime] = useState(false);
  const [logImgNo, setlogImgNo] = useState(false);

  const [resOpen, setresOpen] = useState(false);
  const [resOpenTwo, setresOpenTwo] = useState(false);
  const [resOpenThree, setresOpenThree] = useState(false);
  const [resOpenFour, setresOpenFour] = useState(false);
  const [resOpenFive, setresOpenFive] = useState(false);


  let baseURL = 'https://dogzilla.live/';
  //const baseURL: 'http://localhost:5000/';
  const convertedCredituser = parseFloat(credit.replace(/,/g, '')).toFixed(2);
  const convertedCreditturnover = parseFloat(turnover.replace(/,/g, '')).toFixed(2);

  const numberValuecredit = parseFloat(convertedCredituser);
  const numberValueTurnover = parseFloat(convertedCreditturnover);

  useEffect(() => {
    startWithDraw();
  }, []);

  const startWithDraw = async () => {
    if (token) {
      if (data.length === 0) {
        try {
          const response = await axios.post("post/GetWithdrawStatus", {
            phonenumber: user,
            agent_id: '2',
          });
          //console.log(response.data.message);
          if (response.data.message === 'sentData') {
            window.location.href = "/checkStatusWithDraw";
          } else {

            setcreditusers(response.data.credit)
            let moneyWithDraw = 0
            if (numberValueTurnover !== 0){
              moneyWithDraw = 0;
            } else {
              moneyWithDraw = numberValuecredit
            }
            let floorValue = Math.floor(moneyWithDraw);
            let formattedValue = floorValue.toLocaleString();
            //console.log(formattedValue);
            if (floorValue < 0) {
              formattedValue = 0;
              setamountWitDraw(formattedValue)
            } else {
              setamountWitDraw(formattedValue)
            }
          }
        } catch (err) {
          setShowPopup(!showPopupA);
          // localStorage.removeItem("token");
          // localStorage.removeItem("user");
          // window.location.href = "/";
          console.log("error", err);
        }
      }
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setSelectedImageUrlshow(file);
        setUploadedImageUrl(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    let moneyWithDraw = numberValuecredit - numberValueTurnover
    const numberWithoutComma = valueWitDraw.replace(/,/g, ''); // "1000"
    const numberValue = parseFloat(numberWithoutComma); // 1000
    console.log(numberValue, valueWitDraw);
    if (numberValue >= 100.00 && numberValue <= moneyWithDraw) {
      console.log(numberValue);
      fetch(baseURL + 'post/WinhdrawUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quantity: numberValue,
          phonenumber: user,
          agent_id: 2,
          actualize: 'ถอนโดย member จากหน้าเว็บไซต์',
        })
      })
        .then((response) => response.json())
        .then(async (data) => {

          // switch (data.message) {
          //   case "ไม่มีชื่อบัญชีธนาคารของเว็บ Toonta ในระบบเงินฝาก":
          //     setresOpenFive(true);
          //     break;
          //   case "สลิปนี้เคยถูกใช้งานแล้ว":
          //     setresOpen(true);
          //     break;
          //   case "ชื่อบัญชีที่ได้ลงทะเบียนไม่ถูกต้อง กรุณาตรวจสอบ สลิปโอนเงิน ":
          //     setresOpenTwo(true);
          //     break;
          //   case "สลิปนี้เคยถูกใช้งานแล้ว หรือ ข้อมูลไม่ถูกต้องกรุณาลองใหม่อีกครั้ง":
          //     setresOpenFour(true);
          //     break;
          //   case "ถอน":
          //     setresOpenThree(true);
          //     break;
          //   default:
          //     setresOpenFour(true);
          //     break;
          // }
          // setreaSleepData(data.message)
          // setlogTime(false);
          // setresOpen(true);
          if (data.message === 'รอการอนุมัติการถอนเงิน') {
            setresOpenTwo(true);
          }
        })
    } else {
      setresOpen(true);
      //console.log('no');
    }
  }

  const handleSubmitWitdraw = () => {
    handleSubmit();
    setOpen(false);
  };

  const goWithDrawStatus = () => {
    window.location.href = "/checkStatusWithDraw";
  };

  const handleClose = () => {
    if (reaSleepData === 'ฝากเงินสำเสร็จ') {
      setOpen(false);
      setOpenDialogdialog(false);
      setresOpen(false);
      window.location.reload();
    } else {
      setOpen(false);
      setOpenDialogdialog(false);
      setresOpen(false);
      setlogImgNo(false);
      setresOpenTwo(false);
      setresOpenThree(false);
      setresOpenFour(false);
      setresOpenFive(false);
    }
  };

  const handleChange = (e) => {
    let val = e.target.value;
    val = val.replace(/,/g, ''); // ลบ comma ที่มีอยู่แล้ว
    if (/^\d+$/.test(val) || val === '') {
      if (val !== '') {
        val = parseInt(val).toLocaleString(); // แปลงเป็นรูปแบบที่มี comma
      }
      setvalueWitDraw(val);
    }
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
                <p className="titleDialog font">แจ้งเตือน ยืนยันการฝากเงิน</p>
                <br />
                <h3 className="detailDialog font">คุณต้องการฝากเงิน จำนวน {Witdrawamount} เลขที่บัญชี {accountNumber}</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยืนยันการฝากเงิน
                </button>
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {logTime && (
        <div className="overlayMoney">
          <div className="imgMoneyCartoon">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการฝากเงิน</p>
                <br />
                <h3 className="detailDialog font">กรุณารอสักครู่ ระบบกำลังดำเนินการฝากเงิน {uploadStatus}</h3>
                <div className="imgMoneyGit">
                  <img src={gitWitdraw} alt="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {logImgNo && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการฝากเงิน</p>
                <br />
                <h3 className="detailDialog font">กรุณาอัพโหลด สลีป</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {resOpen && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoneyImg">
            <div className="modalRightMoney">
              <img src={nottifocationimgOne} alt="/" onClick={handleClose} />
            </div>
          </div>
        </div>
      )}

      {resOpenTwo && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoneyImg">
            <div className="modalRightMoney">
              <img src={nottifocationimgTwo} alt="/" onClick={goWithDrawStatus} />
            </div>
          </div>
        </div>
      )}

      {resOpenThree && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoneyImg">
            <div className="modalRightMoney">
              <img src={nottifocationimgThree} alt="/" onClick={handleClose} />
            </div>
          </div>
        </div>
      )}
      {resOpenOne && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการฝากเงิน</p>
                <br />
                <h3 className="detailDialog font">{reaSleepData}</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      <div>
        <Headers />
      </div>
      <div className="main-AddWitdraw">
        <div className="wrapperWitdrawV">
          <div className="textFrameWitdraw">
            <div className="title-textWitdraw font">ถอนเงิน</div>
          </div>
          <div className="form-containerWitdraw">
            <div className="form-innerWitdraw">
              <form action="#" className="login">

                <div className="fieldDataWitdrawNoColor font textinputWitdraw input-containerWitdraw">
                  <p className="textTitleWitdraw font">ยอดเงินคงเหลือ</p>
                  <div className="wrapInputWitdraw">
                    <input
                      type="text"
                      placeholder="ยอดเงินคงเหลือ"
                      value={credit}
                      required
                      className="input-with-iconReposit colorFontWindarwcredit font"
                      disabled
                    />
                    <BsCoin className="input-iconWitdraw" />
                  </div>
                </div>

                <div className="fieldDataWitdraw font textinputWitdraw input-containerWitdraw">
                  <p className="textTitleWitdraw font">จำนวนเงินที่ถอนได้</p>
                  <div className="wrapInputWitdraw">
                    <input
                      type="text"
                      placeholder="จำนวนเงินที่ถอนได้"
                      value={amountWitDraw}
                      required
                      className="input-with-iconReposit font"
                      disabled
                    />
                    <BsCoin className="input-iconWitdraw" />
                  </div>
                </div>

                <div className="fieldDataWitdrawNoColor font textinputWitdraw input-containerWitdraw">
                  <p className="textTitleWitdraw font">จำนวนเงินที่ต้องการถอน</p>
                  <div className="wrapInputWitdraw ">
                    <input
                      type="text"
                      placeholder="จำนวนเงินที่ต้องการถอน"
                      value={valueWitDraw}
                      onChange={handleChange}
                      required
                      className="input-with-iconReposit colorFontWindarw font"
                    />
                    <BsCoin className="input-iconWitdraw" />
                  </div>
                  <p className=" money-link font" style={{ color: 'red' }}>กรุณาใส่ยอดเงินเป็นจำนวนเต็มไม่มีจุดทศนิยม</p>
                </div>
                <br />
                <div className="fieldWitdraw btnsubmitWitdraw font">
                  <input type="submitWitdraw" value="ถอนเงิน" onClick={() => handleSubmitWitdraw()} />
                </div>
                <br />
                <div className="money-link ">
                  <a className="font" href="" style={{ color: 'red' }}> พบปัญหา ติดต่อฝ่ายบริการลูกค้า</a>
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
export default WitdrawTa;
