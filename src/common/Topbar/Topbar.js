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
            <img style={{cursor:"pointer"}} src={i1} alt="l1" />
            <p>(808)555-0111</p>
          </div>
          <div className="ficon">
            <img style={{cursor:"pointer"}} src={i2} alt="l1" />
            <p>tim.jennings@example.com</p>
          </div>
        </div>
        <div className="last-icons">
          <Link to="https://facebook.com">
        <img className="top-img" src={fb} style={{cursor:"pointer"}} alt="" />
        </Link>
        <Link to="https://instagram.com">
        <img className="top-img" src={insta} style={{cursor:"pointer"}} alt="" />
        </Link>
        <Link to="https://twitter.com">
        <img className="top-img" src={twit} style={{cursor:"pointer"}} alt="" />
        </Link>
        <Link to="https://youtube.com">
       <img className="top-img" src={youtube} style={{cursor:"pointer"}} alt="" />
       </Link>
        </div>
      </div>
      <hr style={{}} />
    </>
  );
}

export default Header;
