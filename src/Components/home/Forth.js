import React from "react";
import fourthcircle from '../../assets/images/fourthcircle.png';
import ReactPlayer from "react-player";
import fourthrect from '../../assets/images/fourthrect.png';
import fourthredcir from '../../assets/images/fourthredcir.png';
import fourthredline from '../../assets/images/fourthredline.png';
import arrowright from '../../assets/images/arrowright.png';


function Fourth(){
    return(
    <>
    
  
  
    <div style={{marginLeft:"34%", marginTop:"10%"}} >
    <div className="fourth-texts">
            <p className="fourth-text">Digital Adds</p>
            <img style={{height:"5%", maxWidth:"5%" ,marginLeft:"-4%",zIndex:"0"}} src={fourthcircle} alt="fourthcircle"/>
            </div>
            </div>

        <div style={{display:"flex",maxWidth:"100%",height:"auto" ,marginLeft:"16%", marginTop:"5%",zIndex:"11"}} >
            <div className="video-responsive">
            <iframe className="iframe" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
  </div>
    
  <div className="video-responsive">
  <iframe className="iframe" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
  </div>
  {/* <div style={{ marginLeft:"18%", zIndex:"-66",backgroundColor:"red" }}>
        <img className="fourth-rect" src={fourthrect} alt="fourthrect" />
        <img className="fourth-rect" src={fourthrect} alt="fourthrect" />
      </div> */}
  </div>
        
        
      
      
      <div style={{marginTop:"2%",marginLeft:"44%",marginBottom:"10%"}}>
        <a href="#" style={{ display:"flex", textDecoration:"none"}}>
        <p style={{fontSize:"clamp(1rem, 2vw, 1.5rem)", color:"black"}}>Viwe All</p>
        <img style={{maxWidth:"10%",height:"auto",marginTop:"-0.67%",marginLeft:"2%"}} src={arrowright} alt="arrowright"/>
        
      </a>
      </div>
     
      {/* <div style={{ display:"flex",marginTop:"4%", marginLeft:"44%",flexWrap:"1"}}>
      <a href="#" className="link"  >
        <p style={{marginTop:"-2%", fontSize:"clamp(1rem, 3vw, 1.5rem)", color:"black"}}>Viwe All</p>
        <img style={{maxWidth:"20%",height:"auto",marginLeft:"6rem",marginTop:"-10%"}} src={arrowright} alt="arrowright"/>
      </a>
      </div> */}
   
      
    </>
    )
}

export default Fourth;