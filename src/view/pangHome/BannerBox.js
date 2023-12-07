import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderH from './Slider/Slider';
import imgsport from '../../img/icon_bar/01/tab_menu_1.webp'
import imglive from '../../img/icon_bar/01/tab_menu_2.webp'
import imgslot from '../../img/icon_bar/01/tab_menu_3.webp'
import imgcard from '../../img/icon_bar/01/tab_menu_4.webp'

function BannerBox() {
  useEffect(() => {
    //DataGet();
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const SeeGameCamp = (codeGame) => {
    window.location.href = `Game/${codeGame}`;
}
  return (
    <>
      <div className="product-category mgt30 d-dev ">
        <a data-type="sport" className="list"
          style={{
            backgroundImage: `url(${imgsport})`,
          }} href="/Gameslot">
        </a>
        <a data-type="live" className="list "
          style={{
            backgroundImage: `url(${imglive})`,
          }}href="/Gamefishing">
        </a>
        <a data-type="slot" className="list"
          style={{
            backgroundImage: `url(${imgslot})`,
          }}href="/Gameskill">
        </a>
        <a data-type="card" className="list"
          style={{
            backgroundImage: `url(${imgcard})`,
          }} href="/Gametable">
        </a>
      </div>
    </>
  );
}


export default BannerBox;