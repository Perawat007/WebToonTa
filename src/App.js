import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './view/Home';
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
import PromotionShow from './view/PromotionAll/PromotionShow';
import RewardShowBronze from './view/RewardClub/RewardShow';
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
    }
  }

  if (!token) {
    const pathA = window.location.pathname;
    const pathSegments = pathA.split('/');

    if (pathSegments[1] === "Deposit") {
      window.location.href = "/Home";
    }
  }

  return (
    <div>
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
                    <Route path="/GameDogsila" element={<GameDogsila />} />
                    <Route path="/Deposit" element={<AddMoneyPromotion />} />
                    <Route path="/Witdraw" element={<WitdrawTa />} />
                    <Route path="/PromotionShow" element={<PromotionShow />} />
                    <Route path="/RewardShow/:nameCard" element={<RewardShowBronze />} />
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
                    <Route path="/GameDogsila" element={<GameDogsila />} />
                    <Route path="/Login" element={<LoginBar />} />
                    <Route path="/Register" element={<RegiterBar />} />
                    <Route path="/PromotionShow" element={<PromotionShow />} />
                    <Route path="/RewardShow" element={<RewardShowBronze />} />
                  </Routes>
                </>
              );
            }
          })()}
        </div>
      </div>
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
    </div>
  );
}

export default App;