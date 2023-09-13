import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "../../../api/axios";
import Headers from "../../headers";
import Mycard from "../../pangHome/Mycard";
import MenuHome from "../../pangHome/MenuHome";
import Allgamecamps from "../../pangHome/Allgamecamps";
import MenuDown from "../../pangHome/MenuDown";
import PaymentMethod from "../../pangHome/PaymentMethod";
import TopDown from "../../pangHome/TopDown";
import "../ListGame.css";
import Footer from "../../pangHome/FooTer/Footer";
export default function GameDogsila() {
  const [items, setItems] = React.useState([]);
  const token = localStorage.getItem("token");

  const [isPressed, setIsPressed] = React.useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "Unknown";
  };

  const mobileOS = getMobileOperatingSystem();
  React.useEffect(() => {
    DataGet();
  }, []);

  const DataGet = () => {
    axios
      .get("/post/game", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.message === "gameAll") {
          console.log(response.data.data);
          setItems(response.data.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
        localStorage.removeItem("token");
        window.location.reload();
      });
  };

  const PlayGame = (linkGame) => {
    axios
      .post("/post/token", "", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.message === "TokenOn") {
          const tokenEn = encodeURIComponent(token);
          if (linkGame !== null) {
            const link = linkGame + `?token=${tokenEn}`;
            if (mobileOS === 'Android') {
              window.open(link, "_blank");
          } else {
              window.open(link, "_self");
          }
          }
        }
      })
      .catch((error) => {
        console.log("error", error);
        localStorage.removeItem("token");
        window.location.reload();
      });
  };

  return (
    <>
      <div className="containerDogsila">
        <div className="main-content">
          <Mycard />
          <div id="topBar-holder" className="topBar-holder">
            <Headers />
            <MenuHome />
          </div>
          <div className="buttonToTop">
            <i className="fa-regular fa-arrow-up-to-line"></i>
          </div>
          <div className="common-holder" style={{ display: "block" }}>
            <div className="content-holder">
              <React.Fragment>
                <Container maxWidth="xl" sx={{ p: 2 }}>
                  <Box display={"flex"}>
                    <Box
                      flexGrow={1}
                      sx={{
                        width: 2,
                        height: "500px",
                        "@media (max-width: 414px)": {
                          height: 620,
                        },
                        "@media (max-width: 390px)": {
                          height: 620,
                        },
                        "@media (max-width: 375px)": {
                          height: 700,
                        },
                        "@media (min-width: 428px)": {
                          height: 600,
                        },
                        "@media (min-width: 1280px)": {
                          height: 750,
                        },
                      }}
                    ></Box>
                  </Box>
                  <div className="card-font">รายชื่อเกม</div>
                  <br />
                  <div className="game-container game vGameList">
                    <div className="list">
                      {items.map((row) => (
                        <div key={row.id} className="box">
                          <div
                            className="card-image"
                            role="img"
                            alt=""
                            style={{
                              backgroundImage: `url(${row.img})`,
                              transform: "scale(1)",
                            }}
                          ></div>
                          <img
                            src={row.img}
                            alt=""
                            style={{
                              cursor: "pointer",
                            }}
                          />
                          <span className="name">
                            <span>{row.namegame}</span>
                          </span>
                          <div className="provider-name">{row.namegame}</div>
                          <div className="box-play">
                            <div
                              className="button-play boxGoPlay"
                              data-gameid={row.providerCode}
                              data-name={row.namegame}
                              data-pid="191"
                              onClick={() => PlayGame(row.linkgame)}
                            >
                              เล่น
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Container>
              </React.Fragment>
            </div>
          </div>
        </div>
        <div>
          <div className="overlay-mobile"></div>
          <MenuDown />
          <div className="section-footer mid-footer d-dev">
            <div className="section-footer-inner">
              <Allgamecamps />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
