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
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
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
                  href="#about"
                  className="block  text-blue-500 hover:text-white hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#qualification"
                  className="block  text-blue-500 hover:text-white hover:underline"
                >
                  Qualification
                </Link>
              </li>
              <li>
                <Link
                  href="#project"
                  className="block  text-blue-500 hover:text-white hover:underline"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block  text-blue-500 hover:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
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
                {/* <svg className="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.19 8.08 7.39 8.86v-2.68C6.47 18.13 4 15.36 4 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.36-2.47 6.13-5.68 6.67v2.68C18.81 20.08 22 16.41 22 12c0-5.52-4.48-10-10-10zm0 16c-2.97 0-5.68-1.3-7.53-3.37-.3-.37-.47-.83-.47-1.33 0-.84.68-1.52 1.52-1.52.5 0 .96.17 1.33.47C9.7 11.32 11.33 12 13 12s3.3-.68 4.68-1.87c.37-.3.83-.47 1.33-.47.84 0 1.52.68 1.52 1.52 0 .5-.17.96-.47 1.33C17.68 16.7 15.97 18 13 18zm0-8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                </svg> */}
                <FontAwesomeIcon className="mr-2" icon={faAddressCard} />
                <span>Tangail, Bangladesh</span>
              </li>
            </ul>
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
