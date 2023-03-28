import React from "react";
import Fifth from "./components/Fifth";
import First from "./components/First";
import Fourth from "./components/Forth";
import Second from "./components/second";
import Seventh from "./components/Seventh";
import Sixth from "./components/Sixth";
import Third from "./components/Third";

function Home() {
  return (
    <>
      <div>
        <First />
        <Second />
        <Third/>
        <Fourth/>
        <Fifth/>
        <Sixth/>
        <Seventh/>
      </div>
    </>
  );
}

export default Home;
