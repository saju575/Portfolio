"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow-lg bg-[#040b1b] text-white nav-border">
      <div className="container px-5 lg:px-0 mx-auto flex justify-between py-3">
        {/* <img className="h-10" src="../assets/image/learningportal.svg" />  */}
        <h2>Sakil Ahmed</h2>
        <div className="flex items-center gap-3">
          <Link href="#header" className="font-bold">
            Home
          </Link>
          <Link href="#about" className="font-bold">
            About
          </Link>
          <Link href="#qualification" className="font-bold">
            Qualification
          </Link>
          <a href="#" className="font-bold">
            Projects
          </a>
          <a href="#" className="font-bold">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
