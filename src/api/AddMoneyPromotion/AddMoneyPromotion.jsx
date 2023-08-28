import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./AddMoneyPromotion.scss";
import "./AddMoneyPromotion.css";
import "./dialogMocss.css";
import logo from "../../img/toonta.png";
import rightLogin from "../../img/login.png";
import cartoon from "../../img/imgDiralog.png";
import picpic from "../../img/picpic.png";
import imgwomen from "../../img/1.png"
import imgpanpa from "../../img/panda1.png"
import imgpanpaII from "../../img/panda2.png"
import circle1 from "../../img/circle1.png"
import circle2 from "../../img/circle2.png"
import { Link } from "react-router-dom";
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import {
  Box,
  Button,
  styled,
  alpha,
  InputBase,
  FormControl,
  TextField,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import { BsCoin, BsBank2 } from "react-icons/bs";
import NavicationBar from "../../view/NavicationBar/navicationbar";
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  width: 70,
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#700467",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#740da3" : "#000000",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#ffffff" : "#ffffff",
    fontSize: 16,
    width: 500,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

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
        ></IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {};

const AddMoneyPromotion = () => {
  const [iduse, setidUser] = useState();
  const [depositamount, setdepositamount] = useState();
  const [accountNumber, setaccountNumber] = useState("");
  const [accountName, setaccountName] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openDialogdialog, setOpenDialogdialog] = React.useState(false);
  const pathA = window.location.pathname;
  const pathSegments = pathA.split('/');

  useEffect(() => {
    /*if (token) {
      if (data.length === 0) {
        axios
          .post("/post/token", "", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setidUser(response.data.data.id);
            axios
              .post(`post/getDatafinanceUser/${response.data.data.id}`)
              .then((response) => {
                setaccountNumber(response.data.accountNumber[0].accountNumber);
                setaccountName(response.data.accountNumber[0].accountName)
              })
              .catch((error) => {
                console.log("error", error);
              });
          })
          .catch((error) => {
            localStorage.removeItem("token");
            window.location.href = "/";
            console.log("error", error);
          });
      }
    }*/
  }, []);

  const handleSubmit = async (e) => {
    console.log(pathSegments);
    if (depositamount !== "" && depositamount !== undefined && accountNumber !== "") {
      try {
        const response = await axios.post("/post/depositUserPromotion", {
          id: iduse,
          type: "deposit",
          quantity: depositamount,
          accountNumber: accountNumber,
          accountName: accountName,
          idPromotion: pathSegments[2],
        });

        if (response.data.message !== "undefined") {
          //window.location.href = "/Home";
          console.log(response.data.message);
        } else {
          console.log(response?.status.JSON);
        }
      } catch (err) {
        setShowPopup(!showPopupA);
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
    } else {
      setOpenDialogdialog(true);
    }
  };
  const style = {
    color: "red",
  };

  const togglePopup = () => {
    setShowPopup(!showPopupA);
  };

  const inputMoney = (number) => {
    setdepositamount(number);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSubmitdeposit = () => {
    handleSubmit();
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenDialogdialog(false);
  };

  return (
    <>
      {open && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการฝากเงิน</p>
                <br />
                <h3 className="detailDialog font">คุณต้องการฝากเงิน จำนวน {depositamount} เลขที่บัญชี {accountNumber}</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยืนยันการฝากเงิน
                </button>
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDialogdialog}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          กรุณาข้อมูลให้ครบ
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            จำนวนเงินที่ฝาก หรือ เลขที่บัญชีไม่ถูกต้อง
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            ปิด
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <div id="topBar-holder" className="topBar-holder">
        <Headers />
      </div>

      <div className="main-AddMoneyPromo">
        <div className="wrapperMoney">
          <div className="textFrame">
            <div className="title-textDeposit font">ฝากเงินเข้าบัญชีของท่าน</div>
          </div>
          <div className="form-container">
            <div className="form-inner">

              <form action="#" className="login">

                <div className="fieldMoney font textinput input-container">
                  <p className="textTitle font">ชื่อธนาคาร</p>
                  <input
                    type="text"
                    placeholder="ธนาคาร"
                    value={depositamount}
                    onChange={(e) => setdepositamount(e.target.value)}
                    className="input-with-icon"
                    required
                  />
                  <BsCoin className="input-icon" />
                </div>

                <div className="fieldDataDeposit font textinput input-container">
                  <p className="textTitle font">ชื่อบัญชี</p>
                  <input
                    type="text"
                    placeholder="ชื่อ - นามสกุล"
                    value={depositamount}
                    onChange={(e) => setdepositamount(e.target.value)}
                    required
                    className="input-with-icon"
                  />
                  <BsCoin className="input-icon" />
                </div>

                <div className="fieldDataDeposit font textinput input-container">
                  <p className="textTitle font">เลขที่บัญชี</p>
                  <input
                    type="Number"
                    placeholder="เลขที่บัญชี"
                    value={accountNumber}
                    onChange={(e) => setaccountNumber(e.target.value)}
                    required
                    className="input-with-icon"
                  />
                  <BsCoin className="input-icon" />
                </div>

                <div className="fieldMoney font textinput input-container">
                  <p className="textTitle font">จำนวนเงินที่ต้องการโอน</p>
                  <input
                    type="Number"
                    placeholder="กรอกจำนวนเงิน"
                    value={accountNumber}
                    onChange={(e) => setaccountNumber(e.target.value)}
                    required
                    className="input-with-icon"
                  />
                </div>

                <div className=" font">
                  <p className="textTitle font">อัพโหลดหลักฐานการโอน</p>
                  <input
                    type="file"
                    placeholder="อัพโหลดรูปภาพ"
                    value={accountNumber}
                    onChange={(e) => setaccountNumber(e.target.value)}
                    required
                    className="upload-box"
                  />
                </div>
                <br />
                <div className="field btnsubmit font">
                  <div className="btn-layer"> </div>
                  <input type="submit" value="เติมเงิน" onClick={handleClickOpen} />
                </div>
                <div className="money-link font">
                  พบปัญหา <a className="font" href="">ติดต่อฝ่ายบริการลูกค้า</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="displayFooter">
          <MenuDown />
          <div className="section-footer mid-footer d-dev">
            <div className="section-footer-inner">
              <Allgamecamps />
            </div>
          </div>
          <Footer />
        </div>
        <div className="positionNav">
          <NavicationBar />
        </div>

        <div className="imgWayDeposit">
          <img className="scaltimgDeposit" src={imgwomen} id="wel-img-id" alt="" />
        </div>

        <div className="imgWayDeposit">
          <img className="scaltimgDepositCircleI" src={circle1} alt="" />
        </div>
        <div className="imgWayDeposit">
          <img className="scaltimgDepositCircleV" src={circle1} alt="" />
        </div>
        <div className="imgWayDeposit">
          <img className="scaltimgDepositCircleVI" src={circle1} alt="" />
        </div>
        <div className="imgWayDeposit">
          <img className="scaltimgDepositCircleII" src={circle2} alt="" />
        </div>
        <div className="imgWayDeposit">
          <img className="scaltimgDepositCircleIII" src={imgpanpa} alt="" />
        </div>

        <div className="imgWayDeposit">
          <img className="scaltimgDepositCircleIIII" src={imgpanpaII} alt="" />
        </div>

      </div>
    </>
  );
};
export default AddMoneyPromotion;