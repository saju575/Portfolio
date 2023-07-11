"use client";
import Image from "next/image";

const AboutImage = () => {
  return (
    <div className="w-full md:w-1/2 mb-10 md:mb-0">
      <div className="flex justify-center">
        {/* <img
              className="rounded-lg shadow-lg"
              src="./images/m.png"
              alt="Sakil ahmed"
            /> */}
        <Image
          src={"/images/m.png"}
          alt="Sakil Ahmed"
          width={450}
          height={400}
          className={`rounded-lg shadow-lg transisition-opacity opacity-0 duration-[2s]`}
          onLoadingComplete={(img) => img.classList.remove("opacity-0")}
        />
      </div>
    </div>
  );
};

export default AboutImage;
