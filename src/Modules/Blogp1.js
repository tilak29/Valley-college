import React from "react";
import ActionAreaCard from "./card";
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../css/blog1.css";
import images from "../constants/images";
import { useCarousel } from "use-carousel-hook";




function Blogp1(){
     const { ref, previous, next } = useCarousel();


    return(
        <div>

        <section className="sec1">
             <h1 className="sec1h1">Blog</h1>          
             <img src={images.ellipse} className="ssec1img" alt="abc"></img>
        </section>

        <section className="sec2">
          <div className="leftdivsec2">
          <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlink">
             <img src={images.main} className="sec2img" alt="abc"></img></Link></div>
             <div className="flexdiv">
             <h2 className="sec2h2">LATEST</h2> <br></br>
             <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlinktext">
             <p className="sec2p1" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></Link>
             <p className="para">
             Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur....<br/><br/>26 Dec 2022
             </p> 
             </div>
        </section>

        <section className="ssec3">
             <h1 className="h1">All Blogs</h1>
                 <div className="sicon"> 
                 <img className="order-img" src={images.icon1} alt='tgv'/>
                 <img className="order-img2" src={images.icon2} alt='tgv'/>
                  </div>
        </section>

        <section className="sec4" ref={ref}>
        <Link to="/blog/Zero-zero-product-key-ingredients-and-its-use" className="cardlink">
             <ActionAreaCard/></Link>

           

        </section>


        <Stack  spacing={2}>
             <Pagination className="paginationcolor" onClick={() => next()} count={12} hidePrevButton hideNextButton color="standard" />
             </Stack>







    </div>
    )
}
export default Blogp1;