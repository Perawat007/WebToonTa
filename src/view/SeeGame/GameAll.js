import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import axios from '../../api/axios';
import Headers from '../headers';
import Mycard from '../pangHome/Mycard';
import MenuHome from '../pangHome/MenuHome';
import Allgamecamps from '../pangHome/Allgamecamps';
import MenuDown from '../pangHome/MenuDown';
import PaymentMethod from '../pangHome/PaymentMethod';
import GamePlay from './GamePlay';
import BannerBox from '../pangHome/BannerBox';
import TopDown from '../pangHome/TopDown';
import Footer from '../pangHome/FooTer/Footer';
import "./ListGame.css"

export default function GameAll() {

    return (
        <>

            <div className='containerDogsila'>
                <div className="main-content" >
                    <Mycard />
                    <div id="topBar-holder" className="topBar-holder">
                        <Headers />
                    </div>
                    <div className="pg-home common-holder">
                        <GamePlay />
                        <div className="buttonToTop"><i className="fa-regular fa-arrow-up-to-line"></i></div>
                        {/* <div className="pg-game common-holder" style={{ display: "block" }}>
                            <div className="content-holder">
                            </div>
                        </div> */}
                    </div>
                    <div>
                        <div className="overlay-mobile"></div>
                        <MenuDown />
                        <div className="section-footer mid-footer d-dev">
                            <div className="section-footer-inner">
                                <Allgamecamps />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}