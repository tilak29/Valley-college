import React from "react";
import '../css/contactus.css';
import icon1 from "../assets/icons/icon1rr.png";
import mailicon from "../assets/icons/mailiconrr.png";
import callicon from "../assets/icons/calliconrr.png";
import locationicon from "../assets/icons/locationiconrr.png";
import fbicon from "../assets/icons/fbiconrr.png";
import instaicon from "../assets/icons/instaiconrr.png";

function Contactus()
{
    return(
        <>
        <div className="contactus">
      
        <section className="leftsection">
          <div className="head1div"><b><h1 className="heading1">Contact us </h1><img className="icon1C" src={icon1} alt="pic1.png"/></b> </div>
          <p className="text">
            omnis iste natus error sit voluptatem accusantium doloremque<br/> 
             laudantium, totam rem aperiam, eaque ipsa quae ab
          </p><br/>

          <h1 className="heading1">Talk with us</h1> <br/>
          <div className="talkwithusdiv">
          <p className="text"><img className="mailicon" src={mailicon} alt="abc"/>&ensp;&ensp;zerozero@gmail.com</p><br/>
          <p className="text"><img className="callicon" src={callicon} alt="abc"/>&ensp;&ensp;(208) 555-0112</p></div><br/>

         <h1 className="heading1">Visit us</h1><br/>
         <div className="visitusdiv"><img className="locationicon" src={locationicon} alt="abc"/>
         <p className="adress">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut<br/>
            fugit, sed quia consequuntur magni dolores eos qui.</p></div> <br/>
         
         <h1 className="heading1">Follow us</h1><br/>
         <div className="followusdiv">
        <div className="fb_insta"><img className="fbicon" src={fbicon} alt="abc"/> <p className="username">zerozerooffical</p></div><br/>
        <div className="fb_insta"><img className="instaicon" src={instaicon} alt="abc"/><p className="username">@zerozerooffical</p></div>
        </div>
        </section>

        <section className="rightsection">
        <center>
        <form className="formcontactus">
            <input className="input1" type={"text"} placeholder="Full Name"></input><br/><br/>
            <input className="input1" type={"email"} placeholder="Email"></input><br/><br/>
            <input className="input2" type={"text"} placeholder="Message"></input><br/><br/>
            <button className="btncontactus">SEND MESSAGE</button>
        </form>
        </center>
        </section>
        </div><br/><br/><br/><br/>


        <div>
        <center>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8421277900907!2d72.5278796644611!3d23.029568121846793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c8d02742e5%3A0xf176f601b1c5d46a!2sItc%20Narmada%2C%20I%20I%20M%2C%20Vastrapur%2C%20Ahmedabad%2C%20Gujarat%20380015%2C%20India!5e0!3m2!1sen!2snl!4v1676632821496!5m2!1sen!2snl" title="Map"></iframe>
        </center></div>

        <br/>
      
      </>
        
    )
}
export default Contactus;