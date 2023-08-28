import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./RegisterForm.scss";
import "./RegisterForm.css";
import circle2 from "../../img/circle2.png";
import liftRegister from "../../img/joinnow.png";
import cartoon from "../../img/7.png";
import monterCartoon from "../../img/5.png";
import rabbitCartoon from "../../img/6.png";
import regitercartoon from "../../img/regitercartoon.png";
import regitercartoonV2 from "../../img/RegiterV2.png";
import { Link } from "react-router-dom";
import Headers from "../../view/headers";
import Select from "react-select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { BsUnlockFill, BsCreditCardFill, BsPhoneFill } from "react-icons/bs";

const RegiterBarTest = () => {
  const [username, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [Confrimpassword, setPwdConfrim] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [bank, setsetBank] = useState("");
  const [nameBank, setNameBank] = useState("");
  const [numberBank, setNumberBank] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupB, setShowPopupB] = useState(false);
  // Dialog
  const [showRegiterA, setRegiterA] = useState(true);
  const [showRegiterOTP, setRegiterOTP] = useState(false);
  const [showRegiterB, setRegiterB] = useState(false);
  const [showRegiterC, setRegiterC] = useState(false);
  const [tokenpin, settokenpin] = useState("");
  const [otpPin, setotppin] = useState("");

  const [show, setShow] = useState(false);
  const [showPhoneCheck, setShowPhoneCheck] = useState(false);
  const [showUsernameCheck, setShowusernameCheck] = useState(false);
  const [showUsernameCheckvalue, setShowusernameCheckvalue] = useState(false);
  const [showpasswordCheck, setShowpasswordCheck] = useState(false);

  //Img
  const [showImg, setShowImg] = useState(regitercartoon);
  const [showprogressBar, setShowprogressBar] = useState(25);
  const [styleBar, setStyle] = useState({});
  const [title, setTitel] = useState('กรอกเบอร์โทรศัพท์')
  const handleClose = () => {
    setShow(false);
    setShowPhoneCheck(false);
    setShowusernameCheck(false);
    setShowpasswordCheck(false);
    setShowusernameCheckvalue(false);
  };

  const usedforOptions = [
    { value: "ธนาคารไทยพาณิชย์", label: "ธนาคารไทยพาณิชย์", imgPath: "" },
    { value: "ธนาคารกสิกรไทย", label: "ธนาคารกสิกรไทย จำกัด", imgPath: "" },
    { value: "ธนาคารกรุงเทพ", label: "ธนาคารกรุงเทพ", imgPath: "" },
    { value: "ธนาคารกรุงไทย", label: "ธนาคารกรุงไทย", imgPath: "" },
    { value: "ธนาคารกรุงศรีอยุธยา", label: "ธนาคารกรุงศรีอยุธยา", imgPath: "" },
    { value: "ธนาคารเกียรตินาคินภัทร", label: "ธนาคารเกียรตินาคินภัทร", imgPath: "" },
    { value: "ธนาคารซีไอเอ็มบี ไทย", label: "ธนาคารซีไอเอ็มบี ไทย", imgPath: "" },
    { value: "ธนาคารทหารไทยธนชาต", label: "ธนาคารทหารไทยธนชาต", imgPath: "" },
    { value: "ธนาคารยูโอบี", label: "ธนาคารยูโอบี", imgPath: "" },
    { value: "ธนาคารออมสิน", label: "ธนาคารออมสิน", imgPath: "" },
    { value: "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร", label: "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร", imgPath: "" },
    { value: "ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)", label: "ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)", imgPath: "" },
  ];

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  useEffect(() => {
    const newStyle = {
      opacity: 3,
      width: `25%`
    }
    setStyle(newStyle);
  }, [])

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const handleConfrimSubmit = () => {
    setShowPopupB(!showPopupB);
  };
  const handleSubmit = async (e) => {
    setShowPopupB(!showPopupB);
    try {
      const response = await axios.post("post/signupMember", {
        agent_id: 2,
        member_code: 2,
        username: username,
        password: password,
        bank: bank,
        credit: 0,
        accountName: nameBank,
        accountNumber: numberBank,
        contact_number: phoneNumber,
      });
      if (response.data.message === "Data created Success") {
        window.location.href = "/Login";
      } else {
        setShowPopupB(!showPopupB);
      }
    } catch (err) {
      setShowPopupB(!showPopupB);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  const handleChange = (selectedOption) => {
    setsetBank(selectedOption.value);
  };

  const handleSubmitA = async (e) => {
    if (phoneNumber !== "" && phoneNumber !== undefined) {
      if (/^\d{0,10}$/.test(phoneNumber) && phoneNumber.length === 10) {
        fetch("http://localhost:5000/otpRequest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: phoneNumber,
          }),
        })
          .then((response) => {
            if (response) {
              return response.json();
            } else {
              throw new Error("Error: " + response.statusText);
            }
          })
          .then((data) => {
            if (data.message === "This contact_number is not available.") {
              setShowPhoneCheck(true);
            } else {
              settokenpin(data.dataRes.data.token);
              setRegiterOTP(true);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        setShow(true);
      }
    } else {
      console.log('run')
      setShow(true);
    }
  };

  const handleSubmitOTP = async (e) => {
    fetch("http://localhost:5000/otpVerify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pin: otpPin,
        token: tokenpin,
      }),
    })
      .then((response) => {
        if (response) {
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then((data) => {
        if (
          data.dataRes.data.status === "success" &&
          data.dataRes.data.message === "Code is correct."
        ) {
          setShowImg(regitercartoonV2);
          setShowprogressBar(50);
          const newStyle = {
            opacity: 3,
            width: `50%`
          }
          setStyle(newStyle);
          setTitel('กรอก Username และ Password');
          setRegiterOTP(false);
          setRegiterA(false);
          setRegiterB(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCancelOTP = async (e) => {
    setRegiterOTP(false);
  };

  const handleSubmitB = async (e) => {
    if (/^[a-z0-9]+$/.test(username)) {
      if (username.length > 6 && username.length <= 16) {
        fetch("http://localhost:5000/post/checkUsernameMember", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
          }),
        })
          .then((response) => {
            if (response) {
              return response.json();
            } else {
              throw new Error("Error: " + response.statusText);
            }
          })
          .then((data) => {
            if (data.message === "This username is available.") {
              if (password.length > 7 && password.length <= 16) {
                if (password === Confrimpassword) {
                  setRegiterB(false);
                  setRegiterC(true);
                  setShowprogressBar(75);
                  const newStyle = {
                    opacity: 3,
                    width: `75%`
                  }
                  setStyle(newStyle);
                  setTitel('ข้อมูลบัญชีธนาคาร');
                } else {
                  setShowpasswordCheck(true);
                }
              } else {
                setShowpasswordCheck(true);
              }
            } else {
              setShowusernameCheckvalue(true);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        setShowusernameCheck(true);
      }
    } else {
      setShowusernameCheck(true);
    }
  };

  const togglePopup = () => {
    setShowPopupB(!showPopupB);
  };

  return (
    <>
      {showPopupB && (
        <div className="overlay">
          <div className="modalContainer">
            <div className="img">
              <img src={cartoon} alt="/" />
            </div>
            <div className="modalRight">
              <div className="content">
                <p >ยืนยันการสมัครสมาชิก</p>
                <br />
                <h3>กดตกลงเพื่อยืนยันการสมัครสมาชิก</h3>
              </div>
              <div className="btnContainer">
                <button className="btnPrimary" onClick={handleSubmit}>
                  ตกลง
                </button>
                <button className="btnPrimary" onClick={togglePopup}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {show && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">เบอร์โทรไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialog font">กรุณากรอกเบอร์โทรให้ถูกต้อง โดยเบอร์โทรศัพท์หลักแรก ต้องเป็นเลข 0</h3>
                <h3 className="detailDialog font">และต่อจากนั้น จะเป็นเลขที่ 9 ตั้ว เช่น 0897456222 หรือ 0687452132</h3>
                <h3 className="detailDialog font">เป็นต้น</h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPhoneCheck && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">เบอร์โทรศัพท์มีผู้ใช้งานแล้ว</p>
                <br />
                <h3 className="detailDialog font">กรุณากรอกเบอร์โทรใหม่ เบอร์โทรมีผู้ใช้งานแล้ว</h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            เบอร์โทรศัพท์มีผู้ใช้งานแล้ว
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              กรุณากรอกเบอร์โทรใหม่ เบอร์โทรมีผู้ใช้งานแล้ว
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              ปิดหน้าต่าง
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={showUsernameCheck}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Username ไม่ถูกต้อง
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              กรุณากรอก Username ใหม่ โดย Username ต้องเป็น ภาษาอังกฤษพิมพ์เล็ก
              เท่านั้น และมีจำนวน ไม่น้อยกว่า 8 ตัวอักษร และไม่มากกว่า 16
              ตัวอักษร เช่น toontawebgame
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              ปิดหน้าต่าง
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={showUsernameCheckvalue}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Username นี้มีผู้ใช้งานแล้ว
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              กรุณากรอก Username ใหม่ Username นี้มีผู้ใช้งานแล้ว
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              ปิดหน้าต่าง
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={showpasswordCheck}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Password ไม่ถูกต้อง
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              กรุณากรอก Password ให้เหมือนกันทั้ง 2 ช่อง
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              ปิดหน้าต่าง
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>

      <div className="main-login">
        <nav id="topBar-holder" className="topBar-holder">
          <Headers />
        </nav>
        <br />
        <div className="login-contain">
          <div className="imgrabbit">
            <img className="scaltimgrabbit" src={rabbitCartoon} id="wel-img-id" alt="" />
          </div>

          <div className="imgWaycircleRegiter">
            <img className="scaltimgcirclesmRegiter" src={circle2} alt="" />
          </div>
          <div className="wrapperRegiter">
            <div className="title-textRegiter font">{title}</div>

            <div className="progressBar">
              <div className="progressBar-done" style={styleBar}>
                {showprogressBar}%
              </div>
            </div>

            <div className="imgWaycircle">
              <img className="scaltimgcirclesm" src={showImg} alt="" />
            </div>
            <div>
              <div className="form-inner">
                {(() => {
                  if (showRegiterA === true) {
                    return (<>
                      <form action="#" className="login">
                        <div className="field">
                          <BsPhoneFill className="iconV" />
                          <input
                            type="text"
                            placeholder="กรอกเบอร์โทรศัพท์"
                            value={phoneNumber}
                            onChange={(e) => setphoneNumber(e.target.value)}
                            required
                          />
                        </div>
                        <div className="field btn">
                          <div className="btn-layer"> </div>
                          <input type="submit" value="ยืนยัน" onClick={handleSubmitA} />
                        </div>
                        <div className="signup-link">
                          พบปัญหา <a href="">ติดต่อฝ่ายบริการลูกค้า</a>
                        </div>
                      </form>
                      <Dialog
                        open={showRegiterOTP}
                        onClose={handleCancelOTP}
                      >
                        <DialogTitle>ยืนยัน OTP</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            ระบบจะส่ง SMS
                            ไปยังเบอร์โทรศัพท์ที่ท่านได้กรอกไว้ *(OTP
                            จะเป็นตัวเลข 4 ตัว เช่น 1234 หรือ 4526)
                          </DialogContentText>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="กรุณากรอก OTP"
                            type="Number"
                            fullWidth
                            variant="standard"
                            onChange={(e) =>
                              setotppin(e.target.value)
                            }
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button
                            style={{
                              color: "#FF6633",
                              display: "inline-block",
                              marginRight: "10px",
                            }}
                            onClick={handleCancelOTP}
                          >
                            Cancel
                          </Button>
                          <Button onClick={handleSubmitOTP}>
                            Subscribe
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </>
                    );
                  }
                  if (showRegiterB === true) {
                    return (
                      <>
                        <form action="#" className="login">
                          <div className="field">
                            <BsPhoneFill className="iconV" />
                            <input
                              type="text"
                              placeholder="กรอก Username"
                              value={username}
                              onChange={(e) => setUser(e.target.value)}
                              className="fill"
                            />
                          </div>
                          <div className="field">
                            <BsUnlockFill className="iconV" />
                            <input
                              type="password"
                              placeholder="กรอก Password"
                              value={password}
                              onChange={(e) => setPwd(e.target.value)}
                              className="fill"
                            />
                          </div>
                          <div className="field">
                            <BsUnlockFill className="iconV" />
                            <input
                              type="password"
                              placeholder="ยื่นยัน Password"
                              value={Confrimpassword}
                              onChange={(e) => setPwdConfrim(e.target.value)}
                              className="fill"
                            />
                          </div>
                          <div className="buttomDown">
                            <div className="field btn">
                              <div className="btn-layer"> </div>
                              <input type="submit" value="ถัดไป" onClick={handleSubmitB} />
                            </div>
                          </div>
                          <div className="signup-link">
                            พบปัญหา <a href="">ติดต่อฝ่ายบริการลูกค้า</a>
                          </div>
                        </form>
                      </>
                    );
                  }
                  if (showRegiterC === true) {
                    return (
                      <>

                        <form action="#" className="login">
                          <div style={{ zIndex: 5 }}>
                            <Select
                              options={usedforOptions}
                              onChange={handleChange}
                              isSearchable={true} // Enable search functionality
                            />
                          </div>

                          <div className="field">
                            <BsPhoneFill className="iconV" />
                            <input
                              type="text"
                              placeholder="กรอก ชื่อบัญชี"
                              value={nameBank}
                              onChange={(e) =>
                                setNameBank(e.target.value)
                              }
                              className="fill"
                            />
                          </div>
                          <div className="field">
                            <BsUnlockFill className="iconV" />
                            <input
                              type="text"
                              placeholder="กรอก เลขที่บัญชี"
                              value={numberBank}
                              onChange={(e) =>
                                setNumberBank(e.target.value)
                              }
                              className="fill"
                            />
                          </div>
                          <div className="buttomDown">
                            <div className="field btn">
                              <div className="btn-layer"> </div>
                              <input type="submit" value="ถัดไป" onClick={handleConfrimSubmit} />
                            </div>
                          </div>
                          <div className="signup-link">
                            พบปัญหา <a href="">ติดต่อฝ่ายบริการลูกค้า</a>
                          </div>
                        </form>
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
          <div className="imgWaymonter">
            <img className="scaltimgmonter" src={monterCartoon} id="wel-img-id" alt="" />
          </div> 
        </div>
      </div>
    </>
  );
};
export default RegiterBarTest;
