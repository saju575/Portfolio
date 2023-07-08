import React from "react";
import { AboutImage } from "./AboutImage";

export const About = () => {
  return (
    <section class="text-white py-14">
      {/* about title section */}
      <div class="flex flex-col items-center">
        <h2 class="text-4xl uppercase font-semibold py-2">
          <span class="text-[#38BDF8]">About</span> me
        </h2>
        <div class="w-12 bg-slate-800 h-1"></div>
        <h6 class="mt-2 text-sm text-[#8251CF]">Myself and my desire</h6>
      </div>

      {/* about content section */}
      <div class="container mx-auto mt-10 flex flex-col md:flex-row space-x-4 p-4 justify-center items-center">
        <AboutImage />
        <div class="w-full md:w-1/2 px-2">
          <p class="text-justify md:text-lg text-[#8998AC]">
            Enthusiastic and dedicated web developer, possessing a wealth of
            knowledge and experience in various technologies, seeking exciting
            opportunities with forward-thinking companies to further expand my
            skills and expertise.
          </p>
          <div class="flex space-x-4 my-10">
            <div class="flex flex-col items-center sm:text-lg font-bold">
              <h3 class="text-2xl text-[#38BDF8]">10+</h3>
              <p class="text-center">Completed projects</p>
            </div>
            <div class="flex flex-col items-center sm:text-lg font-bold">
              <h3 class="text-2xl text-[#38BDF8]">0+</h3>
              <p class="text-center">Years experiences</p>
            </div>
            <div class="flex flex-col items-center sm:text-lg font-bold">
              <h3 class="text-2xl text-[#38BDF8]">2+</h3>
              <p class="text-center">Companies worked</p>
            </div>
          </div>

          {/* <!-- social midea link --> */}
          <div class="text-[#38BDF8] text-lg p-2 flex flex-row space-x-5 items-center my-3">
            <a target="_blank" class="mb-2" href="#">
              <i class="hover:text-white fa-brands fa-git-alt"></i>
            </a>
            <a target="_blank" class="mb-2" href="#">
              <i class="hover:text-white fa-solid fa-envelope"></i>
            </a>
            <a target="_blank" class="mb-2" href="#">
              <i class="hover:text-white fa-brands fa-linkedin"></i>
            </a>
            <a target="_blank" class="mb-2" href="#">
              <i class="hover:text-white fa-brands fa-facebook"></i>
            </a>
          </div>
          {/* <!-- downlod cv --> */}
          <div>
            <a
              href="#"
              class="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
            >
              <span>
                <span class="mr-3">Download Resume</span>
                <i class="fa-solid fa-file-arrow-down text-sm"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
