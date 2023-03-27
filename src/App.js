import React from "react";
import Home from "./pages/home/Home";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Topbar from "./common/Topbar/Topbar";
import Gallery from "./pages/gallery/Gallery";
import Room from "./pages/gallery/component/Room";
import Aminities from "./pages/Amenities/Aminities";
import Apartments from "./pages/Apartments/Apartment";
import Contactus from "./pages/Contact-us/Contactus";

function App() {
  return (
    <>
      <div>
         <Topbar />
         <Header />
         <Home />
         {/* <Gallery/>
         <Apartments/>
         <Aminities/>
         <Contactus/>  */}        
      </div>
    </>
  );
}

export default App;
