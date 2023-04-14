import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import Button from "../../components/button/button";
import '../../styles/global.css'
import {Link} from "react-router-dom";

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
          <Link to="/"
          class="nav-link nav-link-ltr" >
              Home
          
            </Link>
          </li>
           <li>
            <Link to="/aminities"
            class="nav-link nav-link-ltr" >
              Amenities
            </Link>
          </li>
            <li>
            <Link to="/apartments"
            class="nav-link nav-link-ltr" >
              Apartments
            </Link>
          </li>
            <li>
            <Link to="/gallery"
            class="nav-link nav-link-ltr" >
              Gallery
            </Link>
          </li>
          <li>
          <Link to="/contactus"
            class="nav-link nav-link-ltr" >
              Contact us
            </Link>
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
