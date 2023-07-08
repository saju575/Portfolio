/* eslint-disable @next/next/no-img-element */

const Education = () => {
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
                    <img className="w-40" src="./images/mbstu.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-3">
                      B.Sc in Computer Science and Engineering at Mawlana
                      Bhashani Science and Technology University
                    </p>
                    <p className="text-xs">
                      <i className="fa-solid fa-calendar-days"></i> 2018-2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
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
                    <img className="w-12" src="./images/jp.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-3">H.S.C at Joypurhat Govt Collage</p>
                    <p className="text-xs">
                      <i className="fa-solid fa-calendar-days"></i> 2015-2017
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
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
                    <img className="w-8" src="./images/jm.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-3">S.S.C at Jamalgonj High School</p>
                    <p className="text-xs">
                      <i className="fa-solid fa-calendar-days"></i> 2015
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
