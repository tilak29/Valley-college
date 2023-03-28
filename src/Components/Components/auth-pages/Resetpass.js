import React from "react";
import'../../../css/auth_activities.css';


function ResetForm(){
    return(<div>

        <div className="form3">
<center>
    <h1 className="heading">Reset Your Password</h1>
    <p className="para">Please enter your New Password</p>
    <input   type="password" placeholder="New Password" className="user"     /><br></br>
    <input   type="password" placeholder="Re-Enter Password"  className="pass"        />
    
    <button className="btn">Update</button>
</center>

        </div>

    
    </div>)
};
export default ResetForm;