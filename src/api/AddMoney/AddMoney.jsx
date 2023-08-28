import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./AddMoney.scss";
import "./AddMoney.css";
import logo from "../../img/toonta.png";
import rightLogin from "../../img/login.png";
import cartoon from "../../img/7.png";
import picpic from "../../img/picpic.png";
import cartoonshark from "../../img/4.png";
import { Link } from "react-router-dom";
import Headers from "../../view/headers";
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

const AddMoney = () => {
  const [iduse, setidUser] = useState();
  const [depositamount, setdepositamount] = useState();
  const [accountNumber, setaccountNumber] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openDialogdialog, setOpenDialogdialog] = React.useState(false);

  useEffect(() => {
    // if (token) {
    //   if (data.length === 0) {
    //     axios
    //       .post("/post/token", "", {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       })
    //       .then((response) => {
    //         setidUser(response.data.data.id);
    //         axios
    //           .post(`post/getDatafinanceUser/${response.data.data.id}`)
    //           .then((response) => {
    //             setaccountNumber(response.data.accountNumber[0].accountNumber);
    //           })
    //           .catch((error) => {
    //             console.log("error", error);
    //           });
    //       })
    //       .catch((error) => {
    //         localStorage.removeItem("token");
    //         window.location.href = "/";
    //         console.log("error", error);
    //       });
    //   }
    // }
  }, []);

  const handleSubmit = async (e) => {
    if (depositamount !== "" && depositamount !== undefined && accountNumber !== "") {
      try {
        const response = await axios.post("/post/financeUser", {
          id: iduse,
          type: "deposit",
          quantity: depositamount,
          accountNumber: accountNumber,
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

      <div className="main-AddMoneyPromo">
        <div id="topBar-holder" className="topBar-holder">
          <Headers />
        </div>
        <div className="login-contain">

          <div className="wrapperMoney">
            <div className="title-textRegiter font">ฝากเงินเกม</div>
            <div className="imgWayGold">
              <img className="scaltimgGold" src={cartoon} alt="" />
            </div>
            <div className="form-container">
              <div className="form-inner">

                <form action="#" className="login">
                  <div className="fieldLogin font">
                    <BsCoin className="iconV" />
                    <input
                      type="text"
                      placeholder="กรอกจำนวนเงิน"
                      value={depositamount}
                      onChange={(e) => setdepositamount(e.target.value)}
                      required
                    />
                  </div>

                  <Box sx={{ "& button": { m: 1 } }}>
                    <div>
                      <BootstrapButton
                        variant="contained"
                        onClick={() => inputMoney(50)}
                      >
                        50
                      </BootstrapButton>
                      <BootstrapButton
                        variant="contained"
                        onClick={() => inputMoney(100)}
                      >
                        100
                      </BootstrapButton>
                      <BootstrapButton
                        variant="contained"
                        onClick={() => inputMoney(300)}
                      >
                        300
                      </BootstrapButton>
                    </div>

                    <div>
                      <BootstrapButton
                        variant="contained"
                        onClick={() => inputMoney(500)}
                      >
                        500
                      </BootstrapButton>
                      <BootstrapButton
                        variant="contained"
                        onClick={() => inputMoney(1000)}
                      >
                        1,000
                      </BootstrapButton>
                      <BootstrapButton
                        variant="contained"
                        onClick={() => inputMoney(3000)}
                      >
                        3,000
                      </BootstrapButton>
                    </div>
                  </Box>
                  <div className="fieldLogin font">
                    <BsBank2 className="iconV" />
                    <input
                      type="Number"
                      placeholder="เลขบัญชี"
                      value={accountNumber}
                      onChange={(e) => setaccountNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field btn font">
                    <div className="btn-layer"> </div>
                    <input type="submit" value="เติมเงิน" onClick={handleClickOpen} />
                  </div>
                  <div className="signup-link font">
                    พบปัญหา <a className="font" href="">ติดต่อฝ่ายบริการลูกค้า</a>
                  </div>
                </form>
                <form action="#" className="signup">
                  <div className="field">
                    <input type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="imgWayLogin">
            <img className="scaltimgLogin" src={picpic} id="wel-img-id" alt="" />
          </div>
      </div>
    </>
  );
};
export default AddMoney;
