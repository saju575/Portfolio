"use client";
import { useState } from "react";

import Education from "./Education";
import QualificationTabs from "./QualificationTabs";
import QualificationTitle from "./QualificationTitle";
import Skill from "./Skill";

const Qualification = () => {
  const [selectedTab, setSelectedTab] = useState("skill");
  //what rander
  let content;
  if (selectedTab === "skill") {
    content = <Skill />;
  } else if (selectedTab === "education") {
    content = <Education />;
  }
  return (
    <section id="qualification" className="qualification">
      <QualificationTitle />
      <QualificationTabs
        seletedTab={selectedTab}
        setSeletedTabs={setSelectedTab}
      />
      <div className="container mx-auto px-4 py-6 flex flex-col justify-center sm:py-12">
        {content}
      </div>
    </section>
  );
};

export default Qualification;
