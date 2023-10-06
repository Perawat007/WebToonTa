import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./PromotionPopup.css";
import "./dialogPromotion.css";
import imgGitI from "../../img/ver.2-20230915T140421Z-001/gift_1.png";
import imgGitII from "../../img/ver.2-20230915T140421Z-001/gift_2.png";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const PromotionPopup = (props) => {
  const { dataPromotion, onClick } = props
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const credit = localStorage.getItem("credit");
  const id = localStorage.getItem("id");
  const rank = localStorage.getItem("rank");

  //console.log(props);
  return (
    <>
      <div className="wrapperPromotion">
        <div className="containerPor">
          <div className="profile-card-2">
            <div>
              <br/>
              <br/>
              <br/>
              <br/>
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
              <img src={"https://relaxtimecafe.fun/images/" + dataPromotion.filename} alt="" />
            </div>
            <div className="mid-sectionPromotion">
              <div className="namePromotion font">เงื่อนไข</div>

              <div className="containerPromotion">
                <ImageList sx={{
                  width: 450, height: 300,
                  '@media (max-width: 768px)': {
                    width: '450',
                    height: '200',
                  },
                }} cols={1} rowHeight={164} variant="quilted">
                  <ImageListItem>
                    <h5 className="text-mutedNumberPromotion font" style={{ whiteSpace: 'pre-line' }}>{dataPromotion.details}</h5>
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
