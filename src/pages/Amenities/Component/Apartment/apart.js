import React from "react";
import './apart.css';
import images from "../../../../assets/images";

function Apart() {
    return(
        <div className="Apart-aminities">
                        <div className="aminities">
                                <img src={images.A1}/>
                                <p className="data">Refrigerator</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A2}/>
                                <p className="data">Electric Range</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A3}/>
                                <p className="data">In Sink Food Disposal</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A4}/>
                                <p className="data">Microwave</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A5}/>
                                <p className="data">Trash disposal</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A6}/>
                                <p className="data">Washer & Dryer</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A7}/>
                                <p className="data">Assigned Mailboxes</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A8}/>
                                <p className="data">Plenty of Closet space</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A9}/>
                                <p className="data">LED Lighting</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A10}/>
                                <p className="data">24 hour<br/> emergency maintenance</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A11}/>
                                <p className="data">Wall to Wall Vinyl LVT<br/> flooring</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A12}/>
                                <p className="data">High Speed Internet Access<br/> Available</p>
                        </div>

                        <div className="aminities">
                                <img src={images.A13}/>
                                <p className="data">Lawn Care & Snow <br/>Removal included</p>
                        </div>


        </div>
    )
}
export default Apart;