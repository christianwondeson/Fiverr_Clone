import React from "react";
import "./Featured.scss";
import manImage from "../../asset/man.png";
import Search from "../../asset/search.png";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>find the perfect <i>freelance</i> services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <img src={Search} alt="" />
              <input type="text" placeholder="try building a mobile app" />
            </div>
            <button>search</button>
          </div>
          <div className="popular">
            <span>popular</span>
            <button>web design</button>
            <button>word press</button>
            <button>ai services</button>
            <button>mobile app development</button>
          </div>
        </div>
        <div className="right">
          <img src={manImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
