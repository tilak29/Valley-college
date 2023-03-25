import React from "react";
import './apartment.css';
import images from "../../assets/images";

function Apartments() {

    return(
        <div>
            <section className="section-1">
                    <img src={images.amain}/>
            </section>

        <div>    
        <section className="section-2">
                <h1 id="heading">Master Plan</h1>
        </section>
        <section className="section-1">
                            <img src={images.a1}/>
                    </section>
        </div>

        <div>    
        <section className="section-2">
                <h1 id="heading">39 units and 6 retail Shops</h1>
        </section>
        <section className="section-1">
                            <img src={images.a2}/>
                    </section>
        </div>

<div id="flexdiv">
        <div className="flexdiv-1">    
        <section className="section-2">
                <h1 id="heading">Retail spaces</h1>
        </section>
        <section className="section-1">
                            <img src={images.a3}/>
                    </section>
        </div>
        <div className="flexdiv-1">    
        <section className="section-2">
                <h1 id="heading">Final Floor plan</h1>
        </section>
        <section className="section-1">
                            <img src={images.a4}/>
                    </section>
        </div>
</div>


<div>    
        <section className="section-2">
                <h1 id="heading">One bed room<br/>Apartment design with den/ 2nd bed room</h1>
        </section>
        <section className="section-1">
                            <img src={images.a5}/>
                    </section>
        </div>


        <div>    
        <section className="section-2">
                <h1 id="heading">1 bedroom and 2 bedroom with den design</h1>
        </section>
        <section className="section-1">
                            <img src={images.a6}/>
                    </section>
        </div>


<div id="flexdiv">
        <div className="flexdiv-1">    
        <section className="section-2">
                <h1 id="heading">First and third floor plan</h1>
        </section>
        <section className="section-1">
                            <img src={images.a7}/>
                    </section>
        </div>
        <div className="flexdiv-1">    
        <section className="section-2">
                <h1 id="heading">Living space.</h1>
        </section>
        <section className="section-1">
                            <img src={images.a8}/>
                    </section>
        </div>
</div>






        </div>
    )
    
}
export default Apartments;