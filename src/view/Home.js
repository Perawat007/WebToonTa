import React from 'react';
import Headers from './headers';
import MenuHome from './pangHome/MenuHome';
import BannerBox from './pangHome/BannerBox';
import GameShow from './pangHome/GameShow';
import WinGame from './pangHome/WinGame';
import Competitivegame from './pangHome/competitivegame';
import Gamepromotion from './pangHome/gamepromotion';
import Allgamecamps from './pangHome/Allgamecamps';
import Mycard from './pangHome/Mycard';
import MenuDown from './pangHome/MenuDown';
import { useTheme } from '@mui/material/styles';
import PaymentMethod from './pangHome/PaymentMethod';
import Box from '@mui/material/Box';
import TopDown from './pangHome/TopDown';
import NavicationBarHome from './NavicationBarHome/navicationbarHome';
import './Login.css'
import './cartoon.css'
import Footer from './pangHome/FooTer/Footer';
import Arkssdider from './pangHome/Slider/Slider'
import GamePlay from './SeeGame/GamePlay';
import GameRecommend from './pangHome/GameRecommend';
import RewardShowBronze from './RewardClub/RewardShow';
import cartoon from "../img/2.png";
import cartoonII from "../img/3.png";
import cartoonIII from "../img/6.png";
import circleI from "../img/circle1.png";
import rewardfile from "../img/reward/rewardfileB.png"
import SitiGame from './pangHome/SitiGame';
import axios from '../api/axios';
import card1 from "../img/reward/card1.png"
import card2 from "../img/reward/card2.png"
import card3 from "../img/reward/card3.png"
import card4 from "../img/reward/card4.png"
function Home() {
  const theme = useTheme();
  const [showtoolBar, setshowtoolBar] = React.useState(true);
  const [showtoolBarlogincompreat, setshowtoolBarLogincompreat] = React.useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = React.useState([])
  const [showPopupA, setShowPopup] = React.useState(false);
  const [datacard, setDatacard] = React.useState('')
  React.useEffect(() => {
    if (token) {
      setshowtoolBar(false)
      setshowtoolBarLogincompreat(true)
    } else {
      setshowtoolBar(true)
      setshowtoolBarLogincompreat(false)
    }
  }, []);

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
    setShowPopup(true);
    setDatacard(dataCard);
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

      <nav id="topBar-holder" className="topBar-holder">
        <Headers />
      </nav>
      <div className="main-content">
        {/* <Mycard /> */}
        <div className="pg-home common-holder">
          <div className="section-banner">
            <div className="banner box slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable">
                <div id="slide_main" className="slick-track">
                  <Arkssdider />
                </div>
              </div>
            </div>
            <div className="top-player box d-dev sp-box">
            </div>
          </div>
          <div className="imgWaymonterHome">
            <img className="scaltimgmonterHome" src={cartoon} id="wel-img-id" alt="" />
          </div>

          <div className="imgcircleI">
            <img className="scaltimgcircleI" src={circleI} id="wel-img-id" alt="" />
            <img className="scaltimgcircleII" src={circleI} id="wel-img-id" alt="" />
          </div>

          <div className="content-holder">
            <BannerBox />
            {showtoolBar && (
              <div className='control-btn'>
                <button className="custom-btn btn-13 font" onClick={cilckRegiter}>ลงทะเบียน</button>
                <button className="custom-btn btn-14 font" onClick={cilckLogin}>ลงชื่อเข้าใช้</button>
              </div>
            )}

            {showtoolBarlogincompreat && (
              <div className='control-btn'>
                <button className="custom-btn btn-13 font" onClick={goDeposit}>ฝาก</button>
                <button className="custom-btn btn-14 font" onClick={gowithdraw}>ถอน</button>

              </div>
            )}
            <div className='control-promo'>
              <SitiGame />
            </div>
            <div className='marginWeb'>
              <GameShow />
            </div>
            <div className='marginWeb'>
              <GameRecommend />
            </div>
            <div className="imgWaymonterHomeII">
              <img className="scaltimgmonterHomeII" src={cartoonII} id="wel-img-id" alt="" />
            </div>

            <div className="imgcircleIII">
              <img className="scaltimgcircleIII" src={circleI} id="wel-img-id" alt="" />
            </div>

            <div className="imgcircleIIII">
              <img className="scaltimgcircleIIII" src={circleI} id="wel-img-id" alt="" />
            </div>
            <div className='' style={{ marginTop: '-50px' }}>
              <WinGame />
            </div>
            <div data-type="android">
              <div className='a-davPC'>
                <img className=" download-bannerAbs"
                  src={rewardfile} alt="benner-img" />

                <div className="image-grid">
                  <button onClick={() => handleImageClick('Bronze')}>
                    <img className="img-responsive download-bannerAbs imgCardAbs1" src={card1} alt="benner-img" />
                    <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Bronze</h4>
                  </button>
                  <button onClick={() => handleImageClick('Silver')}>
                    <img className="img-responsive download-bannerAbs imgCardAbs2" src={card2} alt="benner-img" />
                    <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Silver</h4>
                  </button>
                  <button onClick={() => handleImageClick('Gold')}>
                    <img className="img-responsive download-bannerAbs imgCardAbs3" src={card3} alt="benner-img" />
                    <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Gold</h4>
                  </button>
                  <button onClick={() => handleImageClick('Diamond')}>
                    <img className="img-responsive download-bannerAbs imgCardAbs4" src={card4} alt="benner-img" />
                    <h4 className='font' style={{ color: '#FF9900', marginTop: '10px' }}>Diamond</h4>
                  </button>
                </div>
              </div>


              <img className="img-responsive download-bannerAbs a-davMB"
                src="https://websitehui.s3.ap-southeast-1.amazonaws.com/pic_test-02.png"
                alt="benner-img"
                onClick={() => handleImageClick('Silver')} />
            </div>

            <div className='marginT'>
              <Competitivegame />
              <div className="imgWaymonterHomeIII">
                <img className="scaltimgmonterHomeIII" src={cartoonIII} id="wel-img-id" alt="" />
              </div>
              <div className="imgcircleV">
                <img className="scaltimgcircleV" src={circleI} id="wel-img-id" alt="" />
              </div>

              <Gamepromotion />

            </div>

          </div>
          <div className="imgWaymonterHomeIIIMobile">
            <img className="scaltimgmonterHomeIIIMobile" src={cartoonIII} id="wel-img-id" alt="" />
          </div>
        </div>

        <MenuDown />
        <div className="section-footer mid-footer d-dev">
          <div className="section-footer-inner">
            <Allgamecamps />
          </div>
        </div>
        <Footer />
        <div className="positionNav">
          <NavicationBarHome />
        </div>

      </div>
    </>
  )
}

export default Home;