import React from "react";
import'../../../css/ret-policy.css';
import image from '../../../assets/images/Ellipse.jpg'
function Returnpolicy(){
    return(
        <div className="maindiv">
             <center>
             <h1 className="ret-h1">Return Policy<img src={image} className="ellipse"></img></h1><br/>

             
             <p className="ret-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

             </center>


        </div>

    )
}

export default Returnpolicy;