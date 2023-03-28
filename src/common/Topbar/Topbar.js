import React, { useState } from "react";
import "./topbar.css";
import l1 from "../../assets/images/logo.png";
import i1 from "../../assets/icons/headi1.png";
import i2 from "../../assets/icons/headi2.png";

import fb from "../../assets/icons/fb.png";
import insta from "../../assets/icons/insta.png";
import twit from "../../assets/icons/twit.png";
import youtube from "../../assets/icons/youtube.png";

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Turn as Hamburger } from "hamburger-react";

function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="first-icons">
          <div className="ficon">
            <img src={i1} alt="l1" />
            <p>(808)555-0111</p>
          </div>
          <div className="ficon">
            <img src={i2} alt="l1" />
            <p>tim.jennings@example.com</p>
          </div>
        </div>
        <div className="last-icons">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={twit} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
      <hr style={{}} />
    </>
  );
}

export default Header;
