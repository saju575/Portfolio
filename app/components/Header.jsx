/* eslint-disable @next/next/no-img-element */

import {
  faAddressCard,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderImage } from "./HeaderImage";

export const Header = () => {
  return (
    // <!-- Header section -->
    <header id="header" className="header">
      <div className="container mx-auto h-full pl-2">
        <div className="h-full flex flex-col md:flex-row justify-between items-center p-4">
          <div className="text-white w-full md:w-1/2">
            <p className="mb-3 text-[#8251CF]">👋 Hi, I am</p>
            <h2 className="mb-6 text-5xl font-bold uppercase">
              Sakil <span className="text-[#38BDF8]">Ahmed</span>
            </h2>
            <p className="mb-8 text-lg font-semibold text-[#8998AC]">
              Web developer
            </p>
            <p className="mb-10 text-lg text-[#8998AC]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto amet in id mollitia! ctetur adipisicing elit
            </p>
            <div className="flex space-x-6">
              <div>
                <a
                  href="#"
                  className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                >
                  <span>
                    <span className="mr-3">Contact me</span>
                    {/* <i className="fa-regular fa-address-card text-sm"></i> */}
                    <FontAwesomeIcon icon={faAddressCard} />
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                >
                  <span>
                    <span className="mr-3">Download Resume</span>
                    {/* <i className="fa-solid fa-file-arrow-down text-sm"></i> */}
                    <FontAwesomeIcon icon={faFileArrowDown} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <HeaderImage />
        </div>
      </div>
    </header>
  );
};
