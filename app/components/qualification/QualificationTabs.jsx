import {
  faBrain,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QualificationTabs = ({ seletedTab, setSeletedTabs }) => {
  const handleTabs = (tab) => {
    setSeletedTabs(tab);
  };
  return (
    <div className="tabs my-12 flex justify-center space-x-6 text-sm">
      <button
        onClick={() => handleTabs("skill")}
        className={`rounded-sm p-1 shadow ${
          seletedTab === "skill" && "tabActive"
        }`}
        type="button"
      >
        {/* <i className="fa-solid fa-brain"></i> */}
        <FontAwesomeIcon icon={faBrain} />
        <span className="ml-1">Skills</span>
      </button>
      <button
        onClick={() => handleTabs("education")}
        className={`rounded-sm p-1 shadow ${
          seletedTab === "education" && "tabActive"
        }`}
        type="button"
      >
        {/* <i className="fa-solid fa-graduation-cap"></i> */}
        <FontAwesomeIcon icon={faGraduationCap} />
        <span className="ml-1">Education</span>
      </button>
      <button
        onClick={() => handleTabs("work")}
        className={`rounded-sm p-1 shadow ${
          seletedTab === "work" && "tabActive"
        }`}
        type="button"
      >
        {/* <i className="fa-solid fa-briefcase"></i> */}
        <FontAwesomeIcon icon={faBriefcase} />
        <span className="ml-1">Work</span>
      </button>
    </div>
  );
};

export default QualificationTabs;
