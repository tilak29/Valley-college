import React from "react";
import Home from "./pages/home/Home";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Topbar from "./common/Topbar/Topbar";

function App() {
  return (
    <>
      <div>
        <Topbar />
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
