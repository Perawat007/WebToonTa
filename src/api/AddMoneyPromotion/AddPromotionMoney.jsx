import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./AddMoneyPromotion.css";
import "./dialogMocss.css";
import logo from "../../img/toonta.png";
import cartoon from "../../img/imgDiralog.png";
import picpic from "../../img/picpic.png";
import imgwomen from "../../img/1.png"
import imgpanpa from "../../img/panda1.png"
import imgpanpaII from "../../img/panda2.png"
import circle1 from "../../img/circle1.png"
import circle2 from "../../img/circle2.png"
import Headers from "../../view/headersII";
import Footer from "../../view/pangHome/FooTer/Footer";
import Allgamecamps from "../../view/pangHome/Allgamecamps";
import MenuDown from "../../view/pangHome/MenuDown";
import { BsCoin, BsBank2 } from "react-icons/bs";
import NavicationBar from "../../view/NavicationBar/navicationbar";
import Modal from 'react-modal';
import gitDeposit from '../../img/icon/money.gif'
import nottifocationimgOne from '../../img/icon/pop_up1.png'
import nottifocationimgTwo from '../../img/icon/pop_up2.png'
import nottifocationimgThree from '../../img/icon/pop_up3.png'
import nottifocationimgFour from '../../img/icon/pop_up4.png'
import nottifocationimgFive from '../../img/icon/pop_up5.png'
import nottifocationimgSix from '../../img/icon/pop_up6.png'
import nottifocationimgSaven from '../../img/icon/pop_up7.png'
import nottifocationimgEight from '../../img/icon/pop_up8.png'

