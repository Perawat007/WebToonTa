import React from 'react';
import nft from "../../img/toonta.png";
import '../pangHome/test.css';

const MenuDown = () => {
    return (
        <>
            <div className="section-footer top-footer d-dev">
                <div className="section-footer-inner">
                    <div className="footer-menu-link">
                        <div>
                            <img className="logo" src={nft} alt="logo" />
                        </div>
                        <div>
                            <a className='addfont' href="/Home">บ้าน</a>
                            <a className='addfont' href="/about-us">เกี่ยวกับพวกเรา</a>
                            <a className='addfont' href="/faq">คำถามที่พบบ่อย</a>
                            <a className='addfont' href="/contact-us">ติดต่อพวกเรา</a>
                            <a className='addfont' href="/terms-and-conditions">ข้อกำหนดและเงื่อนไข</a>
                            <a className='addfont' href="/privacy-policy">นโยบายความเป็นส่วนตัว</a>
                            <a className='addfont' href="/responsible-gaming">การเล่นเกมส์อย่างมีความรับผิดชอบ</a>
                            <a className='addfont' href="/disconnect-policy">ยกเลิกนโยบาย</a>
                        </div>
                        <div>
                            <div className="live-chat-green-button button pointer vBtnLaiveChat">
                                <img className="img-responsive mgr10"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/ico-live-chat.png?v=27" alt='' />
                                <span>แชทสด</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default MenuDown;