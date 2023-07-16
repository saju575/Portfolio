import Link from "next/link";
import React from "react";
import styles from "./Course.module.css";
const Course = () => {
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
                    <p className="mb-3  text-[17px] font-semibold">
                      Web Devlopment (MERN STACK)
                    </p>
                    <p>Programing Hero</p>
                    <div className="flex flex-wrap mt-4">
                      <div className={`${styles.headerBtn} mb-3`}>
                        {/* <Link
                          href="/images/certificate.png"
                          className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                        >
                          <span>Course Certificates</span>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              {/* <i className="text-white fa-solid fa-brain"></i> */}
              {/* <FontAwesomeIcon className="text-white" icon={faBrain} /> */}
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
                    <p className="mb-3  text-[17px] font-semibold">
                      Think in a Redux way
                    </p>
                    <p>Learn with Sumit</p>
                    <p className="text-xs mt-1">Feb 2023 - April 2023</p>
                    <div className="flex flex-wrap mt-4">
                      <div className={`${styles.headerBtn} mb-3`}>
                        <Link
                          href="/images/LWS-Recommendation-Letter.jpg"
                          className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                        >
                          <span>Performance Certificates</span>
                        </Link>
                      </div>
                      <div className={`${styles.headerBtn}`}>
                        {/* <Link
                          href="/images/LWS-Certificate.jpg"
                          className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                        >
                          <span>Course Certificates</span>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              {/* <i className="text-white fa-solid fa-brain"></i> */}
              {/* <FontAwesomeIcon className="text-white" icon={faBrain} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