import Select from 'react-select';
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const AddPromotionMoney = () => {
  const [iduse, setidUser] = useState();
  const [depositamount, setdepositamount] = useState();
  const [accountNumber, setaccountNumber] = useState("");
  const [accountName, setaccountName] = useState("");
  const [datapromotion, setDatapromotion] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const namePromotion = localStorage.getItem("%rootProDataN%");
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

  const [depositaccount, setdepositaccount] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [imgnofidication, setimgnofidication] = useState();

  const [selectedValueId, setSelectedValueId] = useState(pathSegments[2]);
  const [selectedValue, setSelectedValue] = useState(namePromotion); // Initialize the state with the default value

  let depositaccountlite = [];

  let PromotionList = [
    {
      value: '0',
      label: 'เลือกโปรโมชั่น',
      imgPath: '',
      id: '0',
    }
  ];

  let baseURL = 'https://dogzilla.live/';
  //const baseURL = 'http://localhost:5000/';

  useEffect(() => {
    if (token) {
      if (data.length === 0) {
        axios.get("/list_userWeb/" + user, "", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          setidUser(response.data.data[0]);
          axios.get(`post/getDepositaccount/TOONTA`)
            .then((response) => {
              setaccountNumber(response.data.data[0].accountNumber);
              setaccountName(response.data.data[0].accountName)
              for (let i = 0; i < response.data.data.length; i++) {
                depositaccountlite.push({
                  value: response.data.data[i].bankName,
                  label: response.data.data[i].bankName,
                  imgPath: response.data.data[i].imgbank,
                  name: response.data.data[i].accountName,
                  number: response.data.data[i].accountNumber
                })
                setdepositaccount(depositaccountlite);
                fetchData();
                handleImageChange();
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
        const response = await axios.get('/post/getlistPromotion');
        for (let i = 0; i < response.data.data.length; i++) {
          PromotionList.push({
            value: response.data.data[i].id,
            label: response.data.data[i].namepromotion,
            imgPath: response.data.data[i].filename,
            id: response.data.data[i].id,
          })
          setDatapromotion(PromotionList);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  }, []);

  const handleImageChange = (event) => {
    event.preventDefault(); 
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
          console.log(selectedValueId)
          fetch(baseURL + 'depositToonta', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: iduse.id,
              type: "deposit",
              quantity: 250,
              accountNumber: iduse.accountNumber,
              accountName: iduse.accountName,
              idPromotion: selectedValueId,
              filename: nameImg,
              phonenumber: user,
              agent_id: '2',
            })
          })
            .then((response) => response.json())
            .then(async (data) => {
              console.log(data.message);
              switch (data.message) {
                case "ไม่มีชื่อบัญชีธนาคารของเว็บ Toonta ในระบบเงินฝาก":
                  setimgnofidication(nottifocationimgSaven);
                  setresOpenFive(true);
                  break;
                case "สลิปนี้เคยถูกใช้งานแล้ว":
                  setimgnofidication(nottifocationimgTwo);
                  setresOpenFive(true);
                  break;
                case "ชื่อบัญชีที่ได้ลงทะเบียนไม่ถูกต้อง กรุณาตรวจสอบ สลิปโอนเงิน ":
                  setimgnofidication(nottifocationimgThree);
                  setresOpenFive(true);
                  break;
                case "ล้มเหลวในการทำรายการ":
                  setimgnofidication(nottifocationimgFour);
                  setresOpenFive(true);
                  break;
                case "ฝากเงินสำเสร็จ":
                  setimgnofidication(nottifocationimgFive);
                  setresOpenFive(true);
                  break;
                case "QR Code หมดอายุ หรือ ไม่มีรายการอยู่จริง":
                  setimgnofidication(nottifocationimgSix);
                  setresOpenFive(true);
                  break;
                case "เติมเงินไม่สำเร็จ ไม่สามารถรับโปรโมชั่นได้":
                  setimgnofidication(nottifocationimgEight);
                  setresOpenFive(true);
                  break;
                default:
                  setimgnofidication(nottifocationimgTwo);
                  setresOpenFive(true);
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

  const handleSubmitdeposit = (e) => {
    e.preventDefault();
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

  const selectElement = (event) => {
    let id_Promotion = datapromotion.filter(item => item.label === event.target.value);
    setSelectedValueId(id_Promotion[0].id)
    setSelectedValue(event.target.value);
    // for (let i = 0; i < depositaccount.length; i++) {
    //   if (depositaccount[i].value === event.target.value) {
    //     setaccountNumber(depositaccount[i].number);
    //     setaccountName(depositaccount[i].name)
    //   }
    // }
  };

  const copyToClipboard = async (accountNumberToonta) => {
    try {
      await navigator.clipboard.writeText(accountNumberToonta);
      alert('คัดลอกเลขบัญชีธนาคารเรียบร้อยแล้ว!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '10px',
      width: '50%',
      borderColor: 'purple',
      boxShadow: 'none',
      marginLeft: '25%',  // ทำให้ select อยู่ตรงกลาง
      '&:hover': {
        borderColor: 'purple',
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'gray' : provided.backgroundColor,  // พื้นหลังของ option ที่ถูกเลือกมีสีเทา
    }),
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
                  <img src={gitDeposit} alt="/" />
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
              <img src={imgnofidication} alt="/" onClick={handleClose} />
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

      {modalIsOpen && (
        <div className="overlayMoney">
          <div className="modalContainerMoney">
            <div className="modalRightMoney">
              <div className="contentMoney">
                <div className="modal-image-container">
                  <img src={selectedImage} alt="/" style={customModalStyles} className="dirlodsile" />
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
      <div className="main-AddMoneyPromo">
        <div className="wrapperMoney">
          <div className="textFrameDeposit">
            <div className="title-textDeposit font">เติมเงิน</div>
          </div>
          <div className="form-container">
            <div className="form-inner">
              <form action="#"  className="login" >

                <div className="containerBank">
                  <ImageList sx={{
                    width: 450, height: 200,
                    '@media (max-width: 768px)': {
                      width: '450',
                      height: '200',
                    }, color: '#000000'
                  }} cols={1}>
                    {depositaccount.map((option) => (
                      <ImageListItem key={option.number}>
                        <div className="boostaem">
                          <div className="nearby-user">
                            <div className="lineDeposit">
                              <div className="headerDeposit">
                                <img
                                  src={option.imgPath}
                                  alt="user"
                                  className="profile-photo-lg"
                                />
                                <h5 className="profile-link font">{option.label}</h5>
                              </div>
                            </div>
                            <div className="col-md-7 col-sm-7">
                              <div>
                                <h5 className="nameDeposit font">{option.name}</h5>
                              </div>
                              <div>
                                <h5 className="text-mutedNumber font">{option.number}</h5>
                              </div>
                            </div>
                            <div className="positionButton">
                              <button className="buttonCopyTest font" onClick={() => copyToClipboard(option.number)}>คัดลอก</button>
                            </div>
                          </div>
                        </div>
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>

                <div className="fieldDataDeposit font  input-container">
                  <select className="lang_menuPromotionDeposit font" style={{ fontSize: '17px' }} value={selectedValue} onChange={selectElement}>
                    {datapromotion.map((option) => (
                      <option key={option.id} className="lang_menuPromotionDeposit font" style={{ fontSize: '17px' }}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <br />
                <div className=" font">
                  <p className="textTitle font">อัพโหลดหลักฐานการโอน</p>
                  <input
                    id="fileInput"
                    type="file"
                    placeholder="อัพโหลดรูปภาพ"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="upload-box"
                    style={{ display: 'none' }} // ซ่อน input file ไว้
                  />
                  <button type="button" onClick={() => document.getElementById("fileInput").click(handleImageChange)} className="custom-upload-btn">ส่งสลิป</button>

                  {selectedImage && (
                    <div>
                      <br />
                      <h5 className="textTitleimg font" style={{ display: 'inline-block' }}>ตัวอย่างรูปภาพ</h5>
                      <img className="imgSile"
                        src={selectedImage} alt="Uploaded"
                        style={{ display: 'inline-block' }}
                        onClick={() => openModal(selectedImage)}
                      />
                    </div>
                  )}
                </div>
                <div className="fieldMoney btnsubmitDeposit font">
                <input type="submitDeposit" defaultValue="เติมเงิน" onClick={(e) => handleSubmitdeposit(e)} />
                </div>
                <div className="money-link ">
                  <a className="font" href=""> พบปัญหา ติดต่อฝ่ายบริการลูกค้า</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="displayFooterDeposit">
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

        <div className="imgWayDeposit">
          <img className="scaltimgDeposit " src={imgwomen} id="wel-img-id" alt="" />

          <div className="imgShadowCircleI">
            <img className="scaltimgDepositCircle" src={circle1} alt="" />
          </div>

          <div className="imgShadowCircleII">
            <img className="scaltimgDepositCircle" src={circle2} alt="" />
          </div>

          <div className="imgShadowCircleV">
            <img className="scaltimgDepositCircle" src={circle1} alt="" />
          </div>

          <div className="imgShadowCircleVI">
            <img className="scaltimgDepositCircle" src={circle1} alt="" />
          </div>
          <img className="scaltimgDepositCircleIII" src={imgpanpa} alt="" />
          <img className="scaltimgDepositCircleIIII" src={imgpanpaII} alt="" />

        </div>
      </div>
    </>
  );
};

export default AddPromotionMoney;

