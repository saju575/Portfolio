/* eslint-disable @next/next/no-img-element */
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { shields } from "../../../lib/shields";

const Skill = () => {
  return (
    <div className="py-3 sm:max-w-3xl sm:mx-auto w-full px-2 sm:px-0">
      <div className="relative text-gray-700 antialiased text-sm font-semibold">
        {/* <!-- Vertical bar running through middle --> */}
        <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
        <div className="mt-6 sm:mt-0 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex justify-start w-full mx-auto items-center">
              <div className="w-full sm:w-1/2 sm:pr-8">
                <div className="p-4 bg-[#151F28] text-[#8998AC] rounded shadow flex space-x-3">
                  <div>
                    <p className="mb-3 ml-2 text-[17px] font-semibold">
                      Good at
                    </p>
                    <div className="flex flex-wrap">
                      {shields
                        .filter((shield) => shield.category === "good")
                        .map((s) => {
                          return (
                            <img
                              className="m-2"
                              src={s.img}
                              alt={s.alt}
                              key={s.id}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              {/* <i className="text-white fa-solid fa-brain"></i> */}
              <FontAwesomeIcon className="text-white" icon={faBrain} />
            </div>
          </div>
        </div>

        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
        <div className="mt-6 sm:mt-0 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex justify-end w-full mx-auto items-center">
              <div className="w-full sm:w-1/2 sm:pl-8">
                <div className="p-4 bg-[#151F28] text-[#8998AC] rounded shadow flex space-x-3">
                  <div>
                    <p className="mb-3 ml-2 text-[17px] font-semibold">
                      Comfortable with
                    </p>
                    <div className="flex flex-wrap">
                      {shields
                        .filter((shield) => shield.category === "comfortable")
                        .map((s) => {
                          return (
                            <img
                              className="m-2"
                              src={s.img}
                              alt={s.alt}
                              key={s.id}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              {/* <i className="text-white fa-solid fa-brain"></i> */}
              <FontAwesomeIcon className="text-white" icon={faBrain} />
            </div>
          </div>
        </div>

        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
        <div className="mt-6 sm:mt-0 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex justify-start w-full mx-auto items-center">
              <div className="w-full sm:w-1/2 sm:pr-8">
                <div className="p-4 bg-[#151F28] text-[#8998AC] rounded shadow flex space-x-3">
                  <div>
                    <p className="mb-3 ml-2 text-[17px] font-semibold">
                      Familiar with
                    </p>
                    <div className="flex flex-wrap">
                      {shields
                        .filter((shield) => shield.category === "familiar")
                        .map((s) => {
                          return (
                            <img
                              className="m-2"
                              src={s.img}
                              alt={s.alt}
                              key={s.id}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              {/* <i className="text-white fa-solid fa-brain"></i> */}
              <FontAwesomeIcon className="text-white" icon={faBrain} />
            </div>
          </div>
        </div>

        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
        <div className="mt-6 sm:mt-0 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex justify-end w-full mx-auto items-center">
              <div className="w-full sm:w-1/2 sm:pl-8">
                <div className="p-4 bg-[#151F28] text-[#8998AC] rounded shadow flex space-x-3">
                  <div>
                    <p className="mb-3 ml-2 text-[17px] font-semibold">
                      Tools and Software
                    </p>
                    <div className="flex flex-wrap">
                      {shields
                        .filter((shield) => shield.category === "tools")
                        .map((s) => {
                          return (
                            <img
                              className="m-2"
                              src={s.img}
                              alt={s.alt}
                              key={s.id}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              {/* <i className="text-white fa-solid fa-brain"></i> */}
              <FontAwesomeIcon className="text-white" icon={faBrain} />
            </div>
          </div>
        </div>
        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
        <div className="mt-6 sm:mt-0 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex justify-start w-full mx-auto items-center">
              <div className="w-full sm:w-1/2 sm:pr-8">
                <div className="p-4 bg-[#151F28] text-[#8998AC] rounded shadow flex space-x-3">
                  <div>
                    <p className="mb-3 ml-2 text-[17px] font-semibold">
                      Version Control
                    </p>
                    <div className="flex flex-wrap">
                      {shields
                        .filter((shield) => shield.category === "vControl")
                        .map((s) => {
                          return (
                            <img
                              className="m-2"
                              src={s.img}
                              alt={s.alt}
                              key={s.id}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              {/* <i className="text-white fa-solid fa-brain"></i> */}
              <FontAwesomeIcon className="text-white" icon={faBrain} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
