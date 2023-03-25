import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import Button from "../../components/button/button";

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="abc" className="logo"></img>

        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a class="nav-link nav-link-ltr" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="nav-link nav-link-ltr" href="#">
              Amenities
            </a>
          </li>
          <li>
            <a class="nav-link nav-link-ltr" href="#">
              Apartments
            </a>
          </li>
          <li>
            <a class="nav-link nav-link-ltr" href="#">
              Gallery
            </a>
          </li>
          <li>
            <a class="nav-link nav-link-ltr" href="#">
              Contact us
            </a>
          </li>
          <li>
            <button className="btn">
              <p>Login</p>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
