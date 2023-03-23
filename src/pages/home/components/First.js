import React from "react";
import Button from "../../../components/button/button";
import "../home.css";
import logo from "../../../assets/images/logo.png";
import picture from "../../../assets/images/picture.png";

function First() {
  return (
    <>
      <div style={{marginTop:"5rem",width:"100%",marginRight:"auto"}}>
        <img style={{width:"100%",marginLeft:"auto" ,marginRight:"auto"}} src={picture} alt='1pic'/>
      </div>
    </>
  );
}

export default First;
