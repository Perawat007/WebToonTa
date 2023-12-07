import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./DataUser.scss";
import "./DataUser.css";
import "./dialogDataUser.css";
import imgbronze from "../../img/ver.2-20230915T140421Z-001/icon_bronze.png";
import imgdaimond from "../../img/ver.2-20230915T140421Z-001/icon_daimond.png";
import imggold from "../../img/ver.2-20230915T140421Z-001/icon_gold.png";
import imgnew from "../../img/ver.2-20230915T140421Z-001/icon_new.png";
import imgsilver from "../../img/ver.2-20230915T140421Z-001/icon_silver.png";
import coupon from "../../img/icon/icon.webp"
import { Link } from 'react-router-dom';

const DataUser = () => {
  const [accountNumber, setaccountNumber] = useState("");
  const [accountName, setaccountName] = useState("");
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const credit = localStorage.getItem("credit");
  const id = localStorage.getItem("id");
  const [data, setData] = useState([]);
  const [dataimgBank, setdataimg] = useState("");
  const [imgRank, setimgRank] = useState();
  const rank = localStorage.getItem("rank");
  const [namePromotion, setnamePromotion] = useState("");
  const turnover = localStorage.getItem("%rootTroot%");
  useEffect(() => {
    if (token) {
      if (data.length === 0) {
        axios.get("/list_user/" + id, "", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {  // ใส่ async ที่นี่
            setaccountName(response.data.data[0].accountName)
            setaccountNumber(response.data.data[0].accountNumber)
            GetData(response.data.data[0].bank)
            setnamePromotion(response.data.data[0].promotionuser)
            switch (response.data.data[0].userrank) {
              case "Bronze":
                setimgRank(imgbronze)
                break;
              case "Silver":
                setimgRank(imgsilver)
                break;
              case "Gold":
                setimgRank(imggold)
                break;
              case "Daimond":
                setimgRank(imgdaimond)
                break;
              case "NewMember":
                setimgRank(imgnew)
                break;
              default:
                setimgRank(imgbronze)
                break;
            }
          })
          .catch((error) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("id");
            localStorage.removeItem("credit");
            window.location.href = "/";
            console.log("error", error);
          });
      }
    } else {
      window.location.href = "/Login";
    }
  }, []);

  const GetData = async (nameBank) => {
    const response = await axios.post("/post/GetOneBank", {  // ใช้ await ได้ที่นี่
      nameBank: nameBank,
    });
    setdataimg(response.data.data[0].images)
  }

  const WebCoupon = () => {
    window.location.href = "/CouponWebToonta";
  }
  return (
    <>
      <div className="wrapperDataUser">
        <div className="containerPor">
          <div className="containerProfile">
            <div className="profile-card-1">
              <div className="img">
                <img src={imgRank} alt="" />
              </div>
              <div className="imgcoupon">
                <img src={coupon} alt="" onClick={WebCoupon}/>
              </div>
              <div className="mid-section">
                <div className="titleDataUser font">ข้อมูลบัญชี</div>
                <div className="nameData font">username : {user}</div>

                <div>
                  <h5 className="texttitle font" style={{}}>ระดับ : {rank}</h5>
                </div>
                <div className="description font">เปลี่ยนรหัสผ่าน <a className="font" href="/ResetPassword">คลิก</a></div>

                <div className="line"></div>
                <div className="stats">
                  <div className="stat font">{credit}
                    <h4 className="subtext font">ยอดเงินคงเหลือ</h4>
                  </div>
                  <div className="stat font">{turnover}
                    <h4 className="subtext font">ยอดผู้เล่นค้างเล่น</h4>
                  </div>
                </div>
                <div className="nearby-userDataUser">
                  <div >
                    <div className="headerUserData">
                      <img
                        src={dataimgBank}
                        alt="user"
                        className="profile-photo-lgDataUser"
                      />
                    </div>
                  </div>
                  <div className="positiontextDataUser">
                    <div>
                      <h5 className="nameDataUser font">{accountName}</h5>
                    </div>
                    <div>
                      <h5 className="text-mutedNumberUser font">{accountNumber}</h5>
                    </div>
                  </div>
                </div>
                <div className="positiontextsubpost">
                  <h4 className="font colorfont">*ต้องการเปลี่ยนบัญชี กรุณา</h4>
                  <h4 className="font colorfont">ติดต่อฝ่ายบริการลูกค้า</h4>
                </div>
                <br />
                <div className="imgฺGound">
                  <div className="statsII">
                    <div className="stat font">
                      <h3 className="subtext font">โปรโมชั่นที่รับ</h3>
                      <h5 style={{ color: '#ffbb00' }}>
                        <Link style={{ color: '#ffbb00' }} className="font" to="/PromotionShow">{namePromotion}</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DataUser;
