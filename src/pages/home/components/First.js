import React from "react";
import Button from "../../../components/button/button";
import "../home.css";
import logo from "../../../assets/images/logo.png";
import picture from "../../../assets/images/picture.png";
import frame from "../../../assets/images/frame.png";
import fir1 from "../../../assets/images/fir1.png";
import fir2 from "../../../assets/images/fir2.png";
import fir3 from "../../../assets/images/fir3.png";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full border-solid border-[#434343] rounded-xl bg-[#434343] pl-2 pr-2">
          <ul
            className="flex mb-0 list-none items-center justify-center flex-wrap pt-2 pb-2 flex-row text-white"
            role="tablist "
          >
            <li className="flex border-[0.1px] border-[#535353] rounded-lg px-3 -mb-px mr-2 last:mr-0 flex-auto text-center">
              <img src={fir1} className="w-7 h-auto  my-auto" />
              <a
                className={
                  "text-s px-2 py-3 shadow-lg rounded block leading-normal "
                }
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Availability
              </a>
            </li>
            <li className="flex border-[0.1px] border-[#535353] rounded-lg px-2 -mb-px mr-2 last:mr-0 flex-auto text-center">
              <img src={fir2} className="w-7 h-auto my-auto" />
              <a
                className={
                  "text-s px-3 py-3 shadow-lg rounded block leading-normal "
                }
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Photos
              </a>
            </li>
            <li className="flex border-[0.1px] border-[#535353] rounded-lg px-2 -mb-px mr-2 last:mr-0 flex-auto text-center">
              <img src={fir3} className="w-7 h-auto my-auto" />
              <a
                className={
                  "text-s px-3 py-3 shadow-lg rounded block leading-normal"
                }
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

function First() {
  return (
    <>
      <div className="first1-div">
        <img className="first1-img" src={picture} alt="1pic" />
        <div className="first2-div">
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default First;

{
  /* <button className="first2-btn">
<img className="first-icon-img" src={fir1} alt="2pic" />
<p>Availability</p>
</button>
<button className="first2-btn">
<img className="first-icon-img" src={fir2} alt="2pic" />
<p>Photos</p>
</button>
<button className="first2-btn">
<img className="first-icon-img" src={fir3} alt="2pic" />
<p>Chat</p>
</button> */
}
