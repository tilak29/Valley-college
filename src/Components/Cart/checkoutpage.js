import React from "react";
import "../../css/checkout.css";

import productimg1 from "../../assets/images/productimg1.png";

function Checkout(){
    return(
<>
<div className="checkoutpage">

       <section className="firstsection">

                    <h2 className="head1checkout">Contact Information</h2><br/>

                    <div className="contactdetails1">
                        <input className="inputemail" type="text" placeholder="Email" /> &ensp;
                        <input className="inputphone" type="text" placeholder="Phone" />
                    </div><br/>
                    <div style={{display:'flex'}}>
                        <input type={"checkbox"} /> <p>Email me with news and offers</p></div><br/><br/>

                    <h2 className="head1checkout">Shipping address</h2><br />

                    <label className="country">Country/Region : </label>
                    <select className="countryselect">
                    <option>India</option>
                    <option>Srilanka</option>
                    <option>Canada</option>
                    <option>Japan</option>
                    <option>Pakistan</option></select><br/><br/>

                    <input className="inputemail" type="text" placeholder="First Name" /> &ensp;
                    <input className="inputphone" type="text" placeholder="Last Name" /> <br/><br/>

                    <input className="adressbar1" type="text" placeholder="Address"/><br/><br/>

                    <div className="address2">
                    <label className="State">State : </label>&ensp;
                    <select className="stateselect">
                    <option>Gujarat</option>
                    <option>Rasasthan</option>
                    <option>Maharashtra</option>
                    <option>Uttarpradesh</option>
                    <option>Hariyana</option></select>&ensp;&ensp;

                    <input className="cityname" type="text" placeholder="City"/>&ensp;
                    <input className="pincode" type="text" placeholder="Pin Code"/>
                    </div><br/>
                    <div style={{display:'flex'}}>
                        <input type={"checkbox"} /> <p>Save this information for next time</p></div>
                    <div style={{display:'flex'}}>
                        <input type={"checkbox"} /> <p>Text me with news and offers</p></div> <br/><br/>

                 <div className="finalbtns">
                    <a href="/cart"><button className="returntocart">Return to cart</button></a>
                    <button className="shipping">Continue to Shipping</button>
                 </div>


        </section>

<section className="secondsection">
<div className="secondsectionsec">
        <section className="imgsecC"><center>
        <img className="productimgC" src={productimg1} alt="img"></img></center>
        </section>

        <section className="textsecC">
        <p><b>Zero Zero-hair removal  cream</b></p><br/>
        <p>Qtv : 1</p><br/>
        <p>Rs. 170.00</p>
        </section>
</div>

<hr/><br/>

<div style={{display:'flex', justifyContent:"space-between",paddingLeft:'3rem',paddingRight:'3rem'}}>
    <p>Subtotal</p>
    <p>Rs. 170.00</p>
</div>

<br/>

<div style={{display:'flex', justifyContent:"space-between",paddingLeft:'3rem',paddingRight:'3rem'}}>
    <p>Shipping</p>
    <p>Calculated at next step</p>
</div><br/><br/>

<hr/><br/>
<div style={{display:'flex', justifyContent:"space-between",paddingLeft:'3rem',paddingRight:'3rem'}}>
    <p>Total</p>
    <p>Rs. 170.00</p>
</div><br/>
<p style={{paddingLeft:'3rem',paddingRight:'3rem'}}>Including Rs.1,036.36 in taxes</p>


</section>
     </div>
        </>
    )
}

export default Checkout;