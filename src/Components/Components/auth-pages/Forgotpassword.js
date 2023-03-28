import React,{useState} from "react";
import'../../../css/auth_activities.css';
import ResetForm from "./Resetpass";


function ForgotForm(){
  
    return(<div>

        <div className="form2">
<center><br/><br/>
    <h1 className="heading">Enter Recovery E-mail</h1> <br/><br/>
    <input   type="Email" placeholder="E-mail Address"      className="user"     />
    <button className="btn" >Submit</button>
</center>

        </div>
  
    
    </div>)
};
export default ForgotForm;