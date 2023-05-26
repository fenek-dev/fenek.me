"use client";
import React from "react";
import SectionSvg from "../../../_modules/app/assets/sections/section1.svg";
import { motion } from "framer-motion";

export const AppInTheAirSection = () => {
  return (
    <div className="min-h-screen snap-start md:p-20 relative overflow-hidden">
      <SectionSvg className="scale-[1.75] absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4  z-10 fill-stone-400" />
      <motion.div
        initial={{ height: "0%", marginTop: "-4rem" }}
        animate={{ height: "100%", marginTop: "0rem" }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="absolute top-0 bottom-0 left-20 bg-stone-900 w-[36rem] p-8 px-12 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.2 }}
        >
          <motion.span
            initial={{ y: "-200%" }}
            animate={{ y: "0%" }}
            transition={{ type: "spring", delay: 0.8, duration: 0.5 }}
            className="text-stone-500 sm:text-2xl text-lg vertical-lr absolute top-8 left-2 whitespace-nowrap overflow-hidden"
          >
            Jan 2022 - Jan 2023 | 1 year
          </motion.span>
          <motion.div
            initial={{ y: "200%", scaleX: "-1", scaleY: "-1" }}
            animate={{ y: "0%" }}
            transition={{ type: "spring", delay: 0.8, duration: 0.5 }}
            className="vertical-lr absolute top-8 right-2 -scale-100 text-stone-500 sm:text-2xl text-lg flex gap-8"
          >
            {["Nx", "Sass", "Redux", "TypeScript", "React"].map((item) => (
              <span
                key={item}
                className="transition-all duration-300 hover:font-bold hover:text-rose-300/50 hover:tracking-wider"
              >
                {item}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: "-125%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 1.25, duration: 0.3 }}
          >
            <a
              href="https://business.appintheair.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-stone-400 lg:text-5xl md:text-xl text-base uppercase font-bold whitespace-nowrap leading-none transition-all duration-300 mb-2 group hover:text-cyan-300/50 hover:tracking-widest overflow-hidden"
            >
              App in the Air
              <span className="block max-w-0 group-hover:max-w-full transition-all delay-150 duration-300 h-0.5 bg-cyan-300/50"></span>
            </a>
            <span className="mt-3 block text-stone-600 sm:text-xl text-lg">
              #FrontendDeveloper #B2B
            </span>
            <p className="mt-7 text-stone-400 sm:text-2xl text-lg leading-relaxed w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              quas laboriosam aspernatur ducimus itaque perferendis alias
              quisquam nesciunt eius, facilis natus exercitationem ad doloribus,
              ullam repellendus nostrum unde eum? Cupiditate.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
