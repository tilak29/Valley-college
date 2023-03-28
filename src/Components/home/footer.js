import React from "react";
import '../../css/link.css';
import zero from "../../assets/images/zero.png";
import mobilelogo from "../../assets/images/mobilelogo.png";
import maillogo from "../../assets/images/mail-logo.png";
import fblogo from "../../assets/images/fblogo.png";
import twlogo from "../../assets/images/tweeterlogo.png";
import pinlogo from "../../assets/images/pinlogo.png";
import instalogo from "../../assets/images/instalogo.png";
import divider from "../../assets/images/divider.png";
import { Email } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Footer1(){
    return( 

        
<div className="footer">
     <section className="section1">
     <Link to='/'><img className="piczero" src={zero} alt="abc"/></Link>
     <img className="mobilelogo" src={mobilelogo} alt="abc"/>
     <p className="mobnum">(208) 555-0112</p>
        <div >
        <img className="maillogo" src={maillogo} alt="abc"/>
        <p className="mailid">  tim.jennings@example.com </p>
        </div>
      <div className="sociallogo">
      <a className="linkfooter" href="www.facebook.com"><img className="fblogo" src={fblogo} alt="abc"/></a>
      <a className="linkfooter" href="www.tweeter.com"><img className="tweeterlogo" src={twlogo} alt="abc"/></a>
      <a className="linkfooter" href="www.pinterest.com"><img className="pinlogo" src={pinlogo} alt="abc"/></a>
      <a className="linkfooter" href="www.instagram.com"><img className="instalogo" src={instalogo} alt="abc"/></a>
      </div>
     </section>

     <section className="section2">
     <h1 className="sec2head">Useful Links</h1><br></br>
     <p className="sec2compo">
        <a className="linkfooter"  href="/">Home </a><br></br><br></br>
        <a className="linkfooter"  href="/shop">Shop</a><br></br><br></br>
       <a className="linkfooter"   href="/aboutus"> About us</a> <br></br><br></br>
        <a className="linkfooter"  href="/blog">Blog </a><br></br><br></br>
      <a className="linkfooter"    href="/contactus">  Contact us </a>
     </p>
     </section>

     <section className="section3">
     <h1 className="sec3head">Customer Service</h1><br></br>
     <p className="sec3compo">
     <a className="linkfooter" href="/faq">Help & FAQs</a> <br></br><br></br>
     <a className="linkfooter" href="/ret-policy">Returns Policy</a> <br></br><br></br>
     <a className="linkfooter" href="/terms">Terms & Conditions</a> <br></br><br></br>
     <a className="linkfooter" href="/policy">Privacy Policy</a> <br></br><br></br>
     <a className="linkfooter" href="#">Support Center</a>
     </p>
     </section>

     <section className="section4">
     <h1 className="sec4head">News Letter</h1><br></br>
     <form className="sec4form">
        <input className="sec4inputtext" type={Email}  placeholder="Email address"></input> <br/><br/>
        <button className="formbutton">Submit</button>
     </form>
     </section>
     
     
     <img className="divider" src={divider} alt="abc"/>


     <center><p className="footertext">© 2022 ZEROZERO. All Rights Reserved</p></center>

     



</div>

    )
};

export default Footer1;

