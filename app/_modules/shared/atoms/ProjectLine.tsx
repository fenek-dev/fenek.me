"use client";
import { motion } from "framer-motion";
import React from "react";

interface ProjectLineProps {
  technologies: string[];
  href: string;
  duration: string;
  direction?: -1 | 1;
  index: number;
}

export const ProjectLine = ({
  children,
  technologies,
  href,
  duration,
  direction = 1,
  index,
}: React.PropsWithChildren<ProjectLineProps>) => {
  return (
    <motion.div
      initial={{
        x: direction * 100 + "%",
      }}
      animate={{
        x: "0%",
      }}
      transition={{
        type: "spring",
        stiffness: 75,
        duration: 0.3,
        delay: 0.2 + 0.3 * index,
      }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      className="cursor-grab"
    >
      <span className="text-stone-500 text-2xl block">{duration}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-stone-400 text-[10rem] uppercase font-bold whitespace-nowrap leading-none transition-all duration-300 mb-2 group hover:text-cyan-300 hover:tracking-widest"
      >
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all delay-150 duration-300 h-0.5 bg-cyan-300"></span>
      </a>
      <div className="flex gap-12 text-stone-500 text-3xl uppercase">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="transition-all duration-300 hover:font-bold hover:text-rose-300 hover:tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
