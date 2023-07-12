/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
// import SwiperCore, { AutoPlay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import OneProjectItem from "./OneProjectItem";
import ProjectTabs from "./ProjectTabs";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

const ProjectContent = ({ projects }) => {
  const [tabs, setTabs] = useState("all");

  //   what to rander
  let content;
  if (tabs === "all") {
    content = projects.map((project) => (
      <SwiperSlide key={project.id}>
        <OneProjectItem project={project} />
      </SwiperSlide>
    ));
  } else if (tabs === "full-stack") {
    content = projects
      .filter((p) => p.category === "full-stack")
      .map((project) => (
        <SwiperSlide key={project.id}>
          <OneProjectItem project={project} />
        </SwiperSlide>
      ));
  } else if (tabs === "frontend") {
    content = projects
      .filter((p) => p.category === "frontend")
      .map((project) => (
        <SwiperSlide key={project.id}>
          <OneProjectItem project={project} />
        </SwiperSlide>
      ));
  }
  return (
    <>
      <ProjectTabs tabs={tabs} setTabs={setTabs} />
      <div className="container px-4 mx-auto">
        {/* <div className="grid sm:grid-cols-2 gap-8">{content}</div> */}

        <Swiper
          spaceBetween={50}
          breakpoints={{
            760: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          className="grid sm:grid-cols-2"
        >
          {content}
        </Swiper>
      </div>
    </>
  );
};

export default ProjectContent;
