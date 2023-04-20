import React from "react";
import "./Features.scss";
import Check from "../../asset/check.png";
import Video from "../../asset/video/image.mp4";
const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="left">
          <h1>a whole world of freelance talent at your fingertips.</h1>

          <div className="title">
            <img src={Check} alt="" />
            <span> The best for every budget</span>
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
          <div className="title">
            <img src={Check} alt="" />
            <span>Quality work done quickly</span>
          </div>
          <p>
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
          <div className="title">
            <img src={Check} alt="" />
            <span>Protected payments, every time</span>
          </div>
          <p>
            Always know what you will pay upfront. Your payment is not released
            until you approve the work.
          </p>
          <div className="title">
            <img src={Check} alt="" />
            <span> 24/7 support</span>
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </div>
        <div className="right">
          <video src={Video} controls />
        </div>
      </div>
    </div>
    
  );
};

export default Features;
