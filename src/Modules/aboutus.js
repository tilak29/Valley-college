import React from "react";
import pic1 from "../assets/images/photo1.png";
import '../css/aboutus.css';
import photo2 from "../assets/images/photo2.png";
import logo1 from "../assets/icons/logo1.png";
import logo2 from "../assets/icons/logo2.png";
import logo3 from "../assets/icons/logo3.png";
import logo4 from "../assets/icons/logo4.png";
import photo3 from "../assets/images/auphoto3.png";






function Page() {
   return(
<>
        <div className="aboutus">
            <center><img className="picture1" src={pic1} alt="pic1.png"></img></center>
            <br></br>
            <center className="tp">
                <p className="text0">
                    omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam <br></br>
                    rem aperiam, eaque ipsa quae ab <br></br>
                </p><br />
            </center>

            <center className="tp">
                <p className="text1">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos <br></br>
                    qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, <br></br>
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat  <br></br>
                    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid <br></br>
                    ex ea commodi consequatur? Quis autem vel eum eos et accusamus et iusto odio dignissimos ducimus qui blanditiis <br></br>
                    praesentium voluptatum deleniti atque corrupti quos<br></br>
                </p><br />
            </center>

            <center className="tp">
                <p className="text2">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos <br></br>
                    qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.<br></br>
                </p>
            </center>
        </div>

        <div className="photo2div">
            <img className="photo2" src={photo2} alt="pic2.png"></img>
            <p className="textpic2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores<br></br>
                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,<br></br>
                consectetur,
            </p>
        </div>


        <div className="logodiv_aboutus">
            <section className="logo1">
                <img className="logo1" src={logo1} alt="pic1.png"></img>
                <p className="logo1text" >Nemo enim ipsam voluptatem quia </p>
            </section>
            <section className="logo2">
                <img className="logo2" src={logo2} alt="pic1.png"></img>
                <p className="logo2text" >Nemo enim ipsam voluptatem quia</p>
            </section>
            <section className="logo3">
                <img className="logo3" src={logo3} alt="pic1.png"></img>
                <p className="logo3text">Nemo enim ipsam voluptatem quia</p>
            </section>
            <section className="logo4">
                <img className="logo4" src={logo4} alt="pic1.png"></img>
                <p className="logo4text">Nemo enim ipsam voluptatem quia</p>

            </section>
            </div>


            <div className="photo3">
               <center> <img className="photo3" src={photo3} alt="pic3" /></center>
            </div> 






    </>
   );
}

export default Page;
