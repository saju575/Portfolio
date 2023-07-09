import {
  faEarthAmerica,
  faLayerGroup,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectTabs = ({ tabs, setTabs }) => {
  const handleTab = (tab) => {
    setTabs(tab);
  };
  return (
    <div className="tabs my-12 flex justify-center space-x-6 text-sm">
      <button
        className={`rounded-sm p-1 shadow ${tabs === "all" && "tabActive"}`}
        type="button"
        onClick={() => handleTab("all")}
      >
        {/* <i className="fa-solid fa-earth-americas"></i> */}
        <FontAwesomeIcon
          className="hover:text-[#38BDF8]"
          icon={faEarthAmerica}
        />
        <span className="ml-1">All</span>
      </button>
      <button
        className={`rounded-sm p-1 shadow ${
          tabs === "full-stack" && "tabActive"
        }`}
        type="button"
        onClick={() => handleTab("full-stack")}
      >
        {/* <i className="fa-solid fa-layer-group"></i> */}
        <FontAwesomeIcon className="hover:text-[#38BDF8]" icon={faLayerGroup} />
        <span className="ml-1">Full-Stack</span>
      </button>
      <button
        className={`rounded-sm p-1 shadow ${
          tabs === "frontend" && "tabActive"
        }`}
        type="button"
        onClick={() => handleTab("frontend")}
      >
        <FontAwesomeIcon
          className="hover:text-[#38BDF8]"
          icon={faWindowMaximize}
        />
        <span className="ml-1">Fornt-End</span>
      </button>
    </div>
  );
};

export default ProjectTabs;
