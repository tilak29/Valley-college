import React from "react";
import'../../../css/auth_activities.css';


function SignupForm(){
    return(<div>

        <div className="form">
<center>
    <h1 className="heading">Sign up</h1>
    <p className="para">Please enter your details</p>
    <input   type="text" placeholder="Username"      className="user"     /><br></br>
    <input   type="password" placeholder="Password"  className="pass"        />
    <input   type="Email" placeholder="E-mail Address"      className="user2"     />

    <button className="btn">Sign up</button>
</center>

        </div>

    
    </div>)
};
export default SignupForm;