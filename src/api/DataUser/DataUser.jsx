import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./DataUser.scss";
import "./DataUser.css";
import "./dialogDataUser.css";
import logo from "../../img/toonta.png";
import rightLogin from "../../img/login.png";
import cartoon from "../../img/imgDiralog.png";
import picpic from "../../img/picpic.png";
import imgwomen from "../../img/1.png";
import imgpanpa from "../../img/panda1.png";
import imgpanpaII from "../../img/panda2.png";
import circle1 from "../../img/circle1.png";
import circle2 from "../../img/circle2.png";
import { Link } from "react-router-dom";
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import { BsCoin, BsBank2 } from "react-icons/bs";
import NavicationBar from "../../view/NavicationBar/navicationbar";
import Modal from "react-modal";

const ImageModal = ({ imageUrl, isOpen, onRequestClose, className }) => {
  return (
    <div className="dirlodsile">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customModalStyles}
        contentLabel="Enlarged Image Modal"
      >
        <img src={imageUrl} alt="Enlarged" className="enlarged-image" />
      </Modal>
    </div>
  );
};

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddMoneyPromotion = () => {
  const [iduse, setidUser] = useState();
  const [depositamount, setdepositamount] = useState();
  const [accountNumber, setaccountNumber] = useState("");
  const [accountName, setaccountName] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openDialogdialog, setOpenDialogdialog] = React.useState(false);
  const pathA = window.location.pathname;
  const pathSegments = pathA.split("/");

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [selectedImageUrlshow, setSelectedImageUrlshow] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [reaSleepData, setreaSleepData] = useState("");
  const [resOpen, setresOpen] = useState(false);
  const [logTime, setlogTime] = useState(false);
  const [logImgNo, setlogImgNo] = useState(false);

  const [depositaccount, setdepositaccount] = useState([]);
  let depositaccountlite = [];

  let baseURL = "https://relaxtimecafe.fun/";
  //const baseURL: 'http://localhost:5000/';
  useEffect(() => {
    if (token) {
      if (data.length === 0) {
        axios
          .get("/list_userWeb/" + user, "", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setidUser(response.data.data[0]);

            axios
              .get(`post/getDepositaccount/TOONTA`)
              .then((response) => {
                setaccountNumber(response.data.data[0].accountNumber);
                setaccountName(response.data.data[0].accountName);

                for (let i = 0; i < response.data.data.length; i++) {
                  depositaccountlite.push({
                    value: response.data.data[i].bankName,
                    label: response.data.data[i].bankName,
                    imgPath: response.data.data[i].imgbank,
                    name: response.data.data[i].accountName,
                    number: response.data.data[i].accountNumber,
                  });
                  setdepositaccount(depositaccountlite);
                }
                console.log(depositaccountlite);
              })
              .catch((error) => {
                console.log("error", error);
              });
          })
          .catch((error) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/";
            console.log("error", error);
          });
      }
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setSelectedImageUrlshow(file);
        setUploadedImageUrl(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (selectedImageUrlshow !== "") {
      setlogTime(true);
      setUploadStatus("Uploading...");
      const formData = new FormData();
      formData.append("file", selectedImageUrlshow);

      fetch(baseURL + "image-upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setUploadedImageUrl(data);
          const nameImg = data.nameImg;

          fetch(baseURL + "depositToonta", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: iduse.id,
              type: "deposit",
              quantity: 250,
              accountNumber: iduse.accountNumber,
              accountName: iduse.accountName,
              idPromotion: "1",
              filename: nameImg,
              phonenumber: user,
              destinationAccountNumber: accountNumber,
            }),
          })
            .then((response) => response.json())
            .then(async (data) => {
              setreaSleepData(data.message);
              setlogTime(false);
              setresOpen(true);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setlogImgNo(true);
    }
  };

  const handleSubmitdeposit = () => {
    handleSubmit();
    setOpen(false);
  };
  const handleClose = () => {
    if (reaSleepData === "ฝากเงินสำเสร็จ") {
      setOpen(false);
      setOpenDialogdialog(false);
      setresOpen(false);
      window.location.reload();
    } else {
      setOpen(false);
      setOpenDialogdialog(false);
      setresOpen(false);
      setlogImgNo(false);
    }
  };

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [selectedValue, setSelectedValue] = useState(depositaccount.label); // Initialize the state with the default value

  // Event handler to handle changes in the select element
  const selectElement = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
    for (let i = 0; i < depositaccount.length; i++) {
      if (depositaccount[i].value === event.target.value) {
        //console.log(depositaccount[i].value,)
        setaccountNumber(depositaccount[i].number);
        setaccountName(depositaccount[i].name);
      }
    }
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
                <h3 className="detailDialog font">
                  คุณต้องการฝากเงิน จำนวน {depositamount} เลขที่บัญชี{" "}
                  {accountNumber}
                </h3>
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

      {logTime && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการฝากเงิน</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณารอสักครู่ ระบบกำลังดำเนินการฝากเงิน {uploadStatus}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {logImgNo && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการฝากเงิน</p>
                <br />
                <h3 className="detailDialog font">กรุณาอัพโหลด สลีป</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {resOpen && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการฝากเงิน</p>
                <br />
                <h3 className="detailDialog font">{reaSleepData}</h3>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={handleClose}>
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalIsOpen && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <div className="modal-image-container">
                  <img
                    src={selectedImage}
                    alt="/"
                    style={customModalStyles}
                    className="dirlodsile"
                  />
                </div>
              </div>
              <div className="btnContainerMoney">
                <button className="btnPrimaryMoney" onClick={closeModal}>
                  ปิด
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <Headers />
      </div>
      <div className="wrapperMoney">
        <div className="containerBank">
          <div className="col-md-8">
            <div className="people-nearby">
              <div className="nearby-user">
                <div className="lineDeposit">
                  <div className="headerDeposit">
                    <img
                      src="https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-scb.png"
                      alt="user"
                      className="profile-photo-lg"
                    />
                    <h5 className="profile-link font">ธนาคารไทยพาณิชย์</h5>
                  </div>
                </div>
                <div className="col-md-7 col-sm-7">
                  <div>
                    <h5 className="nameDeposit font">นาย พีรวัส ขวัญแก้ว</h5>
                  </div>
                  <div>
                    <h5 className="text-mutedNumber font">123-4-56789-0</h5>
                  </div>
                </div>
                <div className="positionButton">
                  <button className="buttonCopyTest font">คัดลอก</button>
                </div>
              </div>

              <div className="nearby-user">
                <div className="lineDeposit">
                  <div className="headerDeposit">
                    <img
                      src="https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-scb.png"
                      alt="user"
                      className="profile-photo-lg"
                    />
                    <h5 className="profile-link font">ธนาคารไทยพาณิชย์</h5>
                  </div>
                </div>
                <div className="col-md-7 col-sm-7">
                  <div>
                    <h5 className="nameDeposit font">นาย พีรวัส ขวัญแก้ว</h5>
                  </div>
                  <div>
                    <h5 className="text-mutedNumber font">123-4-56789-0</h5>
                  </div>
                </div>
                <div className="positionButton">
                  <button className="buttonCopyTest font">คัดลอก</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddMoneyPromotion;