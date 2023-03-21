import React from "react";
import Home from "./pages/home/Home";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Topbar from "./common/Topbar/Topbar";

function App() {
  return (
    <>
      <div>
        <Topbar />
        <Header />
        {/* <Home /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
