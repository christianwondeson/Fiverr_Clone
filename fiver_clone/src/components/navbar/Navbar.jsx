import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import img from "../../asset/me_ai.jpg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "chris",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>fiverr Business</span>
          <span>explore</span>
          <span>english</span>
          <span>sign in</span>
          {!currentUser?.isSeller && <span>become a seller</span>}
          {!currentUser && <button className="nav_btn">join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={img} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        gigs
                      </Link>
                      <Link to="/add" className="link">
                        add new gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    orders
                  </Link>
                  <Link to="./messages" className="link">
                    messages
                  </Link>
                  <Link to="/" className="link">
                    logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & design
            </Link>
            <Link className="link" to="/">
              video & animation
            </Link>
            <Link className="link" to="/">
              writing & translation
            </Link>
            <Link className="link" to="/">
              ai services
            </Link>
            <Link className="link" to="/">
              digital marketing
            </Link>
            <Link className="link" to="/">
              music & audio
            </Link>
            <Link className="link" to="/">
              programming & tech
            </Link>
            <Link className="link" to="/">
              business
            </Link>
            <Link className="link" to="/">
              lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
