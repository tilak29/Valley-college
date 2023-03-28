import React,{useState} from "react";
import'../../../css/auth_activities.css';
import ForgotForm from "./Forgotpassword";
import SignupForm from "./signup";



function Login(){




    return(<div>

        <div className="form">
<center>
    <h1 className="heading">Log in</h1>
    <p className="para">Please enter your details</p>
    <input   type="text" placeholder="Username"      className="user"     /><br></br>
    <input   type="password" placeholder="Password"  className="pass"        /><br/><br/>

    <p className="forgot" >Forgot password?</p><br/>

    <button className="btn">Log in</button>
    <p  className="para2" >Don't have an account?</p>
</center>

        </div>
       
    
    </div>)
};
export default Login;