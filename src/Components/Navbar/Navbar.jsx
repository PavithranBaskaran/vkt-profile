import React from "react";
import "./navbar.css";
import logo from "../../../src/logo.png";
import title from "../../images/title.png";

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navContainer">
          <div className="navLeft">
            <div className="navItem">Home</div>
            <div className="navItem">Fabrics</div>
            <div className="navItem">Specialization</div>
            <div className="navItem">About</div>
          </div>
          <div className="navCenter">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="navRight">
            <div className="navItem">Contact</div>

            <div className="navItem">Instagram</div>
            <div className="navItem">LinkedIn</div>
            <div className="navItem">Gmail</div>
          </div>
        </div>
        <div className="centerContent">
          <img src={title} alt="" className="centerTitle" />
          <h3 className="centerText">Finests Quality Fabrics</h3>
          <button className="centerBtn">Enquire Now</button>
        </div>
      </div>
      <div className="mobileNavContainer">
        <div className="mobileTopNav">
          <img src={logo} alt="" className="mobileLogo" />
          <div className="mobileNavItem">Blog</div>
          <div className="mobileNavItem">Gallery</div>
        </div>
        <div className="mobilecenterContent">
          <img
            src={title}
            alt=""
            className="mobilecenterTitle"
            style={{ width: "280px" }}
          />
          <h3 className="mobilecenterText">Finests Quality Fabrics</h3>
          <button className="mobilecenterBtn">Enquire Now</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
