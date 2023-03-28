import React from "react";
import images from "../../../assets/images";
import './Room.css';

function Room(){
    return(
        <div className="room-images">
          <img src={images.g1}/>
          <img src={images.g2}/>
          <img src={images.g3}/>
          <img src={images.g4}/>
          <img src={images.g5}/>
          <img src={images.g6}/>
          <img src={images.g7}/>
          <img src={images.g8}/>
          <img src={images.g9}/>
          <img src={images.g10}/>
          <img src={images.g11}/>
          <img src={images.g12}/>
        </div>
    )
}
export default Room;