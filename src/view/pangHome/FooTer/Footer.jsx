import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footercss.css";
import TopDown from "../TopDown";
const Footer = () => {
  const bacn = [
    {
      id: 1,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-wm.png",
    },
    {
      id: 2,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-sa.png",
    },
    {
      id: 3,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-allbet.png",
    },
    {
      id: 4,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-sexy.png",
    },
    {
      id: 5,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-ae.png",
    },
    {
      id: 6,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-mgp-live.png",
    },
    {
      id: 7,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-dream.png",
    },
    {
      id: 8,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-pretty.png",
    },
    {
      id: 9,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-n2live.png",
    },
    {
      id: 10,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-ea.png",
    },
    {
      id: 11,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-eg.png",
    },
    {
      id: 12,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-xtreme-gaming.png",
    },
    {
      id: 13,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-pt-live.png",
    },
    {
      id: 14,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-pp-live.png",
    },
    {
      id: 15,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-ebet.png",
    },
    {
      id: 16,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/partnership-logo-ebet.png",
    },
  ];

  const Bank = [
    {
      id: 1,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-bay.png",
    },
    {
      id: 2,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-scb.png",
    },
    {
      id: 3,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-bbl.png",
    },
    {
      id: 4,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-ktb.png",
    },
    {
      id: 5,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-kbank.png",
    },
    {
      id: 6,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-kk.png",
    },
    {
      id: 7,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-cimb.png",
    },
    {
      id: 8,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-baac.png",
    },
    {
      id: 9,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-gsb.png",
    },
    {
      id: 10,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-sc.png",
    },
    {
      id: 11,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-lhb.png",
    },
    {
      id: 12,
      img: "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-ttb.png",
    },
  ];

  return (
    <>
      <footer
        className="text-center text-lg-start text-white footerRec"
        style={{ backgroundColor: "#5105b9" }}
      >
        <section >
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h4
                className="text-uppercase mb-4 font-weight-bold font"
                style={{ color: "#00BFFF" }}
              >
                เว็บเกมออนไลน์อันดับ 1
              </h4>
              <h5 className="font">
                Toonta ผู้นำด้านเกมครบวงจร
                เรารวบรวมเกมไว้อย่างครบครัน
                ทั้งเกมสล็อต ยิงปลา ฯลฯ นำโดย
                PG slot Dogzilla และค่ายเกมชั้นนำ
                ซึ่งรวมเกมอีกกว่า 10,000 เกม
              </h5>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5
                className="text-uppercase mb-4 font-weight-bold"
                style={{ color: "#00BFFF" }}
              >
                Tags
              </h5>
              <div className="d-flex flex-wrap">
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD", color: "#FFFFFF" }}
                >
                  PGSLOT
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  พีจี
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  สล็อต
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  Dogzilla
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  AMB
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  ยิงปลา
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  เกมไพ่
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  SAgaming
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  ออนไลน์ คาสิโน
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  casino
                </a>
                <a
                  href="/"
                  className="btn btn-sm btn-primary m-1 font"
                  style={{ backgroundColor: "#0000CD ", color: "#FFFFFF" }}
                >
                  online
                </a>
              </div>
            </div>
            <hr className="w-100 clearfix d-md-none" />

            {/* <hr className="w-100 clearfix d-md-none" /> 
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5
                className="text-uppercase mb-4 font-weight-bold"
                style={{ color: "#00BFFF" }}
              >
                Partnerships
              </h5>
              {bacn.map((row) => (
                <div
                  key={row.id}
                  className="btn  btn-floating m-1"
                  style={{ width: "50px" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab">
                    <img
                      alt=""
                      className="fab"
                      src={row.img}
                      style={{ scale: "150%" }}
                    />
                  </i>
                </div>
              ))}
            </div>*/}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5
                className="text-uppercase mb-4 font-weight-bold"
                style={{ color: "#00BFFF" }}
              >
                Payment Accepted
              </h5>
              {Bank.map((row) => (
                <div
                  key={row.id}
                  className="btn  btn-floating m-1"
                  style={{ width: "50px" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab">
                    <img
                      alt=""
                      className="fab"
                      src={row.img}
                      style={{ scale: "150%" }}
                    />
                  </i>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 TOONTA All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
