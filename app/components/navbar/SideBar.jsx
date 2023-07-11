import {
  faFacebook,
  faGitAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="text-white text-lg bg-[#040b1b] rounded-e shadow p-2 fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center">
      <Link target="_blank" className="mb-2" href="https://github.com/saju575">
        {/* <i className="hover:text-[#38BDF8] fa-brands fa-git-alt"></i> */}
        <FontAwesomeIcon className="hover:text-[#38BDF8]" icon={faGitAlt} />
      </Link>
      {/* <Link className="mb-2" href="mailto:sakilahmedsaju1121@gmail.com">
       
        <FontAwesomeIcon className="hover:text-[#38BDF8]" icon={faEnvelope} />
      </Link> */}
      <Link
        target="_blank"
        className="mb-2"
        href="https://www.linkedin.com/in/sakilahmed-saju-8505041a4/"
      >
        {/* <i className="hover:text-[#38BDF8] fa-brands fa-linkedin"></i> */}
        <FontAwesomeIcon className="hover:text-[#38BDF8]" icon={faLinkedin} />
      </Link>
      <Link
        target="_blank"
        className="mb-2"
        href="https://www.faecbook.com/sakilahmed.saju"
      >
        {/* <i className="hover:text-[#38BDF8] fa-brands fa-facebook"></i> */}
        <FontAwesomeIcon className="hover:text-[#38BDF8]" icon={faFacebook} />
      </Link>
    </div>
  );
};
export default SideBar;
