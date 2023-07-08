"use client";

import Image from "next/image";

import styles from "./HeaderImage.module.css";

export const HeaderImage = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
      {/* <img
              className="img"
              src="/assets/images/jp.png"
              alt="Sakil ahmed"
            /> */}
      <Image
        src={"/images/me-no-bg.png"}
        alt="Sakil Ahmed"
        width={450}
        height={400}
        className={`${styles.img} transisition-opacity opacity-0 duration-[2s]`}
        onLoadingComplete={(img) => img.classList.remove("opacity-0")}
      />
    </div>
  );
};
