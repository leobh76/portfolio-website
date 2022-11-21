import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-28 md:mb-0 flex-shrink-0 rounded-full object-cover xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-72 lg:rounded-lg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
