/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const OneProjectItem = ({ project }) => {
  const { img, title, liveLink, gitClientLink } = project;
  return (
    <div className="p-2 rounded bg-[#151F28]">
      <img className="cursor-pointer" src={img} alt={title} />
      <p className="text-white py-2">{title}</p>
      <div className="text-white pb-2 tabs flex flex-wrap space-x-2">
        <Link className="p-1 rounded m-1" target="_blank" href={liveLink}>
          <span>Live Preview</span>
        </Link>
        <Link className="p-1 rounded m-1" target="_blank" href={gitClientLink}>
          <span>Code Link</span>
        </Link>
        <button className="p-1 rounded m-1" type="button">
          See details
        </button>
      </div>
    </div>
  );
};

export default OneProjectItem;
