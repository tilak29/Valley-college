import React from "react";
import '../home.css';
import '../../../styles/global.css'

import dot from "../../../assets/images/dot.png";

function Fourth() {
  return (
    <div className="fourth-sec">
        <div className="fourth-text-div">
        <div style={{textAlign:"center"}}>
            <p className="fourth-text">Geographic Location</p>
            <p className="fourth-text1">Lorem Ipsum is simply dummy text printing</p>
            </div>
            <div className="fourth-ol-div">
        <ol className="fourth-ol">
            <li className="fourth-li">
                <img src={dot}/>
                <p>4200 Students at the Blue Ridge Community college at the same exit.</p>
            </li>
            <li className="fourth-li">
                <img src={dot}/>
                <p>Central Shenandoah Valley Airport at the same exit</p>
            </li>
            <li className="fourth-li">
                <img src={dot}/>
                <p>Centrally located from JMU, EMU, Bridgewater University and Mary Baldwin University</p>
            </li>
            <li className="fourth-li">
                <img src={dot}/>
                <p>Walmart Distribution Center for east coast, White-Wave milk pasteurizing plant,
Reynolds Consumer products, Energizer, Fed Ex, Packaging Corporation</p>
            </li>
            <li className="fourth-li">
                <img src={dot}/>
                <p>Middle of two major counties- Augusta and Rockingham</p>
            </li>
            <li className="fourth-li">
                <img src={dot}/>
                <p>Easy access</p>
            </li>
        </ol>
        </div>
        </div>

        
        <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" className="fourth-map" width="100%" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        </div>
       
  );
}

export default Fourth;


