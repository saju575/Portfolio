/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
import { getProjects } from "../../../lib/api";
import OneProjectCard from "./OneProjectCard";

const MoreProjects = async ({ renderedId }) => {
  const projects = await getProjects();
  const remainingProjects = projects.filter((p) => p.id != renderedId);

  //what to rander
  let content;
  if (remainingProjects.length > 0) {
    content = remainingProjects.map((rp) => (
      <Suspense key={rp.id} fallback={<p>Loading...</p>}>
        <OneProjectCard project={rp} />
      </Suspense>
    ));
  } else {
    content = <div className="text-white">No Project to show</div>;
  }
  return (
    <div className="column last-column ">
      <div className="my-8">
        <h3 className="text-xl mb-2 text-gray-500 headding">More Projects</h3>
        <div className="space-y-4">{content}</div>
      </div>
    </div>
  );
};

export default MoreProjects;
