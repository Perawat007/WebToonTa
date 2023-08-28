import React from "react";
const ContactUs = () => {
  return (
    <>
      <div className="vContactUS dd hide">
        <div className="xBG">
          <i className="fa-regular fa-user-headset"></i>
          <div className="xContactSpan">
            <span>ติดต่อพวกเรา</span>
          </div>
        </div>
        <div className="xContactListF">
          <div className="xRow">
            <div className="xIcon line">
              <img
                className="img-responsive"
                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/social/line.svg?v=27"
                alt="line"
              />
            </div>
            <div className="xText">
              Line
              <p>
                <a
                  href="https://line.me/ti/p/https://line.me/ti/p/~@siam855"
                  target="_blank#"
                >
                  @siam855
                </a>
              </p>
            </div>
          </div>
          <div className="xRow">
            <div className="xIcon phone">
              <img
                className="img-responsive"
                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/social/phone.svg?v=27"
                alt="phone"
              />
            </div>
            <div className="xText">
              Phone
              <p>
                <a href="tel:0936093038" target="_blank#">
                  0936093038
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="QrImages" className="">
        <div className="d-dev">
          <div className="qrContact-holder" data-type="line">
            <div className="qrContact-header">
              <span>line</span>
              <i
                data-type="line"
                className="fa fa-times closeQrFloat"
                aria-hidden="true"
              ></i>
            </div>
            <div className="qrContact-container">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/siam855-pub/backend/production/2023/05/85_1683170483744_phpQQJX9Q.png"
                alt="line"
              />
            </div>
          </div>
        </div>
        <div className="m-dev">
          <div className="contactUs-optionFour">
            <div className="fab-btn">
              <div className="xContactSpan text-uppercase">
                <img
                  className="xCIcon"
                  src="https://www.siam855.net/asset_web/img/icon/LiveChat.svg"
                  alt=""
                />
              </div>
            </div>
            <ul className="contactUs-of-list">
              <a href="https://line.me/ti/p/@siam855"></a>
              <div className="xRow" data-type="line">
                <a href="https://line.me/ti/p/@siam855">
                  <img
                    className="img-responsive"
                    src="https://www.siam855.net/asset_web/img/icon/ico-line.png"
                    alt=""
                  />
                </a>
                <div className="xText" id="Floatline">
                  <a href="https://line.me/ti/p/@siam855"></a>
                  <a target="_blank#" href="https://line.me/ti/p/@siam855">
                    Line
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
