import React from "react";
import "../pangHome/test.css";
const TopDown = () => {
  return (
    <>
      <div className="mob-bottom-section L-dev">
        <div className="mob-bottom-menu">
          <a className="box active" data-type="home" href="/Home">
            <div className="icon-holder">
              <img className="logoTopDown" src="asset_web/img/toonta.png" alt="logo"/>
            </div>
            <div>บ้าน</div>
          </a>
          <a className="box" data-type="promotions" href="/promotions">
            <div className="icon-holder">
              <span className="icon icon-promotion"></span>
            </div>
            <div>โปรโมชั่น</div>
          </a>
          <a className="box" href="/dashboard/deposit" data-type="dashboard">
            <div className="icon-holder">
              <span className="icon icon-deposit"></span>
            </div>
            <div>ฝากเงิน</div>
          </a>
          <a className="box" href="/dashboard/deposit" data-type="dashboard">
            <div className="icon-holder">
              <span className="icon icon-deposit"></span>
            </div>
            <div>แชทสด</div>
          </a>
          <a className="box" href="/mob-profile" data-type="dashboard">
            <div className="icon-holder">
              <span className="icon icon-profile"></span>
            </div>
            <div>ข้อมูลส่วนตัว</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default TopDown;
