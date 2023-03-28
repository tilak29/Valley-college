import React from "react";
import clean1 from '../../assets/images/clean1.png';
import clean2 from '../../assets/images/clean2.png';
import clean3 from '../../assets/images/clean3.png';
import clean4 from '../../assets/images/clean4.png';
import third5 from '../../assets/images/5 1.png';
import number1 from '../../assets/images/number1.png';
import number2 from '../../assets/images/number2.png';
import number3 from '../../assets/images/number3.png';
import number4 from '../../assets/images/number4.png';
import number5 from '../../assets/images/number5.png';
import number33 from '../../assets/images/number33.png';
import number55 from '../../assets/images/number55.png';


import fourthcircle from '../../assets/images/fourthcircle.png';

import { display } from "@mui/system";


function Third(){
    return(
        <>

        <div className="third-sect">
            <div className="third-texts"> 
        <div className="third-text1s">
        <span style={{display:"flex"}}>
        <p className="third-text1">How to use Zero Zero</p>
        <img style={{height:"5%", maxWidth:"10%" ,marginLeft:"-6%",zIndex:"-1"}} src={fourthcircle} alt="fourthcircle"/>
        </span>
        <p className="third-text2">doloremque laudantium, totam</p>
        </div>
        <div className="third-text3s">
        <p className="third-text3">omnis iste natus error sit voluptatem accusantium laudantium,</p>
        </div>
        </div>

        <div className="third-cards">
            <div className="third-bdr-all">
            <div style={{padding:"2% 2% 2% 1%"}} className="third-border3">
            <img style={{paddingLeft:"0.7%"}} className="third-number3" src={number1} />
            <img className="third-image" src={clean1} alt="clean1"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
            
            <div style={{padding:"2% 1.5% 2% 1.2%"}} className="third-border3">
            <img className="third-number3" src={number2} />
            <img className="third-image" src={clean2} alt="clean2"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
           
        </div>

        
            <div className="third-bdr-all">
            <div style={{padding:"2% 1.5% 2% 0%"}} className="third-border3">
            <img style={{paddingLeft:"1%"}} className="third-number3" src={number33} />
            <img className="third-image" src={clean3} alt="clean3"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>

            <div style={{padding:"2% 1.5% 2% 1.2%"}} className="third-border3">
            <img className="third-number3" src={number4} />
            <img className="third-image" src={clean4} alt="clean4"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>
        </div>

       
            <div className="third-bdr-all">
            <div style={{padding:"2.5% 1.8% 1.7% 1.2%"}} className="third-border3">
            <img className="third-number5" src={number55} />
            <img className="third-image" src={third5} alt="third3"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
            </div>

            <div style={{visibility:"hidden",padding:"2.5% 2% 1.7% 1.2%"}} className="third-border3">
          
            <img style={{marginTop:"-14%"}} className="third-number3" src={number4} />
            <img className="third-image" src={clean4} alt="clean4"/>
            <p className="third-text4">omnis iste natus error sit voluptatema ccusantium laudantium,</p>
          
            </div>
            </div>
            
        </div>

        </div>
        
        </>
    )
}

export default Third;

