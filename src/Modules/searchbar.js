import React, {useState} from "react";
import searchicon from "../../src/assets/icons/searchicon.png";
import '../css/searchbar.css';



function Searchbar(){

    const [show,setShow] = useState(false)

        const ShowName =()=>{
          if(show === true){
            setShow(false)
          }else{
            setShow(true)
          }
        }
    return(
        <div className="bar">
         {show && (<div className="bar"><input placeholder='Search' /></div>)}
         
         <img src={searchicon} style={{height:'17px'}} onClick={ShowName}/>
        
        </div>
    )
};
export default Searchbar;