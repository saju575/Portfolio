"use client";

import {
  faBars,
  faClose,
  faFile,
  faHome,
  faImage,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="shadow-lg bg-[#040b1b] text-white nav-border fixed bottom-0 md:bottom-full md:top-0 left-0 right-0 z-50 h-14">
      <div className="container px-5 lg:px-0 mx-auto flex justify-between py-3 ">
        {/* <img className="h-10" src="../assets/image/learningportal.svg" />  */}
        <Link href={"/"}>
          <h2>Sakil Ahmed</h2>
        </Link>

        <div className="hidden md:block">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <Link href="/#about" className="font-bold">
              About
            </Link>
            <Link href="/#qualification" className="font-bold">
              Qualification
            </Link>
            <Link href="/#projects" className="font-bold">
              Projects
            </Link>
            <Link href="/#contact" className="font-bold">
              Contact
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon onClick={handleMenuOpen} icon={faBars} />
        </div>
        <div
          className={`${
            menuOpen ? "bottom-0" : "-bottom-full"
          } fixed  left-0 right-0  bg-[#040b1b] shadow-lg rounded-t-lg`}
          style={{ transition: "all .5s" }}
        >
          <div className="container mx-auto py-14 px-5">
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-8 sm:gap-12">
                <Link
                  href="/"
                  className="font-semibold flex flex-col items-center"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faHome} />
                  <span>Home</span>
                </Link>
                <Link
                  href="/#about"
                  className=" font-semibold flex flex-col items-center"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faUser} />
                  <span>About</span>
                </Link>
                <Link
                  href="/#qualification"
                  className=" font-semibold flex flex-col items-center"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faFile} />
                  <span>Qualification</span>
                </Link>
                <Link
                  href="/#project"
                  className=" font-semibold flex flex-col items-center"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faImage} />
                  <span>Projects</span>
                </Link>
                <Link
                  href="/#contact"
                  className=" font-semibold flex flex-col items-center"
                  onClick={handleMenuClose}
                >
                  <FontAwesomeIcon icon={faMessage} />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <FontAwesomeIcon
                className="text-2xl"
                onClick={handleMenuClose}
                icon={faClose}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
