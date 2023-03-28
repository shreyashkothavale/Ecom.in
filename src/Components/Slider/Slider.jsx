import React, { useState } from "react";
import "./slider.css";
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner3 from "../../assets/Banner3.jpg";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
function Slider() {
  const [currenSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const Forward = () => {
    setCurrentSlide(currenSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const Backward = () => {
    setCurrentSlide(currenSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div
        className="containers"
        style={{ transform: `translateX(-${currenSlide * 100}vw)` }}
      >
        <img src={Banner1} alt="" />
        <img src={Banner2} alt="" />
        <img src={Banner3} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={Forward}>
          <ArrowBack className="arrowback"></ArrowBack>
        </div>
        <div className="icon" onClick={Backward}>
          <ArrowForward className="arrowforward"></ArrowForward>
        </div>
      </div>
    </div>
  );
}

export default Slider;
