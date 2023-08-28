import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../pangHome/test.css';
import { Container, Menu, MenuItem, Button, AppBar, Tab, Tabs } from '@mui/material';
function MenuHome() {

    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="topbar-menu">
                <div className="topNavBarMenu d-dev">
                    <div className="topNavBar-link">
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <ul className="dropdown-mainNav">
                                <li>
                                    <a className="box d-dev active" data-type="home" data-v="home" href="/Home">
                                        <span className="icon-home"></span>
                                    </a>
                                </li>
                                <li><a className="box" data-type="sport" data-v="game" data-name="กีฬา" href="/sport">
                                    <span className="icon-sport"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>กีฬา</span>
                                </a></li>
                                <li><a className="box addfont" data-type="live" data-v="game" data-name="คาสิโนสด" href="/live">
                                    <span className="icon-live"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>คาสิโนสด</span>
                                </a></li>
                                <li><a className="box addfont" data-type="slot" data-v="game" data-name="สล็อต" href="/slot">
                                    <span className="icon-slot"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>สล็อต</span>
                                </a></li>
                                <li><a className="box addfont" data-type="card" data-v="game" data-name="การ์ด" href="/card">
                                    <span className="icon-card"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>การ์ด</span>
                                </a></li>
                                <li><a className="box addfont" data-type="fish" data-v="game" data-name="เกมส์ยิงปลา" href="/fish">
                                    <span className="icon-fish"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>เกมส์ยิงปลา</span>
                                </a></li>
                                <li><a className="box addfont" data-type="esport" data-v="game" data-name="อีสปอร์ต" href="/esport">
                                    <span className="icon-esport"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>อีสปอร์ต</span>
                                </a></li>
                                <li><a className="box addfont" data-type="lottery" data-v="game" data-name="ล็อตเตอรี่" href="/lottery">
                                    <span className="icon-lottery"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>ล็อตเตอรี่</span>
                                </a></li>
                                <li><a className="box addfont" data-type="cockfight" data-v="game" data-name="ไก่ชน" href="/cockfight">
                                    <span className="icon-cockfight"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>ไก่ชน</span>
                                </a></li>
                                <li><a className="box addfont" data-type="instantwin" data-v="game" data-name="ชนะทันที"
                                    href="/instantwin">
                                    <span className="icon-instantwin"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>ชนะทันที</span>
                                </a></li>
                                <li className="vip-menu-btn addfont"><a className="box" data-type="vip" data-name="vip" href="/vip">
                                    <span className="icon-vip"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>วีไอพี</span>
                                </a></li>
                                <li className="angpow_topBar hide addfont"><a className="box" data-type="angpow" data-name="angpow"
                                    href="/angpow">
                                    <i className="icon-angpow icSize addfont"></i>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>อังโปว์</span>
                                </a></li>
                                <li><a className="box addfont" data-type="promotions" data-v="promotions" data-name="promotions"
                                    href="/promotions">
                                    <span className="icon-promotion"></span>
                                    <span className='addfont' style={{color: '#FFFFFF'}}>โปรโมชั่น</span>
                                </a></li>
                                <li className="side-menu-calendar-btn">
                                    <div className="box" data-type="daily-mission" data-name="daily-mission">
                                        <i className="fa-regular fa-club"></i>
                                        <span className='addfont' style={{color: '#FFFFFF'}}>ลงชื่อเข้าใช้รายวัน</span>
                                    </div>
                                </li>
                            </ul>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
}


export default MenuHome;