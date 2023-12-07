import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './view/HomePang/Home';
import GameAll from './view/SeeGame/GameAll';
import GameDogsila from './view/SeeGame/DogsilaGame/GameDogsila';
import LoginBar from './api/Login/Login';
import RegiterBar from './api/Regiter/Regiter';
import AddMoney from './api/AddMoney/AddMoney';
import AddMoneyPromotion from './api/AddMoneyPromotion/AddMoneyPromotion';
import WitdrawTa from './api/WitdrawTa/WitdrawTa';
import axios from './api/axios';
import BannerBox from './view/pangHome/Slider/Slider';
import RegiterBarForm from './api/RegiterForm/RegiterForm';
import { Link } from 'react-router-dom';
import TestShow from './view/testshow';
import HeadersII from './view/headersII';
import PromotionShow from './view/PromotionAll/PromotionShow';
import RewardShowBronze from './view/RewardClub/RewardShow';
import GameAllType from './view/SeeGame/TypeGame/GameAllType';
import DataUser from './api/DataUser/DataUser'
import GameTypeSlot from './view/SeeGame/SlotGame/GameTypeSlot';
import ResetPassword from './api/ResetPassword/ResetPassword';
import ForgotPassword from './api/ForgotPassword/ForgotPassword';
import StatusWitdrawTa from './api/StatusWithDraw/StatusWitdrawTa';
import AddPromotionMoney from './api/AddMoneyPromotion/AddPromotionMoney';
import CouponToonta from './api/Coupon/CouponToonta';
function App() {
  const token = localStorage.getItem("token");
  const styles = {
    backgroundColor: '#7110af',
  };

  if (token) {
    const pathA = window.location.pathname;
    const pathSegments = pathA.split('/');
    if (pathSegments[1] === "Login") {
      window.location.href = "/Home";
    } else if (pathSegments[1] === "regiteruser") {
      window.location.href = "/Home";
    } else if (pathSegments[1] !== "DepositPromotion" && pathSegments[1] !== "PromotionShow"){
      localStorage.removeItem("%rootProDataN%");
    }
  }

  if (!token) {
    const pathA = window.location.pathname;
    const pathSegments = pathA.split('/');

    if (pathSegments[1] === "Deposit") {
      window.location.href = "/Login";
    }
    if (pathSegments[1] === "DataUser") {
      window.location.href = "/Login";
    }
    if (pathSegments[1] === "ResetPassword") {
      window.location.href = "/Home";
    }
    if (pathSegments[1] === "DepositPromotion") {
      window.location.href = "/Home";
    }
    if (pathSegments[1] === "CouponWebToonta") {
      window.location.href = "/Home";
    }
  }

  return (
    <div className='Home-container'>
      <div>
        {(() => {
          if (token) {
            return (
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/:name" element={<GameAll />} />
                  <Route path="/GameDogzilla" element={<GameDogsila />} />
                  <Route path="/Deposit" element={<AddMoneyPromotion />} />
                  <Route path="/DataUser" element={<DataUser />} />
                  <Route path="/Witdraw" element={<WitdrawTa />} />
                  <Route path="/PromotionShow" element={<PromotionShow />} />
                  <Route path="/RewardShow/:nameCard" element={<RewardShowBronze />} />
                  <Route path="/Game/:typegame" element={<GameAllType />} />
                  <Route path="/Gameslot" element={<GameTypeSlot />} />
                  <Route path="/Gamefishing" element={<GameAllType />} />
                  <Route path="/Gametable" element={<GameAllType />} />
                  <Route path="/Gameskill" element={<GameAllType />} />
                  <Route path="/ResetPassword" element={<ResetPassword />} />
                  <Route path="/checkStatusWithDraw" element={<StatusWitdrawTa />} />
                  <Route path="/DepositPromotion/:idPromotion" element={<AddPromotionMoney/>} />
                  <Route path="/CouponWebToonta" element={<CouponToonta/>} />
                </Routes>
              </>
            );
          } else {
            return (
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/:name" element={<GameAll />} />
                  <Route path="/GameDogzilla" element={<GameDogsila />} />
                  <Route path="/Login" element={<LoginBar />} />
                  <Route path="/Register" element={<RegiterBar />} />
                  <Route path="/ForgotPassword" element={<ForgotPassword/>} />
                  <Route path="/PromotionShow" element={<PromotionShow />} />
                  <Route path="/RewardShow" element={<RewardShowBronze />} />
                  <Route path="/Gameslot" element={<GameTypeSlot />} />
                  <Route path="/Gamefishing" element={<GameAllType />} />
                  <Route path="/Gametable" element={<GameAllType />} />
                  <Route path="/Gameskill" element={<GameAllType />} />
                  <Route path="/ResetPassword" element={<ResetPassword />} />
                </Routes>
              </>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default App;

{/* <div className="bottom-nav font">
        <Link to="/" className="nav-item font">
          <span className="icon-promotion"></span>
          .บ้าน
        </Link>
        <Link to="/about" className="nav-item font">
          <span className="icon icon-promotion"></span>
          .โปรโมชั่น
        </Link>
        <Link to="/contact" className="nav-item font">
          <span className="icon icon-deposit"></span>
          .ฝากเงิน
        </Link>
        <Link to="/contact" className="nav-item font">
        <span className="icon icon-profile"></span>
          .ข้อมูล
        </Link>
      </div>*/}