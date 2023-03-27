import React from "react";
import './contactus.css';
import images from "../../assets/images";

function Contactus() {

    const options = ['React', 'Node', 'Express', 'Mssql', 'Mongodb'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
    }
 

    return(
        <div>
            <section className="section-1">
                    <img src={images.Cmain}/>
            </section>

<div className="contact-sec-2">
    <div className="form">


        <section className="section-2">
                <h1 id="heading" >Contact us</h1>
        </section>
       
<div id="formdiv">
    <section className="formdiv-sec1">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
    </section>
    <section className="formdiv-sec2">
        <input type="number" placeholder="Phone Number" id="hah" />
        <input type="email" placeholder="Email" />
    </section>


    <section className="formdiv-sec3">
           <select onChange={onOptionChangeHandler} id="options">
  
             <option>Interested In</option>
              {options.map((option, index) => {
              return <option key={index} >  
             {option}
             </option>
             })}

             
            </select>
           <input type="date" placeholder="Moving in Date" />
</section>
   
        <textarea placeholder="Comments" className="comment" ></textarea>  
        <button placeholder="submit" type="submit"> submit</button>
        </div>      
    </div>    
<section className="git">
<section style={{marginTop:"15%"}}>
                <h1 id="heading2" >Get in touch</h1>
        </section>

      <div style={{display:"flex",marginTop:"5%"}}>  <img style={{height:"40px",width:"40px"}} src={images.C1} alt="jf" /><p style={{marginLeft:"5%",marginTop:"2%"}}> (505) 555-125  </p></div>
      <div style={{display:"flex",marginTop:"5%"}}>  <img style={{height:"40px",width:"40px"}} src={images.C2} alt="jf" /> <p style={{marginLeft:"5%"}}>  4517 Washington Ave. Manchester, Kentucky 39495 </p></div>
        
        <div style={{display:"flex",marginTop:"8%",}}> 
    <a href="https://www.facebook.com/">     <img className="cimg" src={images.C3} alt="jf" /> </a> &nbsp;  &nbsp;
    <a href="https://www.instagram.com/"> <img className="cimg" src={images.C4} alt="jf" />  </a>   &nbsp;  &nbsp;
    <a href="https://twitter.com/">    <img className="cimg" src={images.C5} alt="jf" />  </a>    &nbsp;   &nbsp;
        
     <a href="https://www.youtube.com/" >  <img className="cimg" src={images.C6} alt="jf" />  </a> 
         
         </div>
        
</section>

    </div>


    <div style={{paddingBottom:"20%"}}>
<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8421277900907!2d72.5278796644611!3d23.029568121846793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c8d02742e5%3A0xf176f601b1c5d46a!2sItc%20Narmada%2C%20I%20I%20M%2C%20Vastrapur%2C%20Ahmedabad%2C%20Gujarat%20380015%2C%20India!5e0!3m2!1sen!2snl!4v1676632821496!5m2!1sen!2snl" title="Map"></iframe>
</div>









        </div>
    )
}
export default Contactus;