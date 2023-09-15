import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";
import axios from "../../../api/axios";

const len = sliderImage.length  - 1;

function Slider(props) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/post/');
      setData(response.data.img);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
       {data && (
        <div className="slider-container">
          <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
          <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          />
          <Dots
            activeIndex={activeIndex}
            sliderImage={sliderImage}
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        </div>
      )} 
    </>
  );
}

export default Slider;