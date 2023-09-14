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
import PaymentMethod from '../pangHome/PaymentMethod';
import Box from '@mui/material/Box';
import TopDown from '../pangHome/TopDown';
import NavicationBarHome from '../NavicationBarHome/navicationbarHome';
import NavicationBar from '../NavicationBar/navicationbar';
import './Login.css'
import '../cartoon.css'
import Footer from '../pangHome/FooTer/Footer';
import Arkssdider from '../pangHome/Slider/Slider'
import GamePlay from '../SeeGame/GamePlay';
import GameRecommend from '../pangHome/GameRecommend';
import RewardShowBronze from '../RewardClub/RewardShow';
import cartoon from "../../img/2.png";
import cartoonII from "../../img/3.png";
import cartoonIII from "../../img/6.png";
import circleI from "../../img/circle1.png";
import rewardfile from "../../img/reward/rewardfileB.png"
import SitiGame from "../pangHome/SitiGame"
import axios from '../../api/axios';
import card1 from "../../img/reward/card1.png"
import card2 from "../../img/reward/card2.png"
import card3 from "../../img/reward/card3.png"
import card4 from "../../img/reward/card4.png"
import announce from "../../img/icon_bar/announce_for_PC.png"
import imgDeposit from "../../img/icon_bar/DepositCartoon.png"
import imgWitdraw from "../../img/icon_bar/WitdrawCartoon.png"
import style from './style.scss'
import './styleweb.css'
function Home() {
  const theme = useTheme();
  const [showtoolBar, setshowtoolBar] = React.useState(true);
  const [showtoolBarlogincompreat, setshowtoolBarLogincompreat] = React.useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = React.useState([])
  const [showPopupA, setShowPopup] = React.useState(false);
  const [datacard, setDatacard] = React.useState('')

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

    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % tickerItems.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };

  }, [tickerItems.length]);

  const cilckRegiter = () => {
    window.location.href = `/Register`;
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

          <ul className="uL">
            <li className="nt-item LII font"><span className="new font">Welcome</span>ยินดีต้อนรับทุกท่าน สู่เว็บ ToonTa ศูนย์รวมเกมออนไลน์ที่ดีที่สุดในประเทศไทย. </li>
            <li className="nt-item LII font"><span className="strategy font">Promotion</span>เติมเงินครั้งแรกรับไปเลย 30% โบนัสจากยอดเติมครั้งแรก. </li>
            <li className="nt-item LII font"><span className="racing font">New</span>เล่นเสียไม่เป็นไร เรามียอดคืนสูงสุดถึง 70% ของยอดเสีย. </li>
            <li className="nt-item LII font"><span className="new font">Welcome</span>ยินดีต้อนรับทุกท่าน สู่เว็บ ToonTa ศูนย์รวมเกมออนไลน์ที่ดีที่สุดในประเทศไทย. </li>
            <li className="nt-item LII font"><span className="strategy font">Promotion</span>เติมเงินครั้งแรกรับไปเลย 30% โบนัสจากยอดเติมครั้งแรก. </li>
            <li className="nt-item LII font"><span className="racing font">New</span>เล่นเสียไม่เป็นไร เรามียอดคืนสูงสุดถึง 70% ของยอดเสีย. </li>
          </ul>
        </div>
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
              <img className="img-responsive download-bannerAbs imgCardAbs1 shadowImage" src={card1} alt="benner-img" />
              <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Bronze</h4>
            </button>
            <button onClick={() => handleImageClick('Silver')}>
              <img className="img-responsive download-bannerAbs imgCardAbs2 shadowImage" src={card2} alt="benner-img" />
              <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Silver</h4>
            </button>
            <button onClick={() => handleImageClick('Gold')}>
              <img className="img-responsive download-bannerAbs imgCardAbs3 shadowImage" src={card3} alt="benner-img" />
              <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Gold</h4>
            </button>
            <button onClick={() => handleImageClick('Diamond')}>
              <img className="img-responsive download-bannerAbs imgCardAbs4 shadowImage" src={card4} alt="benner-img" />
              <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Diamond</h4>
            </button>
          </div>
        </div>
        <div className='a-davMB'>
          <img className="download-bannerAbs"
            src="https://websitehui.s3.ap-southeast-1.amazonaws.com/bg_card_test.png"
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

        <div className='marginT'>
          <Competitivegame />
          {/* <div className="imgWaymonterHomeIII">
                <img className="scaltimgmonterHomeIII" src={cartoonIII} id="wel-img-id" alt="" />
              </div>
              <div className="imgcircleV">
                <img className="scaltimgcircleV" src={circleI} id="wel-img-id" alt="" />
              </div> */}
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
      </div>
    </>
  )
}

export default Home;