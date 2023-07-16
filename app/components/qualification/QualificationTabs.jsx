import {
  faAward,
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
    <div className="tabs my-12 flex justify-center space-x-1 sm:space-x-6 text-sm">
      <button
        onClick={() => handleTabs("skill")}
        className={`text-xs sm:text-base rounded-sm p-1 shadow ${
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
        className={`text-xs sm:text-base rounded-sm p-1 shadow ${
          seletedTab === "education" && "tabActive"
        }`}
        type="button"
      >
        <FontAwesomeIcon icon={faGraduationCap} />
        <span className="ml-1">Education</span>
      </button>
      <button
        onClick={() => handleTabs("course")}
        className={`text-xs sm:text-base rounded-sm p-1 shadow ${
          seletedTab === "course" && "tabActive"
        }`}
        type="button"
      >
        <FontAwesomeIcon icon={faAward} />
        <span className="ml-1">Courses</span>
      </button>
      <button
        onClick={() => handleTabs("work")}
        className={`text-xs sm:text-base rounded-sm p-1 shadow ${
          seletedTab === "work" && "tabActive"
        }`}
        type="button"
      >
        <FontAwesomeIcon icon={faBriefcase} />
        <span className="ml-1">Work</span>
      </button>
    </div>
  );
};

export default QualificationTabs;
