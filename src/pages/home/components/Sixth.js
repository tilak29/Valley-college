import React from "react";
import { useCarousel } from "use-carousel-hook";
import '../home.css';
import '../../../styles/global.css'

import event1 from "../../../assets/images/event1.png";

import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'




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

function Sixth() {
  const { ref, previous, next, setCurrent, reset } = useCarousel();

  return (
    <div className="six-sec">
        <div style={{position:"relative"}}>
      <ul ref={ref} className="carousel__list6">
        <li class="carousel__item6">
          <Card image1={event1}/>
        </li>
        <li class="carousel__item6">
          <Card image1={event1}/>
        </li>
        <li class="carousel__item6">
          <Card image1={event1}/>
        </li>
        <li class="carousel__item6">
          <Card image1={event1}/>
        </li>
        <li class="carousel__item6">
          <Card image1={event1}/>
        </li>
      </ul>

      <div className="six-btn-div">
        <button
          onClick={() => previous()}
          style={{ background: "none", border: "none", padding:"1rem" }}
        >
          <BsArrowLeft className="six-icon"/>
        </button>

        <button
          onClick={() => next()}
          style={{ background: "none", border: "none", padding:"1rem 1rem 1rem 0" }}
        >
          <BsArrowRight className="six-icon"/>
        </button>
      </div>

      </div>


      <div className="six-text-div">
        <p className="six-text1">Events</p>
        <p className="six-text2">Lorem Ipsum is simply dummy text printing</p>
        <p className="six-text3">accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
      </div>
    </div>
  );
}

export default Sixth;

