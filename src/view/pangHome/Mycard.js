import React from 'react'
const Mycard = () => {

    return (
        <>
            <div className="sidebar-menu" id="sidebar-menu">
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
                        <a className="box" href="/promotions">
                            <span className="icon icon-promotion"></span>
                            <span>โปรโมชั่น</span>
                        </a>
                       
                        <a className="box" href="/about-us">
                            <i className="fa-regular fa-circle-info"></i>
                            <span>ศูนย์ข้อมูล</span>
                        </a>
                        <a className="box" href="/contact-us">
                            <i className="fa-regular fa-user-headset"></i>
                            <span>ติดต่อพวกเรา</span>
                        </a>
                        <a className="box" href="/contact-us">
                            <i className="fa-regular fa-user-headset"></i>
                            <span>ออกจากระบบ</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mycard