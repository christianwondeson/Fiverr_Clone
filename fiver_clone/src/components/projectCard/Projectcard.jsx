import React from "react";
import "./Projectcard.scss";
import { Link } from "react-router-dom";

const Projectcard = ({ item }) => {
  return (
    <Link to="/" className="Link">
      <div className="Projectcard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Projectcard;
