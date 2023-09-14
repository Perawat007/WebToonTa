import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Headers from '../../headersII';
import Allgamecamps from '../../pangHome/Allgamecamps';
import MenuDown from '../../pangHome/MenuDown';
import AllSlotGame from './AllSlotGame';
import Footer from '../../pangHome/FooTer/Footer';   
import "../ListGame.css"
import NavicationBarHome from '../../NavicationBar/navicationbar'

export default function GameTypeSlot() {
    return (
        <>
            <div>
                <Headers />
            </div>
            <div className="pg-home common-holder">
                <AllSlotGame />
            </div>
            <br/>
            <div>
                <MenuDown />
                <div className="section-footer mid-footer d-dev">
                    <div className="section-footer-inner">
                        <Allgamecamps />
                    </div>
                </div>
                <Footer />
                <div className="positionNav">
          <NavicationBarHome />
        </div>
            </div>
        </>
    )
}