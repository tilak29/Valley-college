import React, { useState } from "react";

import icons from "../../constants/icons";

import Carousel from "react-multi-carousel";

import images from "../../constants/images";
import sixth1 from "../../assets/images/sixth1.png";
import sixth2 from "../../assets/images/sixth2.png";
import sixth3 from "../../assets/images/sixth3.png";
import arrowleft from "../../assets/images/arrowleft.png";
import arrowright from "../../assets/images/arrowright.png";
import flowerleft from "../../assets/images/flowerleft.png";
import colon from "../../assets/images/colon.png";
import sixthredcir from "../../assets/images/sixthredcir.png";
import sixthredline from "../../assets/images/sixthredline.png";
import sixthline from "../../assets/images/sixthline.png";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";

import "react-multi-carousel/lib/styles.css";
import fourthcircle from "../../assets/images/fourthcircle.png";

import "../../css/Home.css";
import "../../css/HomeRespo.css";
import { useCarousel } from "use-carousel-hook";

function Card(props) {
  return (
    <div class="slide-card-bdr">
      <div class="slide-card-all">
        <img class="slide-card-img" src={props.image} alt="abc" />
        <img class="slide-card-colon" src={colon} />
        <p class="slide-card-name">{props.name}</p>
        <p class="slide-card-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum is simply dummy text of the printing and
          typesetting industry
          {props.text}
        </p>
      </div>
    </div>
  );
}

const Sixth = () => {
  const { ref, previous, next, setCurrent, reset } = useCarousel();

  return (
    <div className="avaible2">
      <div style={{ display: "flex", marginLeft: "40%" }}>
        <p className="fourth-text">Testimonial</p>
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
        <div style={{ display: "flex", marginTop: "2%" }}>
          <ul ref={ref} className="slide-list1">
            <li class="slide-list-item">
              <Card image={sixth1} name="Jane Cooper" text="" />
            </li>
            <li class="slide-list-item">
              <Card image={sixth2} name="Jenny Wilson" text="" />
            </li>
            <li class="slide-list-item">
              <Card image={sixth3} name="Kathryn Murphy" text="" />
            </li>
            <li class="slide-list-item">
              <Card image={sixth1} name="Jane Cooper" text="" />
            </li>
            <li class="slide-list-item">
              <Card image={sixth2} name="Jenny Wilson" text="" />
            </li>
            <li class="slide-list-item">
              <Card image={sixth3} name="Kathryn Murphy" text="" />
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "5%", marginLeft: "44%", marginBottom: "2%" }}>
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
    </div>
  );
};

export default Sixth;
