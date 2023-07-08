"use client";
import Image from "next/image";

export const AboutImage = () => {
  return (
    <div class="w-full md:w-1/2 mb-10 md:mb-0">
      <div class="flex justify-center">
        {/* <img
              class="rounded-lg shadow-lg"
              src="./images/m.png"
              alt="Sakil ahmed"
            /> */}
        <Image
          src={"/images/m.png"}
          class="rounded-lg shadow-lg"
          alt="Sakil Ahmed"
          width={450}
          height={400}
          className={`transisition-opacity opacity-0 duration-[2s]`}
          onLoadingComplete={(img) => img.classList.remove("opacity-0")}
        />
      </div>
    </div>
  );
};
