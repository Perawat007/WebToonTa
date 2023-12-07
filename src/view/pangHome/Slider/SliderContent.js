import React, { useState, useEffect } from 'react';
import banner_01 from '../../../img/banner1.jpg'
import banner_02 from '../../../img/banner2.jpg'
import banner_03 from '../../../img/banner3.jpg'
import axios from '../../../api/axios';
import "./dialogcssPromotion.css";
function SliderContent({ activeIndex, sliderImage }) {

  const populargame = [
    {
      id: 1,
      img: banner_01
    },
    {
      id: 2,
      img: banner_02
    },
    {
      id: 3,
      img: banner_03
    },
    {
      id: 4,
      img: banner_01
    },
    {
      id: 5,
      img: banner_02
    },
    {
      id: 6,
      img: banner_03
    }
  ]

  const [data, setData] = useState([]);
  const [showPopupB, setShowPopupB] = useState(false);
  const [promotionName, setnamePromotion] = useState("");
  const [detailsPromotion, setdetailsPromotion] = useState("");
  const [imgPromotion, setimgPromotion] = useState("");
  const [idPromotion, setIdPromotion] = useState();
  const token = localStorage.getItem("token");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.post('post/getlistAbs/banner');
        //console.log(response.data.data);
        setData(response.data.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };

  }, []);

  //console.log(sliderImage);

  const clickPromotion = (namepromotion, details, nameImg, idPromotion) => {
    console.log(namepromotion);
    if (namepromotion === 'เติมเงินครั้งแรกรับไปเลย') {
      setnamePromotion(namepromotion);
      setdetailsPromotion(details);
      setimgPromotion(nameImg);
      setIdPromotion(idPromotion);
      if (isMobile) {
        getPromotion()
      } else {
        setShowPopupB(!showPopupB);
      }
    }
  }

  const style = {
    color: "red",
  };

  const getPromotion = () => {
    if (token) {
      window.location.href = `/Deposit`;
      setShowPopupB(false);
    } else {
      window.location.href = `/Login`;
      setShowPopupB(false);
    }
  }
  const togglePopup = () => {
    setShowPopupB(!showPopupB);
  };

  return (
    <>
      <section className='sectionSlider'>
        {data && (
          <>
            {data.map((slide, index) => (
              <div
                key={index}
                className={index === activeIndex ? "slides active" : "inactive"}
              >
                <img className="slide-image" src={"https://dogzilla.live/images/" + slide.filename} alt=""
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => clickPromotion(slide.namepromotion, slide.details, slide.filename, slide.id)} />
              </div>

            //   <div
            //   key={index}
            //   className={index === activeIndex ? "slides active" : "inactive"}
            // >
            //   <img className="slide-image" src={slide.img} alt="" />
            // </div>
            
            ))}
          </>
        )}
      </section>

      {showPopupB && (
        <div className="overlayPromotion">
          <div className="modalContainerPromotion">
            <div className="modalRightPromotion">
              <div className="contentPromotion">
                <p className="titleDialog font">คุณต้องการโปรโมทชั่นนี้ใช่หรือไม</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณากดปุ่มรับโปรโมชั่นเพื่อดำเนินการต่อ
                </h3>
                <h3 className="detailDialog font">
                  หมายเหตุ ถ้า Userยังไม่ได้Login ระบบจะพาไปหน้า Login
                </h3>
                <h3 className="detailDialog font">
                  ถ้า User ทำการ Login แล้วระบบจะพาไปหน้าที่เกี่ยวข้องกับโปรโมทชั่น
                </h3>
              </div>
              <div className="imgPromotion">
                <img src={"https://dogzilla.live/images/" + imgPromotion} alt="/" />
              </div>
              <div className="btnContainerPromotion">
                <button className="btnPrimaryPromotion" onClick={getPromotion}>
                  รับโปรโมชั่น
                </button>
                <button className="btnPrimaryPromotion" onClick={togglePopup}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>

  );
}

export default SliderContent;