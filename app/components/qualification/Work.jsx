import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Work = () => {
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
                    <p className="mb-3  text-[17px] font-semibold">Frseher</p>
                    <p>
                      Searching for a job. Any one have a job for me. Knock me.
                      Knock knock!!!😄😄😁
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              {/* <i className="text-white fa-solid fa-brain"></i> */}
              <FontAwesomeIcon className="text-white" icon={faBriefcase} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
