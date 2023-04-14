import React from "react";
import '../home.css';
import '../../../styles/global.css'


import order from "../../../assets/images/order.png";

function Seventh() {

  return (
   <>
   <div className="seven-div">
    <div className="seven-text-div">
        <p className="seven-text1">Moving in</p>
        <p className="seven-text2">THINGS TO KNOW ABOUT SERVICES IN STAUNTON, VA</p>
    </div>
    <div className="seven-main-div">
        <div className="seven-main-div1" >
            <div className="seven-sub-div1" >
            <p className="seven-sub-text1">Electricity</p>
            <p className="seven-sub-text2">You must have this service connected by the time you move in. Call Dominion Virginia Power at: 888.667.3000 or visit</p>
            </div>
            <div>
            <p className="seven-sub-text1">Telephone</p>
            <p className="seven-sub-text2">If you wish to have local or long distance phone service, call Verizon at: 540.954.6227 or visit https://www.verizon.com</p>
            </div>
            <div>
                <p className="seven-sub-text1">Water and Sewer</p>
                <p className="seven-sub-text2">Will be billed to you from a sub-metering service. We will set up the account for you when you move in.</p>
            </div>
        </div>

        <div className="seven-sub-div2">
            <img className="seven-img" src={order} />
        </div>

        <div className="seven-main-div1">
            <div className="seven-sub-div1">
                <p className="seven-sub-text1">Cable</p>
                <p className="seven-sub-text2">If you wish to obtain cable services, please contact Comcast at 1(800)XFINITIY – 1(800)934-6489.</p>
            </div>
            <div>
                <p className="seven-sub-text1">Trash Collection</p>
                <p className="seven-sub-text2">Trash collection is included in your rent. Please properly dispose of all trash by bagging it and throwing it in a dumpster.</p>
            </div>
            <div>
                <p className="seven-sub-text1">Water and Sewer</p>
                <p className="seven-sub-text2">Trash collection is included in your rent. Please properly dispose of all trash by bagging it and throwing it in a dumpster.</p>
            </div>
        </div>
    </div>
   </div>
   </>
  );
}

export default Seventh;

