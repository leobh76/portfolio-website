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
        className=" w-28 h-28 rounded-full object-cover object-center bg-white"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-8 md:px-10">
        <h4 className="text-4xl font-light">Full Stack Developer Intern</h4>
        <p className="font-bold text-2xl mt-1">onezero</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="w-10 h-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {"0" +
            new Date(experience.dateStarted).getMonth() +
            "/" +
            new Date(experience.dateStarted).getFullYear()}{" "}
          -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : "0" +
              new Date(experience.dateEnded).getMonth() +
              "/" +
              new Date(experience.dateEnded).getFullYear()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
