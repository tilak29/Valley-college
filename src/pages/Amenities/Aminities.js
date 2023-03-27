import React from "react";
import './aminities.css';
import images from "../../assets/images";
import { AppBar, Box,Tab,Tabs,Typography } from "@mui/material";
import { useState } from 'react';
import Apart from "./Component/Apartment/apart";


const Tabpanel =(props)=>{
    const{children,value,index}=props
    return(
      <div hidden={ value !== index }>
        {value===index && <div mt={2}>{children}</div>}
      </div>
    )
  }
    
  const MuiTabs =()=>{
  
    const[ activeTab ,setActiveTab]= useState(0);
    
    return(
      <div>
  
  
        <AppBar position="static"  sx={{borderRadius:2}} id="appbar">
  
          <Tabs value={activeTab} 
          onChange={(event,newValue)=>setActiveTab(newValue)} 
          variant="fullWidth" centered 
          sx={{"& .MuiTabs-indicator":{ backgroundColor:"white"},
              "& .MuiTab-root":{color:"white"},
              "& .MuiTab-root:hover":{color:"white"},
              "Button.Mui-selected":{color:"white",fontWeight:"bolder",zIndex:"0",backgroundColor:"rgba(128, 128, 128, 0.301)",border:"50px blue",borderRadius:"5px"}}}>
            
            <Tab label="Apartment" sx={{color:"white",minWidth:"50%"}} />
            <Tab label="Common" sx={{color:"white",minWidth:"50%"}} />
      
  
            </Tabs>
  
            </AppBar>
            <Tabpanel value={activeTab} index={0}><Apart/></Tabpanel>
          <Tabpanel value={activeTab} index={1}>
            
          <section className="section-2">
                  <h1 id="heading">Add Common Amenities</h1>
          </section>
          </Tabpanel>
         

      </div>
    )
  }

function Aminities() {


    return(
        <div>
            <section className="section-1">
                    <img src={images.Amain}/>
            </section>

            <section className="section-2">
                <h1 id="heading">Amenities</h1>
            </section>

            <section className="section-3">
               <MuiTabs/>
            </section>

        

        </div>
    )
    
}
export default Aminities;