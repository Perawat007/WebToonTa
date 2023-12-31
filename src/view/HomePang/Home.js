import React, { useRef, useState, useEffect, useContext } from "react";
import Marquee from 'react-marquee';
import Headers from '../headers';
import HeadersII from '../headersII';
import MenuHome from '../pangHome/MenuHome';
import BannerBox from '../pangHome/BannerBox';
import GameShow from '../pangHome/GameShow';
import WinGame from '../pangHome/WinGame';
import Competitivegame from '../pangHome/competitivegame';
import Gamepromotion from '../pangHome/gamepromotion';
import Allgamecamps from '../pangHome/Allgamecamps';
import Mycard from '../pangHome/Mycard';
import MenuDown from '../pangHome/MenuDown';
import { useTheme } from '@mui/material/styles';
import NavicationBar from '../NavicationBar/navicationbar';
import './Login.css'
import '../cartoon.css'
import Footer from '../pangHome/FooTer/Footer';
import Arkssdider from '../pangHome/Slider/Slider'
import GamePlay from '../SeeGame/GamePlay';
import GameRecommend from '../pangHome/GameRecommend';
import RewardShowBronze from '../RewardClub/RewardShow';
import cartoon from "../../img/8.png";
import cartoonII from "../../img/3.png";
import cartoonIII from "../../img/6.png";
import circleI from "../../img/circle1.png";
import circleII from "../../img/circle2.png";
import rewardfile from "../../img/reward/rewardfileB.png"
import rewardfileMb from "../../img/reward/bg_card_test.png"
import SitiGame from "../pangHome/SitiGame"
import axios from '../../api/axios';
import card1 from "../../img/reward/card_1.png"
import card2 from "../../img/reward/card_2.png"
import card3 from "../../img/reward/card_3.png"
import card4 from "../../img/reward/card_4.png"
import announce from "../../img/icon_bar/announce_for_PC.png"
import imgDeposit from "../../img/icon_bar/DepositCartoon.png"
import imgWitdraw from "../../img/icon_bar/WitdrawCartoon.png"
import style from './style.scss'
import DataUser from "../../api/DataUser/DataUser";
import './styleweb.css'
function Home() {
  const theme = useTheme();
  const [showtoolBar, setshowtoolBar] = React.useState(true);
  const [showtoolBarlogincompreat, setshowtoolBarLogincompreat] = React.useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = React.useState([])
  const [dataAbs, setDataAbs] = React.useState([])
  const [showPopupA, setShowPopup] = React.useState(false);
  const [datacard, setDatacard] = React.useState('')
  const [showPopupDataUser, setshowPopupDataUser] = useState(true);

  const [tickerItems] = React.useState([
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', className: 'new' },
    { text: 'Isum dolor sit amet, consectetur adipiscing elit.', className: 'strategy' },
    { text: 'Isum dolor sit amet, consectetur adipiscing elit.', className: 'racing' },
  ]);

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  React.useEffect(() => {
    if (token) {
      setshowtoolBar(false)
      setshowtoolBarLogincompreat(true)
    } else {
      setshowtoolBar(true)
      setshowtoolBarLogincompreat(false)
    }

    absStart();
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % tickerItems.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };

  }, [tickerItems.length]);

  const absStart = async () => {
    try {
      const response = await axios.post('post/getlistAbs/text');
      //console.log(response.data.data);
      setDataAbs(response.data.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const cilckRegiter = async () => {
    window.location.href = `/Register`;
    //const response = await axios.get('/api/getIp');
  }

  const cilckLogin = () => {
    window.location.href = `/Login`;
  }

  const goDeposit = () => {
    window.location.href = `/Deposit`;
  }

  const gowithdraw = () => {
    window.location.href = `/Witdraw`;
  }

  const handleImageClick = (dataCard) => {
    //window.location.href = `/RewardShow`;
    // setShowPopup(true);
    // setDatacard(dataCard);
  }



  const goDialogDataUser = () => {
    setshowPopupDataUser(true);
  };

  const offDialogDataUser = () => {
    setshowPopupDataUser(!showPopupDataUser);
  };

  const togglePopup = () => {
    setShowPopup(!showPopupA);
  };

  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await axios.post('YOUR_UPLOAD_URL', formData);
        console.log('Image uploaded successfully');
        // Handle success
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error
      }
    }
  };


  const logout = () => {
    if (token) {
      if (data.length === 0) {
        axios.post("/post/token", '', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            axios.put("/post/logoutMember", { memberID: response.data.data.id },)
              .then(response => {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                window.location.href = "/";
              })
              .catch(error => console.log('error', error));
          })
          .catch(error => {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            window.location.href = "/";
            console.log('error', error)
          }
          );
      }
    }
  }

  return (
    <>

      {showPopupA && (
        <div className="overlayHomeRe">
          <div className="modalContainerRe">

            <div className="modalRightHome">
              <RewardShowBronze card={datacard} />
              <div className="btnContainerRe">
                <button className="btnPrimaryHome" onClick={togglePopup}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* 
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
      )} */}

      <nav >
        <div id="preloder">
          <div className="loader"></div>
        </div>
        <HeadersII />
      </nav>

      <div className="main-content">
        <div className="news-container">
          <div className="text-container">
            <div className=" font cartoonAnnounce">
              <img className="" src={announce} alt="benner-img" />
            </div>
          </div>

          {dataAbs && (
            <>
              <ul className="uL">
                {[...Array(5)].flatMap((_, outerIndex) =>
                  dataAbs.map((slide, index) => (
                    <div key={index + (outerIndex * dataAbs.length)}>
                      <li className="nt-item LII font">
                        <span className="font" style={{ backgroundColor: slide.filename }}>
                          {slide.name_abs}
                        </span>{" "}
                        {slide.details_abs}
                      </li>
                    </div>
                  ))
                )}
              </ul>
            </>
          )}

          {/* <ul className="uL">
            <li className="nt-item LII font"><span className="new font">Welcome </span> ยินดีต้อนรับทุกท่าน สู่เว็บ ToonTa ศูนย์รวมเกมออนไลน์ที่ดีที่สุดในประเทศไทย. </li>
            <li className="nt-item LII font"><span className="strategy font">PROMOTION  </span> สมาชิกใหม่รับโบนัส 100% </li>
            <li className="nt-item LII font"><span className="racing font">PROMOTION  </span> ทุกยอดฝากรับโบนัส 10% </li>
            <li className="nt-item LII font"><span className="new font">PROMOTION  </span> ฝากแรกของวันรับโบนัส 30% </li>
            <li className="nt-item LII font"><span className="racing font">New </span> เปิดตัวสล็อตค่ายใหม่ DOGZILLA เพียงเข้าเล่นรับโบนัสทันที 50% </li>
            <li className="nt-item LII font"><span className="new font">Welcome </span> ยินดีต้อนรับทุกท่าน สู่เว็บ ToonTa ศูนย์รวมเกมออนไลน์ที่ดีที่สุดในประเทศไทย. </li>
            <li className="nt-item LII font"><span className="strategy font">PROMOTION  </span> สมาชิกใหม่รับโบนัส 100% </li>
            <li className="nt-item LII font"><span className="racing font">PROMOTION  </span> ทุกยอดฝากรับโบนัส 10% </li>
            <li className="nt-item LII font"><span className="new font">PROMOTION  </span> ฝากแรกของวันรับโบนัส 30% </li>
            <li className="nt-item LII font"><span className="racing font">New </span> เปิดตัวสล็อตค่ายใหม่ DOGZILLA เพียงเข้าเล่นรับโบนัสทันที 50% </li>
          </ul> */}
        </div >
        <div className="topHome">
          <Arkssdider />
        </div>

        <BannerBox />

        <div className="content-holder">
          {showtoolBar && (
            <div className='control-btn'>
              <button className="custom-btn btn-13 font" onClick={cilckRegiter}>ลงทะเบียน</button>
              <button className="custom-btn btn-14 font" onClick={cilckLogin}>ลงชื่อเข้าใช้</button>
            </div>
          )}

          {showtoolBarlogincompreat && (
            <div className='control-btn'>
              <button className="custom-btn btn-13 font" onClick={goDeposit}>
                <img
                  src={imgDeposit}
                  alt=""
                  className="imgButton"
                />
                <span className="textButton font">ฝาก</span>
              </button>
              <button className="custom-btn btn-14 font" onClick={gowithdraw}>
                <img
                  src={imgWitdraw}
                  alt=""
                  className="imgButton"
                />
                <span className="textButton font">ถอน</span>
              </button>
            </div>
          )}
          <div className='control-promo'>
            <SitiGame />
          </div>
        </div>
        <div className='marginWeb'>
          <GameShow />
        </div>
        <div className='marginWeb'>
          <WinGame />
        </div>
        <div className='marginWeb'>
          <GameRecommend />
        </div>

        <div className='a-davPC'>
          <img className="download-bannerAbs"
            src={rewardfile} alt="benner-img" />

          <div className="image-grid">
            <button onClick={() => handleImageClick('Bronze')}>
              <img className="img-responsive download-bannerAbs imgCardAbs1 " src={card1} alt="benner-img" />
              <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Bronze</h4>
            </button>
            <button onClick={() => handleImageClick('Silver')}>
              <img className="img-responsive download-bannerAbs imgCardAbs2 " src={card2} alt="benner-img" />
              <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Silver</h4>
            </button>
            <button onClick={() => handleImageClick('Gold')}>
              <img className="img-responsive download-bannerAbs imgCardAbs3 " src={card3} alt="benner-img" />
              <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Gold</h4>
            </button>
            <button onClick={() => handleImageClick('Diamond')}>
              <img className="img-responsive download-bannerAbs imgCardAbs4 " src={card4} alt="benner-img" />
              <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Diamond</h4>
            </button>
          </div>
        </div>
        <div className='a-davMB'>
          <img className="download-bannerAbs"
            src={rewardfileMb}
            alt="benner-img" />

          <div className="image-grid">
            <button onClick={() => handleImageClick('Bronze')}>
              <img className="img-responsive download-bannerAbs imgCardAbs1 " src={card1} alt="benner-img" />
              <h4 className='font fontsize' style={{ color: '#FF9900', marginTop: '10px' }}>Bronze</h4>
            </button>
            <button onClick={() => handleImageClick('Silver')}>
              <img className="img-responsive download-bannerAbs imgCardAbs2" src={card2} alt="benner-img" />
              <h4 className='font fontsize' style={{ color: '#FF9900', marginTop: '10px' }}>Silver</h4>
            </button>
            <button onClick={() => handleImageClick('Gold')}>
              <img className="img-responsive download-bannerAbs imgCardAbs3" src={card3} alt="benner-img" />
              <h4 className='font fontsize' style={{ color: '#FF9900', marginTop: '10px' }}>Gold</h4>
            </button>
            <button onClick={() => handleImageClick('Diamond')}>
              <img className="img-responsive download-bannerAbs imgCardAbs4" src={card4} alt="benner-img" />
              <h4 className='font fontsize' style={{ color: '#FF9900', marginTop: '10px' }}>Diamond</h4>
            </button>
          </div>
        </div>

        <div className="imgWayDeposit">
          <img className="imgWaymonterHomeIII" src={cartoonIII} id="wel-img-id" alt="" />
          <img className="imgWaymonterHomeII" src={cartoon} id="wel-img-id" alt="" />
          <img className="imgWaymonterHomeI" src={cartoonII} id="wel-img-id" alt="" />

          <div className="imgWaymonterHomeIIIC">
            <img className="scaltimgDepositCircle" src={circleI} id="wel-img-id" alt="" />
          </div>

          <div className="imgWaymonterHomeIIIIC">
            <img className="scaltimgDepositCircle" src={circleII} id="wel-img-id" alt="" />
          </div>

          <div className="imgWaymonterHomeVC">
            <img className="scaltimgDepositCircle" src={circleII} id="wel-img-id" alt="" />
          </div>

        </div>


        <div className='marginT'>
          <Competitivegame />
          <Gamepromotion />
        </div>
        <br />
        <br />
        <MenuDown />
        <div className="section-footer mid-footer down-footer d-dev">
          <div className="section-footer-inner ">
            <Allgamecamps />
          </div>
        </div>
        <Footer />
        <div className="positionNav">
          <NavicationBar />
        </div>
      </div >
    </>
  )
}

export default Home;