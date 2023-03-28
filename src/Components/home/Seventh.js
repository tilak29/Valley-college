import React, { useState } from "react";

import icons from "../../constants/icons";

import Carousel from "react-multi-carousel";

import images from "../../constants/images";
import sixthredcir from "../../assets/images/sixthredcir.png";
import sixthredline from "../../assets/images/sixthredline.png";
import sixthline from "../../assets/images/sixthline.png";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import s5 from "../../assets/images/s5.png";
import s55 from "../../assets/images/s55.png";
import flowerleft from "../../assets/images/flowerleft.png";

import "react-multi-carousel/lib/styles.css";
import fourthcircle from "../../assets/images/fourthcircle.png";

import "../../css/Home.css";
import "../../css/HomeRespo.css";
import { useCarousel } from "use-carousel-hook";

function Card(props) {
  return (
    <div>
      <div>
        <img
          style={{ cursor: "pointer" }}
          className="slide-img"
          src={props.image1}
          alt="abc"
        />
        <p class="slide-card-text1">Lorem Ipsum is simply{props.text1}</p>
        <p class="slide-card-text2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry{props.text2}
        </p>
      </div>
    </div>
  );
}

const Seventh = () => {
  const { ref, previous, next, setCurrent, reset } = useCarousel();

  return (
    <div className="avaible1">
      <div style={{ display: "flex", marginLeft: "10%" }}>
        <p className="fourth-text">Blog</p>
        <img
          style={{
            height: "4%",
            maxWidth: "5%",
            marginLeft: "-2%",
            zIndex: "0",
          }}
          src={fourthcircle}
          alt="fourthcircle"
        />
      </div>
      <div>
        <img
          style={{
            float: "right",
            width: "10vw",
            height: "28vh",
            marginTop: "-5%",
          }}
          src={flowerleft}
        />
        <div style={{ display: "flex", marginTop: "2%" }}>
          <ul ref={ref} className="slide-list">
            <li style={{ marginRight: "2%" }}>
              <Card image1={s1} text1="" text2="" />
            </li>
            <li style={{ marginRight: "2%" }}>
              <Card image1={s2} text2="" />
            </li>
            <li style={{ marginRight: "2%" }}>
              <Card image1={s55} text1="" text2="" />
            </li>
            <li style={{ marginRight: "2%" }}>
              <Card image1={s2} text1="" text2="" />
            </li>
            <li style={{ marginRight: "2%" }}>
              <Card image1={s1} text1="" text2="" />
            </li>
            <li style={{ marginRight: "2%" }}>
              <Card image1={s55} text1="" text2="" />
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "4%", marginLeft: "44%", marginBottom: "2%" }}>
          <button
            type="submit"
            style={{ background: "none", border: "none" }}
            onClick={() => previous()}
          >
            <img style={{ cursor: "pointer" }} src={sixthline} type="submit" />
          </button>
          <button
            type="submit"
            style={{ background: "none", border: "none" }}
            onClick={() => next()}
          >
            <img
              type="submit"
              className="sixthline"
              style={{ marginLeft: "8%", cursor: "pointer" }}
              src={sixthredline}
              alt="fourthredline"
            />
            <img
              type="submit"
              className="sixthcircle"
              style={{
                marginTop: "-20%",
                marginLeft: "-19%",
                cursor: "pointer",
                marginBottom: "-15%",
              }}
              src={sixthredcir}
              alt="fourthredcir"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
