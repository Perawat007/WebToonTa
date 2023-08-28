import React from 'react'
import axios from '../../api/axios';

const IntegrationMenu = () => {

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const [progressWidth, setProgressWidth] = React.useState(20);
    const [show, setShow] = React.useState(false);
    const [data, setData] = React.useState([])
    const getMobileOperatingSystem = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        return "Unknown";
    };

    const mobileOS = getMobileOperatingSystem();

    const PlayGame = (codeGame, name, linkGame) => {
        if (codeGame === 'Go Gold Planet' || codeGame === 'CowBoys VS Aliens' || codeGame === 'Lucky Bunny Gold' || codeGame === 'Bounty BallOon' || codeGame === 'RoBo FARM') {
            if (token) {
                axios.post("/post/token", "", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => {
                        if (response.data.message === "TokenOn") {
                            const tokenEn = encodeURIComponent(token);
                            if (linkGame !== null) {
                                const link = linkGame + `?token=${tokenEn}`;
                                if (mobileOS === 'Android') {
                                    window.open(link);
                                } else {
                                    window.open(link, "_self");
                                }
                            }
                        }
                    })
                    .catch((error) => {
                        console.log("error", error);
                        localStorage.removeItem("token");
                        localStorage.removeItem("user")
                        window.location.reload();
                    });
            } else {
                setShow(true);
            }

        } else {
            if (token) {
                axios.get(`seamlesslogIn/${codeGame}/${name}/${user}`)
                    .then((response) => {
                        const link = response.data.data.data.url;
                        if (mobileOS === 'Android') {
                            window.open(link);
                        } else {
                            window.open(link, "_self");
                        }
                    })
                    .catch(error => {
                        console.log("error", error);
                        localStorage.removeItem("token");
                        localStorage.removeItem("user")
                        window.location.reload();
                    });
            } else {
                setShow(true);
            }
        }
    }


    return (
        <>
            <div className="integration-menu" style={{ left: '-57px' }}>
                <div className="integration-menu-inner-content">
                    <div className="integration-menu-items">
                        <div className="side-menu-calendar-btn pointer">
                            <img src="asset_web/img/reward/mission.png" alt="reward" />
                        </div>
                        <div className="side-menu-vip-btn pointer">
                            <img src="asset_web/img/reward/vip.png" alt="reward"/>
                        </div>
                        <div className="sidebar-lucky-spin-btn pointer">
                            <img src="asset_web/img/reward/lucky-spin.png" alt="reward"/>
                        </div>
                        <div className="side-angpow-btn pointer hide">
                            <img src="asset_web/img/reward/angpow.png" alt="reward" />
                        </div>
                        <div className="side-menu-tournament-btn pointer hide">
                            <img src="asset_web/img/reward/leaderboard.png" alt="reward" />
                        </div>
                    </div>
                    <div className="integration-menu-toggle-arrow-button pointer">
                        <i className="fa-solid fa-sort-down"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntegrationMenu