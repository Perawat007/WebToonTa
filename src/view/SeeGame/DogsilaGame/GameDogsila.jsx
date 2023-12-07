import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "../../../api/axios";
import Headers from "../../headersII";
import Mycard from "../../pangHome/Mycard";
import MenuHome from "../../pangHome/MenuHome";
import Allgamecamps from "../../pangHome/Allgamecamps";
import MenuDown from "../../pangHome/MenuDown";
import PaymentMethod from "../../pangHome/PaymentMethod";
import TopDown from "../../pangHome/TopDown";
import "../ListGame.css";
import Footer from "../../pangHome/FooTer/Footer";
import PaginationJS from "../Pagination";
import cartoon from '../../../img/3.png';
import NavicationBar from "../../NavicationBar/navicationbar";
export default function GameDogsila() {
  const [items, setItems] = React.useState([]);
  const token = localStorage.getItem("token");
  const [show, setShow] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const [data, setData] = React.useState([])
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
    if (token) {
      if (data.length === 0) {
          axios.post("/post/token", '', {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          })
              .then(response => {
                  setData(response.data.data);
              })
              .catch(error => {
                  localStorage.removeItem("token")
                  localStorage.removeItem("user")
                  window.location.href = "/";
                  console.log('error', error)
              }
              );
      }
  }
    DataGet();
  }, []);

  const DataGet = () => {
    axios.get("/post/game", {
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
    if (token){
      axios.post("/post/token", "", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.message === "TokenOn") {
          const tokenEn = encodeURIComponent(token);
          console.log(linkGame)
          if (linkGame !== null) {
            const link = linkGame + `?token=${tokenEn}`;
            if (mobileOS === 'Android') {
              window.open(link, "_blank");
            } else {
              window.open(link, "_self");
            }
          }
        } else {
          setShow(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
        localStorage.removeItem("token");
        window.location.reload();
      });
    } else {
      setShow(true);
    }
  };

  const BackPang = () => {
    window.location.href = `/`;
  }


  const h4Style = {
    color: 'white',
    display: 'inline-block',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const handleClose = () => {
    setShow(false);
  };

  const cilckLogin = () => {
    window.location.href = `/Login`;
  }
  return (
    <>
      {show && (
        <div className="overlayLoginGame">
          <div className="imgLoginGame">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerLoginGame">
            <div className="modalRightLoginGame">
              <div className="contentLoginGame">
                <p className="titleDialog font">คุณยังไม่ได้ Login</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณา Login เพื่อเข้าเล่นเกม
                </h3>
              </div>
              <div className="btnContainerLoginGame">
                <button className="btnPrimaryLoginGame font" onClick={cilckLogin}>
                  ไปหน้า Login
                </button>
                <button className="btnPrimaryLoginGame font" onClick={handleClose}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <Headers />
      </div>
      <div className="pg-home common-holder">
        <React.Fragment>
          <Container maxWidth="xl" sx={{ p: 3 }}>
          <div className="card-font">รายชื่อเกม</div>
            <Box display={'flex'}>
              <Typography variant="h6">
                <a style={h4Style} className='grount font' onClick={BackPang}>ย้อนกลับ</a>
              </Typography>
            </Box>
           
            <br />
            <br />
            <br />
            <div className=" game vGameList">
              <div className="list">
                {items.map((row) => (
                  <div key={row.name} className="box">
                    <div className="card-image"
                      role="img" alt="" style={{
                        backgroundImage: `url(${row.img})`,
                        transform: "scale(1)"
                      }}>
                    </div>
                    <img src={row.img} alt='' style={{
                      cursor: 'pointer',
                    }} />
                    <span className="name">
                      <span>{row.name}</span>
                    </span>
                    {/* <div className="provider-name">{row.name}</div> */}
                    <div className="box-play">
                      <div className="button-play boxGoPlay" data-gameid={row.providerCode} data-name={row.name}
                        data-pid="191" onClick={() => PlayGame(row.linkgame)}>เล่น</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </React.Fragment>
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
        <div className="positionNav">
          <NavicationBar />
        </div>
      </div>
    </>
  );
}
