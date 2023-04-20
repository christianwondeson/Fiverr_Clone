import React from "react";
import "./Slide_last.scss";
import Slider from "infinite-react-carousel";

const Slide_last = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="Slidelast">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide_last;
