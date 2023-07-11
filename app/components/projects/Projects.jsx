import React from "react";
import ProjectContent from "./ProjectContent";
import ProjectTitle from "./ProjectTitle";

const Projects = () => {
  return (
    <section id="project" className="pb-32">
      <ProjectTitle />
      <ProjectContent />
    </section>
  );
};

export default Projects;
