/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { projects } from "../../../lib/projects";
import OneProjectItem from "./OneProjectItem";
import ProjectTabs from "./ProjectTabs";

const ProjectContent = () => {
  const [tabs, setTabs] = useState("all");

  //   what to rander
  let content;
  if (tabs === "all") {
    content = projects.map((project) => (
      <OneProjectItem project={project} key={project.id} />
    ));
  } else if (tabs === "full-stack") {
    content = projects
      .filter((p) => p.category === "full-stack")
      .map((project) => <OneProjectItem project={project} key={project.id} />);
  } else if (tabs === "frontend") {
    content = projects
      .filter((p) => p.category === "frontend")
      .map((project) => <OneProjectItem project={project} key={project.id} />);
  }
  return (
    <>
      <ProjectTabs tabs={tabs} setTabs={setTabs} />
      <div className="container px-4 mx-auto">
        <div className="grid sm:grid-cols-2 gap-8">{content}</div>
      </div>
    </>
  );
};

export default ProjectContent;
