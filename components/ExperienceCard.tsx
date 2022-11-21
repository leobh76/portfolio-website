import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:bg-[#414141] cursor-crosshair transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="xs:w-24 xs:h-24 rounded-full object-cover object-center bg-white"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-8 md:px-10">
        <h4 className="text-center xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light">{experience?.jobTitle}</h4>
        <p className="text-center font-bold xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl mt-1">{experience?.company}</p>
        <div className="flex justify-center space-x-2 my-2">
          {experience.technologies?.map((technology) => (
            <motion.img
              key={technology._id}
              className="w-10 h-10 rounded-full mt-3 animate-pulse"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="text-center xs:text-md sm:text-lg uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toLocaleDateString("CS-cs")} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toLocaleDateString("CS-cs")}
        </p>

        <ul className=" list-none text-left space-y-4 ml-5 xs:text-sm sm:text-md md:text-lg px-5">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
