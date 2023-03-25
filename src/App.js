import React from "react";
import Home from "./pages/home/Home";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Topbar from "./common/Topbar/Topbar";
import Gallery from "./pages/gallery/Gallery";
import Room from "./pages/gallery/component/Room";

function App() {
  return (
    <>
      <div>
        <Topbar />
        <Header />
        <Home />
        {/* <Gallery/> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
