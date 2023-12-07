import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./PromotionPopup.css";
import "./dialogPromotion.css";
import imgGitI from "../../img/ver.2-20230915T140421Z-001/gift_1.png";
import imgGitII from "../../img/ver.2-20230915T140421Z-001/gift_2.png";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import HTMLContent from "./HTMLContent";

const PromotionPopup = (props) => {
  const { dataPromotion, onClick } = props
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const credit = localStorage.getItem("credit");
  const id = localStorage.getItem("id");
  const rank = localStorage.getItem("rank");

  const [formattedContent, setFormattedContent] = useState("");

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(dataPromotion.details, "text/html");
    // หาข้อความที่ต้องการเปลี่ยน font
    const targetElements = doc.body.getElementsByTagName('*');
    // เปลี่ยน font ของข้อความที่ค้นพบ
    for (let element of targetElements) {
      element.classList.add("fontPromotion");
      element.style.lineHeight = "1.2";
  }
    setFormattedContent(doc.body.innerHTML);
  }, []);

  //console.log(props);
  const htmlContent = dataPromotion.details;
  return (
    <>
      <div className="wrapperPromotion">
        <div className="containerPor">
          <div className="profile-card-2">
            <div>
              <br />
              <br />
              <br />
              <br />
              <button className="close-button" onClick={onClick}>
                &times; {/* This is the "×" character for the close icon */}
              </button>
            </div>
            {/* <div className="heantPopup">
               <div className="textFramePromotion">
                  <div className="imgContainer">
                    <img className="imgGitIT" src={imgGitI} id="wel-img-id" alt="" />
                    <img className="imgGitIIT" src={imgGitII} id="wel-img-id" alt="" />
                  </div>
                  <div className="title-textPromotion">
                    <div className="font">โปรโมชั่น</div>
                  </div>
                </div> 
            </div> */}
            {/* <div className="titlePromotion textButtonPromotion font">{dataPromotion.namepromotion}</div> */}
            <div className="imgPromotionPopup">
              <img src={"https://dogzilla.live/images/" + dataPromotion.filename} alt="" />
            </div>
            <div className="mid-sectionPromotion">
              {/* <div className="namePromotion font">เงื่อนไข</div> */}

              <div className="containerPromotion">
                <ImageList sx={{
                  '@media (max-width: 768px)': {
                    width: '450',
                    height: '450',
                  },
                }} cols={1} rowHeight={164} variant="quilted">
                  <ImageListItem>
                    {/* <h5 className="text-mutedNumberPromotion font" style={{ whiteSpace: 'pre-line' }}>{dataPromotion.details}</h5> */}
                    <div className="text-mutedNumberPromotion">
                      <div className='' dangerouslySetInnerHTML={{ __html: formattedContent }} />
                    </div>
                  </ImageListItem>
                </ImageList>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default PromotionPopup;
