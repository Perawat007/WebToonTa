import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./StatusWitdrawTa.css";
import "./dialogStatusWitdrawTa.css";
import imgwomen from "../../img/1.png"
import imgCardtoonCharacter from "../../img/statusWithDrawCartoon.png"
import circle1 from "../../img/circle1.png"
import circle2 from "../../img/circle2.png"
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import NavicationBar from "../../view/NavicationBar/navicationbar";

function formatDate(isoString) {
  const date = new Date(isoString);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth() returns months from 0-11
  const year = date.getUTCFullYear();
  
  return `${day}/${month}/${year}`;
}

function formatTime(timeString) {
  const [hour, minute] = timeString.split(":");
  return `${hour}:${minute}`;
}

const StatusWitdrawTa = () => {
  const [showPopupA, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [data, setData] = useState([]);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [bank, setBank] = useState([]);
  const pathA = window.location.pathname;
  const pathSegments = pathA.split('/');

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUrlshow, setSelectedImageUrlshow] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

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
          //console.log(response.data.data);
          if (response.data.message === 'sentData') {
            setData(response.data.data[0])
            const formattedDate = formatDate(response.data.data[0].transaction_date);
            const formattedTime = formatTime(response.data.data[0].time);
            setDate(formattedDate);
            setTime(formattedTime);
            const responseBank = await axios.post("post/GetBank", {
              idBank: response.data.data[0].bank,
            });
            //console.log(responseBank.data.dataBank);
            setBank(responseBank.data.dataBank);
          } else {
            window.location.href = `/Witdraw`;
          }
        } catch (err) {
          setShowPopup(!showPopupA);
          // localStorage.removeItem("token");
          // localStorage.removeItem("user");
          // window.location.href = "/";
          console.log("error", err);
        }
      } else {
        window.location.href = `/Witdraw`;
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
  return (
    <>
      <div>
        <Headers />
      </div>
      <div className="main-AddStatus">
        <div className="wrapperStatus">
          <div className="textFrameStatus">
            <div className="title-textStatus font">สถานะ ถอนเงิน</div>
          </div>
          <div className="form-inner">
            <form action="#">
              <div className="cardStatus">
                <div className="headerStatus font ">
                  <img src={bank.images} alt="Circle Icon" className="circle-iconStatus" />
                  <h5>{bank.bankname_name}</h5>
                  <button className="more-buttonStatus">สถานะ:<br />กำลังดำเนิน</button>
                </div>
                <div className="cardvalus font">
                  <h5 >ถอน : {data.quantity}</h5>
                  <h6>{date} {time}</h6>
                </div>
                <div className="infoStatus font">
                  <div className="accountNameText" style={{ textAlign: 'center' }}>
                    <label className=" font" style={{ color: '#1218FF', display: 'block' }}>ชื่อบัญชี</label>
                    <label className="accountNumberPosition font" style={{ color: '#1218FF', display: 'block' }}>{data.accountName}</label>
                  </div>
                  <div className="accountNumberText" style={{ textAlign: 'center' }}>
                    <label className=" font" style={{ color: '#1218FF', display: 'block' }}>เลขบัญชี</label>
                    <label className="accountNumberPosition font" style={{ color: '#1218FF', display: 'block' }}>{data.accountNumber}</label>
                  </div>
                  <br />
                </div>
              </div>
              <div className="money-link ">
                <a className="font" href=""> พบปัญหา ติดต่อฝ่ายบริการลูกค้า</a>
              </div>
              <img className="imgCardtoonCharacter" src={imgCardtoonCharacter} alt="" />
            </form>
          </div>

        </div>
        <div className="displayFooterDeposit">
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

        <div className="imgWayDeposit">
          <img className="scaltimgDeposit " src={imgwomen} id="wel-img-id" alt="" />

          <div className="imgShadowCircleI">
            <img className="scaltimgDepositCircle" src={circle1} alt="" />
          </div>

          <div className="imgShadowCircleII">
            <img className="scaltimgDepositCircle" src={circle2} alt="" />
          </div>

          <div className="imgShadowCircleV">
            <img className="scaltimgDepositCircle" src={circle1} alt="" />
          </div>

          <div className="imgShadowCircleVI">
            <img className="scaltimgDepositCircle" src={circle1} alt="" />
          </div>
          {/* <img className="scaltimgDepositCircleIII" src={imgpanpa} alt="" />
          <img className="scaltimgDepositCircleIIII" src={imgpanpaII} alt="" /> */}

        </div>
      </div>
    </>
  );
};

export default StatusWitdrawTa;

