import React from 'react'
const Mycard = () => {

    return (
        <>
            <div className="sidebar-menu m-dev" id="sidebar-menu">
                <div className="sidebar-header">
                    <img className="logo" src="asset_web/img/toonta.png" alt="logo" />
                    <div className="sidebar-close">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="sidebar-body">
                    <div className="sidebar-list">
                        <a className="box" href="/Home">
                            <span className="icon icon-home"></span>
                            <span>บ้าน</span>
                        </a>
                        <a className="box" data-type="sport" data-v="game" data-name="กีฬา" href="/sport">
                            <span className="icon-sport"></span>
                            <span>กีฬา</span>
                        </a>
                        <a className="box" data-type="live" data-v="game" data-name="คาสิโนสด" href="/live">
                            <span className="icon-live"></span>
                            <span>คาสิโนสด</span>
                        </a>
                        <a className="box" data-type="slot" data-v="game" data-name="สล็อต" href="/slot">
                            <span className="icon-slot"></span>
                            <span>สล็อต</span>
                        </a>
                        <a className="box" data-type="card" data-v="game" data-name="การ์ด" href="/card">
                            <span className="icon-card"></span>
                            <span>การ์ด</span>
                        </a>
                        <a className="box" data-type="fish" data-v="game" data-name="เกมส์ยิงปลา" href="/fish">
                            <span className="icon-fish"></span>
                            <span>เกมส์ยิงปลา</span>
                        </a>
                        <a className="box" data-type="esport" data-v="game" data-name="อีสปอร์ต" href="/esport">
                            <span className="icon-esport"></span>
                            <span>อีสปอร์ต</span>
                        </a>
                        <a className="box" data-type="lottery" data-v="game" data-name="ล็อตเตอรี่" href="/lottery">
                            <span className="icon-lottery"></span>
                            <span>ล็อตเตอรี่</span>
                        </a>
                        <a className="box" data-type="cockfight" data-v="game" data-name="ไก่ชน" href="/cockfight">
                            <span className="icon-cockfight"></span>
                            <span>ไก่ชน</span>
                        </a>
                        <a className="box vip-menu-btn" href="/vip">
                            <span className="icon icon-vip"></span>
                            <span>วีไอพี</span>
                        </a>
                        <a className="box" href="/promotions">
                            <span className="icon icon-promotion"></span>
                            <span>โปรโมชั่น</span>
                        </a>
                        <a className="box tournament-menu hide" href="/leaderboard">
                            <span className="icon icon-leaderboard"></span>
                            <span>ลีดเดอร์บอร์ด</span>
                        </a>
                        <a className="box" href="/about-us">
                            <i className="fa-regular fa-circle-info"></i>
                            <span>ศูนย์ข้อมูล</span>
                        </a>
                        <a className="box" href="/contact-us">
                            <i className="fa-regular fa-user-headset"></i>
                            <span>ติดต่อพวกเรา</span>
                        </a>

                        <a className="box" href="https://aff.siam855th.co">
                            <span className="icon icon-affiliate"></span>
                            <span>โปรแกรมในเครือ</span>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Mycard