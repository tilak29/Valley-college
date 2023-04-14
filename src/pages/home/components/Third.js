import React from "react";
import { useCarousel } from "use-carousel-hook";
import '../home.css';
import '../../../styles/global.css'

import thirdleft from "../../../assets/images/thirdleft.png";
import thirdright from "../../../assets/images/thirdright.png";
import thirdcircle from "../../../assets/images/thirdcircle.png";
import room from "../../../assets/images/room.png";
import room1 from "../../../assets/images/room1.png";
import room2 from "../../../assets/images/room2.png";
import room3 from "../../../assets/images/room3.png";
import room4 from "../../../assets/images/room4.png";




function Card(props) {
  return (
    <div>
       <img
          style={{ cursor: "pointer" }}
          className="slide-img"
          src={props.image1}
          alt="abc"
        />
    </div>
  );
}

function Third() {
  const { ref, previous, next, setCurrent, reset } = useCarousel();

  return (
    <div className="third-sec">
      <div className="third-text-div">
        <p className="third-text">
          Gallery
        </p>
        <p className="third-text1">
        Lorem Ipsum is simply dummy text printing
        </p>
      </div>
      <ul ref={ref} className="carousel__list8">
        <li class="carousel__item8">
          <Card image1={room}/>
        </li>
        <li class="carousel__item8">
          <Card image1={room1}/>
        </li>
        <li class="carousel__item8">
          <Card image1={room2}/>
        </li>
        <li class="carousel__item8">
          <Card image1={room3}/>
        </li>
        <li class="carousel__item8">
          <Card image1={room4}/>
        </li>
        <li class="carousel__item8">
          <Card image1={room1}/>
        </li>
        <li class="carousel__item8">
          <Card image1={room3}/>
        </li>
        <li class="carousel__item8">
          <Card image1={room4}/>
        </li>
      </ul>
      <div className="third-button-div">
        <button
          onClick={() => previous()}
          style={{ background: "none", border: "none" }}
        >
          <img style={{ cursor: "pointer", marginTop:"-30%" }} src={thirdleft} />
        </button>

        <button
          onClick={() => next()}
          style={{ background: "none", border: "none" }}
        >
          <img
            className="sixthline"
            style={{ marginLeft: "12%", cursor: "pointer" }}
            src={thirdright}
            alt="fourthredline"
          />
          <img
            className="sixthcircle"
            style={{
              marginTop: "-25%",
              marginLeft: "80%",
              cursor: "pointer",
              marginBottom: "5%",
            }}
            src={thirdcircle}
            alt="fourthredcir"
          />
        </button>
      </div>
    </div>
  );
}

export default Third;


