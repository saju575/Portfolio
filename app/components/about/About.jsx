import {
  faFacebook,
  faGitAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AboutImage from "./AboutImage";

const About = () => {
  return (
    <section id="about" className="text-white py-14">
      {/* about title section */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl uppercase font-semibold py-2">
          <span className="text-[#38BDF8]">About</span> me
        </h2>
        <div className="w-12 bg-slate-800 h-1"></div>
        <h6 className="mt-2 text-sm text-[#8251CF]">Myself and my desire</h6>
      </div>

      {/* about content section */}
      <div className="container mx-auto mt-10 flex flex-col md:flex-row space-x-4 p-4 justify-center items-center">
        <AboutImage />
        <div className="w-full md:w-1/2 px-2">
          <p className="text-justify md:text-lg text-[#8998AC]">
            Enthusiastic and dedicated web developer, possessing a wealth of
            knowledge and experience in various technologies, seeking exciting
            opportunities with forward-thinking companies to further expand my
            skills and expertise.
          </p>
          <div className="flex  my-10 flex-wrap">
            <div className="mr-4 flex flex-col items-center sm:text-lg font-bold">
              <h3 className="text-2xl text-[#38BDF8]">10+</h3>
              <p className="text-center">Completed projects</p>
            </div>
            <div className="mr-4 flex flex-col items-center sm:text-lg font-bold">
              <h3 className="text-2xl text-[#38BDF8]">0+</h3>
              <p className="text-center">Years experiences</p>
            </div>
            <div className="flex flex-col items-center sm:text-lg font-bold">
              <h3 className="text-2xl text-[#38BDF8]">0+</h3>
              <p className="text-center">Companies worked</p>
            </div>
          </div>

          {/* <!-- social midea link --> */}
          <div className="text-[#38BDF8] text-lg p-2 flex flex-row space-x-5 items-center my-3">
            <Link
              target="_blank"
              className="mb-2"
              href="https://github.com/saju575"
              title="gitHub"
            >
              <FontAwesomeIcon className="hover:text-white" icon={faGitAlt} />
            </Link>
            {/* <Link className="mb-2" href="mailto:sakilahmedsaju1121@gmail.com">
              <FontAwesomeIcon className="hover:text-white" icon={faEnvelope} />
            </Link> */}
            <Link
              target="_blank"
              className="mb-2"
              href="https://www.linkedin.com/in/sakilahmed-saju-8505041a4/"
            >
              <FontAwesomeIcon className="hover:text-white" icon={faLinkedin} />
            </Link>
            <Link
              target="_blank"
              className="mb-2"
              href="https://www.faecbook.com/sakilahmed.saju"
            >
              <FontAwesomeIcon className="hover:text-white" icon={faFacebook} />
            </Link>
          </div>
          {/* <!-- downlod cv --> */}
          <div>
            <a
              href="#"
              className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
            >
              <span>
                <span className="mr-3">Download Resume</span>
                {/* <i className="fa-solid fa-file-arrow-down text-sm"></i> */}
                <FontAwesomeIcon icon={faFileArrowDown} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
