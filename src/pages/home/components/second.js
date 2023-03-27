import React from "react";
import Rectangle from "../../../assets/images/Rectangle.png";
import rect2 from "../../../assets/images/rect2.png";
import vector from "../../../assets/images/vector.png";
import vect from "../../../assets/images/vect.png";
import vect1 from "../../../assets/images/vect1.png";
import vect2 from "../../../assets/images/vect2.png";
import vect3 from "../../../assets/images/vect3.png";
import dot from "../../../assets/images/dot.png";
import desh from "../../../assets/images/desh.png";

function Second() {
  return (
    <>
      <div className="md:flex gap-2 items-center max-w-full mx-6 h-auto mt-36">
        <div className="basis-full">
          <img className="w-full h-auto" src={rect2} />
        </div>
        <div className="flex flex-col basis-full gap-4">
          <p className="text-base text-[#007FFF] ">About</p>
          <p className="elMessiri ">
            Discover the value of living fabulously
          </p>
          <p className="reg">
            Set atop the rolling hills of historic Staunton, Big Sky Apartments
            in Staunton provides magnificent views of the gorgeous Shenandoah
            Valley and beyond. Our community provides luxury amenities and
            features, with spacious, pet-friendly apartments in a range of floor
            plans that are ideal for singles, couples, and families! At Big Sky,
            you can experience convenience while enjoying the rewards of scenic
            views in the comfort of your Staunton apartment home.
          </p>
          <ol className="flex flex-col gap-3">
            <li className="flex gap-3">
              <img className="max-w-full h-auto" src={dot} />
              <p className="reg">162 Residential Units</p>
            </li>
            <li className="flex gap-3">
              <img className="max-w-full h-auto" src={dot} />
              <p className="reg">
                21,000 sq.ft of Retails and office
              </p>
            </li>
            <li className="flex gap-3">
              <img className="max-w-full h-auto" src={dot} />
              <p className="reg">372 Bed rooms</p>
            </li>
            <li className="flex gap-3">
              <img className="max-w-full h-auto" src={dot} />
              <p className="reg">Public water and utility</p>
            </li>
          </ol>
          <div className="relative flex items-center">
            <button className="rounded-full bg-[#cce5ff] w-24 h-8">
              <img className="max-w-full h-auto mx-auto" src={desh} />
            </button>
            <p className="text-base  absolute left-20">Learn more</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second;

{
  /* <div className="relative flex max-w-full h-full mx-8 mt-36">
<div className="relative max-w-[55%] top-0 left-0 h-auto">
          <img className="absolute max-w-[80%]	 h-auto left-4	" src={vect1} />
          <img className="absolute max-w-[80%]	 h-auto left-8" src={vect2} />
          <img className="absolute max-w-[80%]	 h-auto" src={vect} />
          <img className="absolute max-w-[80%]	 h-auto left-12" src={vect3} />
          <img
            className="absolute max-w-[10%]s h-auto bottom-20 left-32"
            src={vector}
          />
          <img
            className="absolute  max-w-[70%] h-auto left-20 bottom-20"
            src={Rectangle}
          />
        </div> 
        <div className="max-w-[40%] mx-auto flex flex-col gap-5">
          <p>About</p>
          <h2>Discover the value of living fabulously</h2>
          <p className="text-ellipsis overflow-hidden">
            Set atop the rolling hills of historic Staunton, Big Sky Apartments
            in Staunton provides magnificent views of the gorgeous Shenandoah
            Valley and beyond. Our community provides luxury amenities and
            features, with spacious, pet-friendly apartments in a range of floor
            plans that are ideal for singles, couples, and families! At Big Sky,
            you can experience convenience while enjoying the rewards of scenic
            views in the comfort of your Staunton apartment home.
          </p>
          <ol className="flex flex-col gap-4">
            <li className="flex gap-3">
              <img className="w-5	 h-auto" src={dot} />
              <p>162 Residential Units</p>
            </li>
            <li className="flex gap-3">
              <img className="w-5	 h-auto" src={dot} />
              <p>21,000 sq.ft of Retails and office</p>
            </li>
            <li className="flex gap-3">
              <img className="w-5 h-auto" src={dot} />
              <p>372 Bed rooms</p>
            </li>
            <li className="flex gap-3">
              <img className="w-5 h-auto" src={dot} />
              <p>Public water and utility</p>
            </li>
          </ol>
          <div className="relative flex mt-5 items-center">
            <button className="rounded-full bg-[#cce5ff] w-24 h-8">
              <img className="max-w-8 mx-auto" src={desh} />
            </button>
            <p className="absolute left-20">Learn More</p>
          </div>
        </div>
      </div>
 */
}
