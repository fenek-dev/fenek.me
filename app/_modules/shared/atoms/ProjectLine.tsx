"use client";
import { motion } from "framer-motion";
import React from "react";

interface ProjectLineProps {
  technologies: string[];
  href: string;
  duration: string;
}

export const ProjectLine = ({
  children,
  technologies,
  href,
  duration,
}: React.PropsWithChildren<ProjectLineProps>) => {
  return (
    <motion.div className="min-h-screen snap-start md:p-20">
      <span className="text-stone-500 sm:text-2xl text-lg block">
        {duration}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-stone-400 lg:text-[9rem] md:text-7xl text-5xl uppercase font-bold whitespace-nowrap leading-none transition-all duration-300 mb-2 group hover:text-cyan-300 hover:tracking-widest"
      >
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all delay-150 duration-300 h-0.5 bg-cyan-300"></span>
      </a>
      <div className="flex md:gap-12 gap-4 text-stone-500 lg:text-3xl md:text-2xl text-xl uppercase">
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
