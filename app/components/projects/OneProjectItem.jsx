/* eslint-disable @next/next/no-img-element */
import { faCode, faEye, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const OneProjectItem = ({ project }) => {
  const { id, img, title, liveLink, gitClientLink } = project;
  return (
    <div className="p-2 rounded bg-[#151F28]">
      {/* <Image
        src={img}
        alt={title}
        width={600}
        height={400}
        className={`transisition-opacity opacity-0 duration-[2s]`}
        onLoadingComplete={(img) => img.classList.remove("opacity-0")}
      /> */}
      <div className="h-auto sm:h-40 md:h-52 lg:h-80 w-full overflow-hidden">
        <img className="w-full object-cover h-auto" src={img} alt={title} />
      </div>
      {/* <Link href={`/${id}`}>
        <img className="cursor-pointer" src={img} alt={title} />
      </Link> */}
      <p className="text-white py-2">{title}</p>
      <div className="text-white pb-2 tabs flex flex-wrap space-x-2">
        <Link
          className="px-1 rounded-sm m-1 bg-[#334266]"
          target="_blank"
          href={liveLink}
        >
          <FontAwesomeIcon className="mr-1 text-sm" icon={faEye} />
          <span>Live Preview</span>
        </Link>
        <Link
          className="px-1 rounded-sm m-1 bg-[#334266]"
          target="_blank"
          href={gitClientLink}
        >
          <FontAwesomeIcon className="mr-1 text-sm" icon={faCode} />
          <span>Code Link</span>
        </Link>
        <Link href={`/${id}`} className="px-1 rounded-sm m-1 bg-[#334266]">
          <FontAwesomeIcon className="mr-1 text-sm" icon={faShare} />
          See details
        </Link>
      </div>
    </div>
  );
};

export default OneProjectItem;
