/* eslint-disable @next/next/no-img-element */
import { faArrowRight, faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const OneProjectCard = ({ project }) => {
  const { id, img, title, liveLink, gitClientLink } = project;
  return (
    <div className="max-w-md flex flex-col p-3 rounded shadow-md bg-[#151F28]">
      <Link href={`/${id}`}>
        <img
          className="max-h-[200px] object-cover object-center rounded"
          src={img}
          alt={title}
          title="Project screenshot"
        />
      </Link>
      <div className="flex-1">
        <div className="flex flex-col font-medium">
          <h2 className="mt-2 text-lg sm:text-[25px] title lineheight text-white">
            {title}
          </h2>
          <div className="flex  flex-wrap my-4">
            <div className={` mr-4 mt-4`}>
              <Link
                href={liveLink}
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
                href={gitClientLink}
                target="_blank"
                className="px-3 text-[#8998AC] font-bold py-1 border border-[#1d2a48] text-cyan rounded-full text-base bg-[#0F172A] hover:bg-white hover:text-[#0284C7] pill"
              >
                <span>
                  <FontAwesomeIcon className="mr-3" icon={faCode} />
                  <span>Code Link</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="my-2 text-[#56e0dd] hover:underline">
            <Link href={`/${id}`} className="md:text-[13px] text-sm">
              <span>See Details</span>
              <FontAwesomeIcon className="mt-2 ml-1" icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProjectCard;
