import React from "react";

import jenny from "../../assets/images/jenny.png";
import kathreen from "../../assets/images/kathreen.png";
import jane from "../../assets/images/jane.png";
import "../../css/sectionB.css";
import Rating from "@mui/material/Rating";
import "../../css/sectionB.css";

function SeeAllReviews() {
  return (
    <div className="seeallreviewnewpage">
     
      <br />
      <br />
      <section className="jenny-part1">
        <div className="jenny-logo">
          <img style={{ height: "45px", width: "45px" }} src={jenny} alt="" />
        </div>
        <div className="review">
          <p className="jenny-name"> Jenny Wilson</p> <br />
          <Rating name="read-only" value={4} readOnly />
          <br />
          <p className="review-loremabout">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
      <hr />
      <section className="kathryn-part2">
        <div className="kathryn-logo">
          <img
            style={{ height: "45px", width: "45px" }}
            src={kathreen}
            alt=""
          />
        </div>
        <div className="review">
          <p className="kathryn-name">Kathryn Murphy</p> <br />
          <Rating name="read-only" value={3} readOnly /> <br />
          <p className="review-loremabout">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
      </section>
      <hr />
      <section className="jane-part3">
        <div className="jane-logo">
          <img style={{ height: "45px", width: "45px" }} src={jane} alt="" />
        </div>
        <div className="review">
          <p className="jane-name">Jane Cooper</p> <br />
          <Rating name="read-only" value={4} readOnly /> <br />
          <p className="review-loremabout">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
      </section>
    </div>
  );
}
export default SeeAllReviews;
