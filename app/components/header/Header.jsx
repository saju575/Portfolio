import {
  faAddressCard,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./Header.module.css";
import HeaderImage from "./HeaderImage";

const Header = () => {
  return (
    // <!-- Header section -->
    <header id="header" className="header">
      <div className="container mx-auto h-full pl-2">
        <div className="h-full flex flex-col md:flex-row justify-between items-center p-4">
          <div className="text-white w-full md:w-1/2">
            <p className="mb-3 text-[#8251CF]">👋 Hi, I am</p>
            <h2 className="mb-6 text-5xl font-bold uppercase">
              Sakil <span className="text-[#38BDF8]">Ahmed</span>
            </h2>
            <p className="mb-8 text-lg font-semibold text-[#8998AC]">
              Web developer
            </p>
            <p className="mb-10 text-lg text-[#8998AC]">
              Here, you can find a details overview of my technical skills,
              education, projects, experience and contact information. I hope
              this will give you a better understanding of my qualifications and
              why I would be a great asset to your team.
            </p>
            <div className="flex  flex-wrap">
              <div className={` mr-4`}>
                <Link
                  href="/#contact"
                  className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                >
                  <span>
                    <span className="mr-3">Contact me</span>

                    <FontAwesomeIcon icon={faAddressCard} />
                  </span>
                </Link>
              </div>
              <div className={`${styles.headerBtn}`}>
                <Link
                  href="/resume.pdf"
                  download={"/resume.pdf"}
                  className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                >
                  <span>
                    <span className="mr-3">Download Resume</span>

                    <FontAwesomeIcon icon={faFileArrowDown} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <HeaderImage />
        </div>
      </div>
    </header>
  );
};

export default Header;
