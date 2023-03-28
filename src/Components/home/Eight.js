import React from "react";
import { useCarousel } from "use-carousel-hook";
import "../../css/Home.css";

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

import fourthcircle from "../../assets/images/fourthcircle.png";

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

function Eight() {
  const { ref, previous, next, setCurrent, reset } = useCarousel();

  return (
    <div style={{ marginBottom: "10rem" }}>
      <div style={{ display: "flex", marginLeft: "10%" }}>
        <p style={{ marginLeft: "42%" }} className="fourth-text">
          Blog
        </p>
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
      <ul ref={ref} className="carousel__list8">
        <li class="carousel__item8">
          <Card image1={s1} text1="" text2="" />
        </li>
        <li class="carousel__item8">
          <Card image1={s2} text2="" />
        </li>
        <li class="carousel__item8">
          <Card image1={s55} text1="" text2="" />
        </li>
        <li class="carousel__item8">
          <Card image1={s2} text1="" text2="" />
        </li>
        <li class="carousel__item8">
          <Card image1={s1} text1="" text2="" />
        </li>
        <li class="carousel__item8">
          <Card image1={s55} text1="" text2="" />
        </li>
      </ul>
      <div style={{ marginLeft: "44%", marginTop: "5%" }}>
        <button
          onClick={() => previous()}
          style={{ background: "none", border: "none" }}
        >
          <img style={{ cursor: "pointer" }} src={sixthline} />
        </button>

        <button
          onClick={() => next()}
          style={{ background: "none", border: "none" }}
        >
          <img
            className="sixthline"
            style={{ marginLeft: "8%", cursor: "pointer" }}
            src={sixthredline}
            alt="fourthredline"
          />
          <img
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
  );
}

export default Eight;
