import {
  faFacebook,
  faGitAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const FooterContent = () => {
  return (
    <footer className="bg-[rgba(11,17,32,.7)] text-gray-200 shadow-lg">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between md:justify-around">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-xl font-bold mb-2 uppercase">Quick Links</h3>
            <ul>
              <li>
                <Link
                  href="/"
                  className="block text-blue-500 hover:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="block  text-blue-500 hover:text-white hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#qualification"
                  className="block  text-blue-500 hover:text-white hover:underline"
                >
                  Qualification
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="block  text-blue-500 hover:text-white hover:underline"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block  text-blue-500 hover:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="text-xl font-bold mb-2 uppercase">Contact</h3>
            <ul>
              <li className="flex items-center mb-1">
                <FontAwesomeIcon className="mr-2 " icon={faEnvelope} />
                <span>Email: sakilahmedsaju1121@gmail.com</span>
              </li>
              <li className="flex items-center mb-1">
                <FontAwesomeIcon className="mr-2" icon={faPhone} />
                <span>Phone: +8801980327040</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon className="mr-2" icon={faAddressCard} />
                <span>Tangail, Bangladesh</span>
              </li>
            </ul>
            <div>
              <h3 className="text-xl font-bold mb-2 uppercase mt-3">
                Follow Me
              </h3>
              <div className="text-[#38BDF8] text-lg py-2 flex flex-row space-x-5 items-center my-3">
                <Link
                  target="_blank"
                  className="mb-2 transition-all hover:bg-[#38BDF8] bg-white hover:text-white w-7 h-7 flex items-center justify-center rounded-[50%]"
                  href="https://github.com/saju575"
                  title="gitHub"
                >
                  <FontAwesomeIcon icon={faGitAlt} />
                </Link>

                <Link
                  target="_blank"
                  className="mb-2 transition-all hover:bg-[#38BDF8] bg-white hover:text-white w-7 h-7 flex items-center justify-center rounded-[50%]"
                  href="https://www.linkedin.com/in/sakilahmed-saju-8505041a4/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  target="_blank"
                  className="mb-2 transition-all hover:bg-[#38BDF8] bg-white hover:text-white w-7 h-7 flex items-center justify-center rounded-[50%]"
                  href="https://www.faecbook.com/sakilahmed.saju"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center my-8">
          Copyright &copy; {new Date().getFullYear()} | Developed By Sakil Ahmed
        </p>
      </div>
    </footer>
  );
};

export default FooterContent;
