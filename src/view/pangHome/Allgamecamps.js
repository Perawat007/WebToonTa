import React, { useEffect } from 'react';
import '../pangHome/Modal.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Allgamecamps = () => {
    useEffect(() => {
        //DataGet();
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 12,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 414,
                settings: {
                    arrows: false,
                    slidesToShow: 12,
                    slidesToScroll: 6,
                }
            }
        ]
    };

    return (
        <div>
            <div className="footer-providers">
                <div className="icon slick-initialized slick-slider">
                    <div className="slick-list draggable">
                        <Slider {...settings}>
                            <div className="footer-prov-list slick-slide" data-slick-index="-1" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-33.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="-1" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-34.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="0" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-1.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="1" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-2.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="2" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-3.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="3" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-4.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="4" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-7.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="5" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-8.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="6" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-10.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="7" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-12.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="8" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-13.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="9" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-14.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="10" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-17.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="11" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-18.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="12" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-19.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="13" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-22.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="14" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-26.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="15" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-27.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="16" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-28.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="17" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-31.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide slick-current slick-active"
                                data-slick-index="18" aria-hidden="false" tabIndex="0">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-32.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide slick-active" data-slick-index="19"
                                aria-hidden="false" tabIndex="0">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-33.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="20" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-34.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="21" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-1.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="22" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-2.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="23" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-3.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="24" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-4.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="25" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-7.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="26" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-8.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="27" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-10.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="28" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-12.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="29" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-13.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="30" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-14.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="31" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-17.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="32" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-18.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="33" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-19.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="34" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-22.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="35" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-26.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="36" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-27.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="37" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-28.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="38" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-31.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="39" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-32.png?v=27" alt='' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="40" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-33.png?v=27" alt='Slide 1' />
                            </div>
                            <div className="footer-prov-list slick-slide" data-slick-index="41" aria-hidden="true"
                                tabIndex="-1">
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/provider-big/Bottom-Icon-34.png?v=27" alt='Slide 2' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Allgamecamps;