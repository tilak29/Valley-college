import React from "react";
import Flogo from "../../assets/images/Flogo.png";
import contactusic1 from "../../assets/icons/facebook1.png";
import contactusic2 from "../../assets/icons/locate.png";
import contactusic3 from "../../assets/icons/facebook1.png";
import contactusic4 from "../../assets/icons/insta1.png";
import contactusic5 from "../../assets/icons/twiteer.png";
import contactusic6 from "../../assets/icons/youtub.png";

function Footer() {
  return (
    <>
      <div className=" relative mt-10 bottom-0 left-0 bg-[#252525]">
        <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8">
          <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-1 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
              <div>
                <img className="" src={Flogo}></img>
                <ul className="mt-10 space-y-4">
                  <li className="flex items-center">
                    <img src={contactusic1} className="w-9 h-auto" />
                    <a
                      href="/"
                      className="ml-2 text-white font-reg text-lg text-base transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      (505) 555-0125
                    </a>
                  </li>
                  <li className="flex items-center">
                    <img src={contactusic2} className="w-9 h-auto" />
                    <a
                      href="/"
                      className="ml-2 text-white font-reg text-lg duration-300 hover:text-deep-purple-accent-200"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </a>
                  </li>

                  <li>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                      <a
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <img src={contactusic3} className="h-9" />
                      </a>
                      <a
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <img src={contactusic4} className="h-9" />
                      </a>
                      <a
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <img src={contactusic5} className="h-9" />
                      </a>
                      <a
                        href="/"
                        className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                      >
                        <img src={contactusic6} className="h-9" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/*   -----------------------------------   */}
              <div class="relative md:mt-0 mt-10">
                <p className="md:pl-10 pl-0 font-elMessiri font-medium tracking-wide text-white text-xl">
                  Company
                </p>
                <ul className="md:pl-10 pl-0 mt-7 space-y-5 ">
                  <li>
                    <a
                      href="/"
                      className="text-white text-base	font-reg transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/aminities"
                      className="text-white text-base	font-reg transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Amenities
                    </a>
                  </li>
                  <li>
                    <a
                      href="/apartments"
                      className="text-white text-base	font-reg transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Apartments
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery"
                      className="text-white text-base	font-reg transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contactus"
                      className="text-white text-base	font-reg transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              {/* -------------------------------------------- */}
              <div className="md:mt-0 mt-10">
                <p className=" font-elMessiri font-medium tracking-wide text-white text-xl ">
                  Legal
                </p>
                <ul className="mt-7  space-y-5">
                  <li>
                    <a
                      href="/"
                      className="text-white text-base	font-reg transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Terms of use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white text-base	font-reg transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white text-base	font-reg transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Cookie policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white text-base	font-reg transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Help center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:mt-1 mt-10 md:max-w-md lg:col-span-2">
              <span className="text-white	font-reg text-xl font-medium tracking-wide">
                Subscribe to news letter
              </span>
              <form className="mt-6">
                <input
                  placeholder="Write your email here"
                  required
                  type="text"
                  className="flex-grow text-white w-full h-12 px-4 mb-3 transition duration-200 bg-[#515151] border-[#515151] rounded border md:mr-2 md:mb-0"
                />
                <button
                  type="submit"
                  className="flex-grow mt-4 w-full h-12 px-4 font-reg font-semibold	 tracking-wide text-black transition duration-200 rounded shadow-md bg-[#FFC701] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col justify-center pt-5 pb-5 border-t border-gray-800 sm:flex-row">
            <p className="text-white text-sm">
              © Copyright 2020 Lorem Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
