import React from "react";

export const SideBar = () => {
  return (
    <div class="text-white text-lg bg-[#040b1b] rounded-e shadow p-2 fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center">
      <a target="_blank" class="mb-2" href="#">
        <i class="hover:text-[#38BDF8] fa-brands fa-git-alt"></i>
      </a>
      <a target="_blank" class="mb-2" href="#">
        <i class="hover:text-[#38BDF8] fa-solid fa-envelope"></i>
      </a>
      <a target="_blank" class="mb-2" href="#">
        <i class="hover:text-[#38BDF8] fa-brands fa-linkedin"></i>
      </a>
      <a target="_blank" class="mb-2" href="#">
        <i class="hover:text-[#38BDF8] fa-brands fa-facebook"></i>
      </a>
    </div>
  );
};
