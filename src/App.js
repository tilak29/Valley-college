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
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <div>

        <BrowserRouter>
        <Topbar />
         <Header />
        <Routes>
          <Route  exact path=""       element={ <Home />}/>
          <Route  path="/gallery"     element={ <Gallery/>}/>
          <Route  path="/aminities"   element={ <Aminities/> }/>
          <Route  path="/apartments"  element={ <Apartments/>}/>
          <Route  path="/contactus"   element={ <Contactus/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
             
      </div>
    </>
  );
}

export default App;
