import React, { Suspense } from "react";
import { getProjects } from "../../../lib/api";
import ProjectContent from "./ProjectContent";
import ProjectTitle from "./ProjectTitle";

const Projects = async () => {
  const p = await getProjects();
  // console.log(p);
  return (
    <section id="project" className="pb-32">
      <ProjectTitle />
      <Suspense fallback={<h2>Loading...</h2>}>
        <ProjectContent projects={p} />
      </Suspense>
    </section>
  );
};

export default Projects;
