import React from "react";
import "./RewardShow.css";
import picpic from "../../img/banner2.png";
import imgMoney from "../../img/banner3.png"
import imgpanpa from "../../img/banner1.png"
import imgcartton from "../../img/reward/toad.png"
const RewardShowBronze = (card) => {
  return (
    <>
      <div className="imgWayReward">
        <img className="scaltimgReward" src={imgcartton} id="wel-img-id" alt="" />
      </div>

      {(() => {
        switch (card.card) {
          case 'Bronze':
            return <>
              <div>
                <div className="containerRe">
                  <div className="blog-item">
                    <div className="blog-image1 blog-imageI"></div>
                    <div className="blog-content font">
                      <h3 className="Rh3 font">Gronze</h3>
                      <p className="Rp font"> สิทธิประโยชน์มากมาย สำหรับผู้ถือครอง</p>
                      <p className="Rp font"> บัตรกับเรา Toonta Reward Club</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          case 'Silver':
            return <>
              <div>
                <ul className="conrainerRe">
                  <li className="liPromotion">
                    <div className="containerRe">
                      <div className="blog-item">
                        <div className="blog-image2"></div>
                        <div className="blog-content">
                          <h3 className="Rh3 font">Silver</h3>
                          <p className="Rp font"> สิทธิประโยชน์มากมาย สำหรับผู้ถือครอง</p>
                          <p className="Rp font"> บัตรกับเรา Toonta Reward Club</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          case 'Gold':
            return <>
              <div>
                <ul className="conrainerRe">
                  <li className="liPromotion">
                    <div className="containerRe">
                      <div className="blog-item">
                        <div className="blog-image3"></div>
                        <div className="blog-content">
                          <h3 className="Rh3 font">Gold</h3>
                          <p className="Rp font"> สิทธิประโยชน์มากมาย สำหรับผู้ถือครอง</p>
                          <p className="Rp font"> บัตรกับเรา Toonta Reward Club</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          case 'Diamond':
            return <>
              <div>
                <ul className="conrainerRe">
                  <li className="liPromotion">
                    <div className="containerRe">
                      <div className="blog-item">
                        <div className="blog-image4"></div>
                        <div className="blog-content">
                          <h3 className="Rh3 font">Diamond</h3>
                          <p className="Rp font"> สิทธิประโยชน์มากมาย สำหรับผู้ถือครอง</p>
                          <p className="Rp font"> บัตรกับเรา Toonta Reward Club</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          default:
            <ul className="ulPromotion">
              <li className="liPromotion">
                <img src={imgpanpa} alt="" />
                <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
              </li>
              <li className="liPromotion">
                <img className="settingImg" src={picpic} alt="" />
                <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>ผู้เล่นใหม่</h3>
                <p className="font">สมาชิกใหม่รับโบนัสต้อนรับพิเศษจากยอดเติมเงิน 30% จากยอดเติม พิเศษที่ ToonTa เท่านั้น!</p>
              </li>
              <li className="liPromotion">
                <img src={imgMoney} alt="" />
                <h3 className="h3Promotion font" style={{ color: "#FFFFFF" }}>เล่นเสียมีคืน</h3>
                <p className="font">เล่นเสียไม่เป็นไร เรามียอดคืนเพื่อให้ผู้เล่นได้แก้มือ</p>
              </li>
            </ul>
        }
      })()}
    </>
  );
};
export default RewardShowBronze;