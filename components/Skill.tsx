import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
};

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full shadow-md object-scale-down w-32 h-32 xs:h-12 xs:w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:w-24 lg:h-24 group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0 w-32 h-32 xs:h-12 xs:w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:w-24 lg:h-24">
        <div className="flex items-center justify-center h-full">
          <p className="text-xs font-bold text-black opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
