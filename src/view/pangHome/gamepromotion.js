import React, { useEffect } from 'react';
import '../pangHome/test.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import promotionimg from '../../img/home/022.png'
import rewardsclubimg from '../../img/home/011.png'
const Gamepromotion = () => {

    useEffect(() => {

    }, [])
    return (
        <>
            <div className="d-dev">
                <div className="product-sub-category mgt45">
                    <div className="list">
                        <div className="vp-title addfont">โปรโมชั่นล่าสุด</div>
                        <div className="sub-img"><img
                                src={promotionimg}
                                alt="promotions" /></div>
                    </div>
                    <div className="list">
                        <div className="vp-title addfont">RewardsClub</div>
                        <div className="sub-img"><img
                                src={rewardsclubimg}
                                alt="promotions" /></div>
                    </div>
                </div>
            </div>
            
            <div className="chat-widget-container"></div>
            <div id="lineLoad" className="hide"></div>
            <div id="lineLoadOpt2" className="hide"></div>
        </>
    );
}

export default Gamepromotion;