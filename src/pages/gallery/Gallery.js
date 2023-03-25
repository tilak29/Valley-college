import React, { useState } from "react";
import images from "../../assets/images";
import './gallery.css';
import { AppBar, Box,Tab,Tabs,Typography } from "@mui/material";
import Room from "./component/Room";

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


      <AppBar position="static"  sx={{borderRadius:2}} className="Appbar">

        <Tabs value={activeTab} 
        onChange={(event,newValue)=>setActiveTab(newValue)} 
        variant="fullWidth" centered 
        sx={{"& .MuiTabs-indicator":{ backgroundColor:"white"},
            "& .MuiTab-root":{color:"white"},
            "& .MuiTab-root:hover":{color:"white"},
            "Button.Mui-selected":{color:"white",fontWeight:"bolder",zIndex:"0",backgroundColor:"rgba(128, 128, 128, 0.301)",border:"50px blue",borderRadius:"5px"}}}>
          
          <Tab label="Room" sx={{color:"white",minWidth:"25%"}} />
          <Tab label="Kitchen" sx={{color:"white",minWidth:"25%"}} />
          <Tab label="Lobby" sx={{color:"white",minWidth:"25%"}}  />
          <Tab label="Study Room" sx={{color:"white",minWidth:"25%"}} />

          </Tabs>

          </AppBar>
          <Tabpanel value={activeTab} index={0}><Room/></Tabpanel>
        <Tabpanel value={activeTab} index={1}>
          
        <section className="section-2">
                <h1 id="heading">Add Photos for Kitchen</h1>
        </section>
        </Tabpanel>
        <Tabpanel value={activeTab} index={2}>
        <section className="section-2">
                <h1 id="heading">Add Photos for Lobby</h1>
        </section>
        </Tabpanel>
        <Tabpanel value={activeTab} index={3}>
        <section className="section-2">
                <h1 id="heading">Add Photos for Study Room</h1>
        </section>
        </Tabpanel>


    </div>
  )
}





function Gallery(){
  const[ activeTab ,setActiveTab]= useState(0);

return(
    <div>

        <section className="section-1">
                <img src={images.gmain}/>
        </section>

        <section className="section-2">
                <h1 id="heading">Gallery</h1>
        </section>

        <section className="section-3">
               <MuiTabs/>
          
        </section>



    </div>
)


}
export default Gallery;