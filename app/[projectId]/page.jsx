/* eslint-disable @next/next/no-img-element */
import {
  faArrowAltCircleRight,
  faCode,
  faEye,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { getProject } from "../../lib/api";
import MoreProjects from "./components/MoreProjects";
export async function generateMetadata({ params: { projectId } }) {
  const project = await getProject(projectId);
  return {
    title: `Protfolio | ${project.title}`,
    description: `This is a details page of ${project.title} project`,
  };
}
const page = async ({ params: { projectId } }) => {
  const project = await getProject(projectId);
  return (
    <section className=" pt-20 pb-24 projectPage">
      <div className="container  flex flex-col lg:flex-row mx-auto px-3 sm:px-0">
        <div className="column first-column ">
          <div className="mb-2">
            <Link className="text-white hover:text-blue-500" href="/">
              <span className="cursor-pointer">
                <FontAwesomeIcon icon={faHouse} /> Go Home
              </span>
            </Link>
          </div>

          {/* <!-- post --> */}
          <div className="flex flex-col">
            <div className="p-2 rounded bg-[#151F28] ">
              <img
                className="max-h-[460px] object-cover object-center rounded my-4"
                src={project.img}
                alt="git"
                title={`Project screenshot`}
              />
            </div>
            <div>
              <h2 className="text-2xl mt-4 text-[#34B5FD] sm:text-3xl title font-semibold">
                {project.title}
              </h2>
              {/* className={`${styles.headerBtn}`} */}
              <div className="flex  flex-wrap my-4">
                <div className={` mr-4 mt-4`}>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                  >
                    <span className="">
                      <FontAwesomeIcon className="mr-3" icon={faEye} />
                      <span>Live Link</span>
                    </span>
                  </Link>
                </div>
                <div className="mr-4 mt-4">
                  <Link
                    href={project.gitClientLink}
                    target="_blank"
                    className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                  >
                    <span>
                      <FontAwesomeIcon className="mr-3" icon={faCode} />
                      <span>Front-End Code Link</span>
                    </span>
                  </Link>
                </div>
                {project.gitServerLink && (
                  <div className="mt-4">
                    <Link
                      href={project.gitServerLink}
                      target="_blank"
                      className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
                    >
                      <span>
                        <FontAwesomeIcon className="mr-3" icon={faCode} />
                        <span>Back-End Code Link</span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              <p className="text-[#6b7280] text-sm sm:text-[17px]">
                {project.description}
              </p>
              {project.functionality && project.functionality.length !== 0 && (
                <div className="py-6">
                  <p className="font-semibold text-lg text-white">
                    Project Functionality
                  </p>
                  <ul className="pt-4  text-[#8998AC]">
                    {project.functionality.map((f, _) => (
                      <li className="my-2" key={_}>
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faArrowAltCircleRight}
                        />
                        <span className="">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-2">
                <h2 className="text-white text-lg font-semibold">
                  Front-End Technology used
                </h2>
                <p className="text-[#8998AC]">
                  {project.frontendTechnology.map((f) => `${f} | `)}
                </p>
              </div>
              {project.backendTechnology &&
                project.backendTechnology.length !== 0 && (
                  <div className="mt-4 mb-8">
                    <h2 className="text-white text-lg font-semibold">
                      Backend Technology used
                    </h2>
                    <p className="text-[#8998AC]">
                      {project.backendTechnology.map((b) => `${b} | `)}
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>

        {<MoreProjects renderedId={projectId} />}
      </div>
    </section>
  );
};

export default page;
