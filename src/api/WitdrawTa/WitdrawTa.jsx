import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./WitdrawTa.scss";
import "./WitdrawTa.css";
import "./dialogWitdrawTa.css";
import logo from "../../img/toonta.png";
import rightLogin from "../../img/login.png";
import cartoon from "../../img/imgDiralog.png";
import picpic from "../../img/picpic.png";
import imgwomen from "../../img/1.png"
import imgpanpa from "../../img/9.png"
import imgpanpaII from "../../img/10.png"
import circle1 from "../../img/circle2.png"
import circle2 from "../../img/circle1.png"
import { Link } from "react-router-dom";
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import {DialogTitle, IconButton} from "@mui/material";
import { BsCoin, BsBank2 } from "react-icons/bs";
import NavicationBar from "../../view/NavicationBar/navicationbar";
import gitWitdraw from '../../img/icon/money.gif'
import nottifocationimgOne from '../../img/lang/11.png'
import nottifocationimgTwo from '../../img/lang/22.png'
import nottifocationimgThree from '../../img/lang/33.png'
import nottifocationimgFour from '../../img/lang/44.png'
import nottifocationimgFive from '../../img/lang/55.png'

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

const WitdrawTa = () => {
  const [iduse, setidUser] = useState();
  const [Witdrawamount, setWitdrawamount] = useState();
  const [accountNumber, setaccountNumber] = useState("");
  const [accountName, setaccountName] = useState("");
  const [valueWitDraw, setvalueWitDraw] = useState(0.00);
  const [amountWitDraw, setamountWitDraw] = useState("");
  const [datapromotion, setDatapromotion] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const credit = localStorage.getItem("credit");
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openDialogdialog, setOpenDialogdialog] = React.useState(false);
  const pathA = window.location.pathname;
  const pathSegments = pathA.split('/');

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [selectedImageUrlshow, setSelectedImageUrlshow] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [reaSleepData, setreaSleepData] = useState('');
  const [resOpenOne, setresOpenOne] = useState(false);
  const [logTime, setlogTime] = useState(false);
  const [logImgNo, setlogImgNo] = useState(false);

  const [resOpen, setresOpen] = useState(false);
  const [resOpenTwo, setresOpenTwo] = useState(false);
  const [resOpenThree, setresOpenThree] = useState(false);
  const [resOpenFour, setresOpenFour] = useState(false);
  const [resOpenFive, setresOpenFive] = useState(false);

  const [Witdrawaccount, setWitdrawaccount] = useState([]);
  const [inputValue, setInputValue] = useState('');
  let Witdrawaccountlite = [];
  let PromotionList = [];

  let baseURL = 'https://relaxtimecafe.fun/';
  //const baseURL: 'http://localhost:5000/';

  /*useEffect(() => {
    if (token) {
      if (data.length === 0) {
        axios.get("/list_userWeb/" + user, "", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          setidUser(response.data.data[0]);
          axios.get(`post/getWitdrawaccount/TOONTA`)
            .then((response) => {
              setaccountNumber(response.data.data[0].accountNumber);
              setaccountName(response.data.data[0].accountName)
              for (let i = 0; i < response.data.data.length; i++) {
                Witdrawaccountlite.push({
                  value: response.data.data[i].bankName,
                  label: response.data.data[i].bankName,
                  imgPath: response.data.data[i].imgbank,
                  name: response.data.data[i].accountName,
                  number: response.data.data[i].accountNumber
                })
                setWitdrawaccount(Witdrawaccountlite);
                fetchData();
              }

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

    const fetchData = async () => {
      try {
        const response = await axios.get('/post/');
        console.log(response.data.img)
        for (let i = 0; i < response.data.img.length; i++) {
          PromotionList.push({
            value: response.data.img[i].namepromotion,
            label: response.data.img[i].namepromotion,
            imgPath: response.data.img[i].filename,
            id: response.data.img[i].id,
          })
          setDatapromotion(PromotionList);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  }, []);*/

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

  const handleSubmit = () => {
    if (selectedImageUrlshow !== '') {
      setlogTime(true)
      setUploadStatus('Uploading...');
      const formData = new FormData();
      formData.append('file', selectedImageUrlshow);

      fetch(baseURL + 'image-upload', {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          setUploadedImageUrl(data);
          const nameImg = data.nameImg;

          fetch(baseURL + 'WitdrawToonta', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: iduse.id,
              type: "Witdraw",
              quantity: 250,
              accountNumber: iduse.accountNumber,
              accountName: iduse.accountName,
              idPromotion: '1',
              filename: nameImg,
              phonenumber: user,
            })
          })
            .then((response) => response.json())
            .then(async (data) => {
              switch (data.message) {
                case "ไม่มีชื่อบัญชีธนาคารของเว็บ Toonta ในระบบเงินฝาก":
                  setresOpenFive(true);
                  break;
                case "สลิปนี้เคยถูกใช้งานแล้ว":
                  setresOpen(true);
                  break;
                case "ชื่อบัญชีที่ได้ลงทะเบียนไม่ถูกต้อง กรุณาตรวจสอบ สลิปโอนเงิน ":
                  setresOpenTwo(true);
                  break;
                case "สลิปนี้เคยถูกใช้งานแล้ว หรือ ข้อมูลไม่ถูกต้องกรุณาลองใหม่อีกครั้ง":
                  setresOpenFour(true);
                  break;
                case "ฝากเงินสำเสร็จ":
                  setresOpenThree(true);
                  break;
                default:
                  setresOpenFour(true);
                  break;
              }
              setreaSleepData(data.message)
              setlogTime(false);
              setresOpen(true);
            })
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setlogImgNo(true)
    }
  }

  const handleSubmitWitdraw = () => {
    handleSubmit();
    setOpen(false);
  };

  const handleClose = () => {
    if (reaSleepData === 'ฝากเงินสำเสร็จ') {
      setOpen(false);
      setOpenDialogdialog(false);
      setresOpen(false);
      window.location.reload();
    } else {
      setOpen(false);
      setOpenDialogdialog(false);
      setresOpen(false);
      setlogImgNo(false);
      setresOpenTwo(false);
      setresOpenThree(false);
      setresOpenFour(false);
      setresOpenFive(false);
    }
  };

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [selectedValue, setSelectedValue] = useState(Witdrawaccount.label); // Initialize the state with the default value

  const copyToClipboard = async (accountNumberToonta) => {
    try {
      await navigator.clipboard.writeText(accountNumberToonta);
      alert('คัดลอกเลขบัญชีธนาคารเรียบะร้อยแล้ว!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
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
                <h3 className="detailDialog font">คุณต้องการฝากเงิน จำนวน {Witdrawamount} เลขที่บัญชี {accountNumber}</h3>
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
          <div className="imgMoneyCartoon">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <p className="titleDialog font">แจ้งเตือน ยืนยันการฝากเงิน</p>
                <br />
                <h3 className="detailDialog font">กรุณารอสักครู่ ระบบกำลังดำเนินการฝากเงิน {uploadStatus}</h3>
                <div className="imgMoneyGit">
                  <img src={gitWitdraw} alt="/" />
                </div>
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
          <div className="modalContainerMoneyImg">
            <div className="modalRightMoney">
              <img src={nottifocationimgOne} alt="/" onClick={handleClose} />
            </div>
          </div>
        </div>
      )}

      {resOpenTwo && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoneyImg">
            <div className="modalRightMoney">
              <img src={nottifocationimgTwo} alt="/" onClick={handleClose} />
            </div>
          </div>
        </div>
      )}

      {resOpenThree && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoneyImg">
            <div className="modalRightMoney">
              <img src={nottifocationimgThree} alt="/" onClick={handleClose} />
            </div>
          </div>
        </div>
      )}

      {resOpenFour && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoneyImg">
            <div className="modalRightMoney">
              <img src={nottifocationimgFour} alt="/" onClick={handleClose} />
            </div>
          </div>
        </div>
      )}

      {resOpenFive && (
        <div className="overlayMoney">
          <div className="imgMoney">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerMoneyImg">
            <div className="modalRightMoney">
              <img src={nottifocationimgFive} alt="/" onClick={handleClose} />
            </div>
          </div>
        </div>
      )}

      {resOpenOne && (
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


      <div>
        <Headers />
      </div>
      <div className="main-AddWitdraw">
        <div className="wrapperWitdraw">
          <div className="textFrameWitdraw">
            <div className="title-textWitdraw font">ถอนเงิน</div>
          </div>
          <div className="form-containerWitdraw">
            <div className="form-innerWitdraw">
              <form action="#" className="login">

              <div className="fieldDataWitdrawNoColor font textinputWitdraw input-containerWitdraw">
                  <p className="textTitleWitdraw font">ยอดเงินคงเหลือ</p>
                  <div className="wrapInputWitdraw">
                    <input
                      type="text"
                      placeholder="ยอดเงินคงเหลือ"
                      value={credit}
                      required
                      className="input-with-iconReposit colorFontWindarwcredit font"
                      disabled
                    />
                    <BsCoin className="input-iconWitdraw" />
                  </div>
                </div>

                <div className="fieldDataWitdraw font textinputWitdraw input-containerWitdraw">
                <p className="textTitleWitdraw font">จำนวนเงินที่ถอนได้</p>
                  <div className="wrapInputWitdraw">
                    <input
                      type="Number"
                      placeholder="จำนวนเงินที่ถอนได้"
                      value={amountWitDraw}
                      required
                      className="input-with-iconReposit font"
                      disabled
                    />
                    <BsCoin className="input-iconWitdraw" />
                  </div>
                </div>

                <div className="fieldDataWitdrawNoColor font textinputWitdraw input-containerWitdraw">
                <p className="textTitleWitdraw font">จำนวนเงินที่ต้องการถอน</p>
                  <div className="wrapInputWitdraw ">
                    <input
                      type="fo"
                      placeholder="จำนวนเงินที่ต้องการถอน"
                      value={valueWitDraw}
                      onChange={(e) => setvalueWitDraw(e.target.value)}
                      required
                      className="input-with-iconReposit colorFontWindarw font"
                    />
                    <BsCoin className="input-iconWitdraw" />
                  </div>
                </div>
                <br/>
                <div className="fieldWitdraw btnsubmitWitdraw font">
                  <input type="submitWitdraw" value="ถอนเงิน" onClick={() => handleSubmitWitdraw()} />
                </div>
                <br />
                <div className="money-link ">
                  <a className="font" href=""> พบปัญหา ติดต่อฝ่ายบริการลูกค้า</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="displayFooterWitdraw">
          <MenuDown />
          <div className="section-footer mid-footer">
            <div className="section-footer-inner">
              <Allgamecamps />
            </div>
          </div>
          <Footer />
        </div>
        <div className="positionNav">
          <NavicationBar />
        </div>

        <div className="imgWayWitdraw">
          <img className="scaltimgWitdraw " src={imgwomen} id="wel-img-id" alt="" />

          <div className="WitdrawimgShadowCircleI">
            <img className="scaltimgWitdrawCircle" src={circle1} alt="" />
          </div>

          <div className="WitdrawimgShadowCircleII">
            <img className="scaltimgWitdrawCircle" src={circle2} alt="" />
          </div>

          <div className="WitdrawimgShadowCircleV">
            <img className="scaltimgWitdrawCircle" src={circle1} alt="" />
          </div>

          <div className="WitdrawimgShadowCircleVI">
            <img className="scaltimgWitdrawCircle" src={circle1} alt="" />
          </div>

          
          <img className="scaltimgWitdrawCircleIII" src={imgpanpa} alt="" />
          
          <img className="scaltimgWitdrawCircleIIII" src={imgpanpaII} alt="" />

        </div>
      </div>
    </>
  );
};
export default WitdrawTa;
