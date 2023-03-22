import React from "react";
import Button from "../../../components/button/button";
import "../home.css";
import "../../../styles/global.css";
import "../../../styles/font.css";

function First() {
  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <p className="first">This is first of home</p>
        <Button />
      </div>
    </>
  );
}

export default First;
