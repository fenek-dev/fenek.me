"use client";
import React from "react";
import SectionSvg from "../../../_modules/app/assets/sections/section1.svg";
import { m } from "framer-motion";

export const AppInTheAirSection = () => {
  return (
    <div className="min-h-screen snap-start md:p-20 p-10 relative overflow-hidden">
      <m.span
        className="inline-block absolute sm:scale-100 scale-75 top-1/2 md:right-1/4 md:-translate-y-1/2 lg:translate-x-1/4 md:translate-x-1/2   -translate-y-1/4 right-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.9, duration: 1 }}
      >
        <SectionSvg className="lg:scale-[1.75] sm:scale-100 scale-75 absolute top-1/2 md:right-1/4 md:-translate-y-1/2 lg:translate-x-1/4 md:translate-x-1/2 hover:fill-stone-400 fill-red-600/50 transition-all duration-300 -translate-y-1/4 translate-x-1/2 right-1/2" />
      </m.span>
      <m.div
        initial={{ height: "0%", marginTop: "-8rem" }}
        animate={{ height: "100%", marginTop: "0rem" }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="absolute top-0 bottom-0 md:left-20 bg-stone-900/80 lg:w-[36rem] md:w-[30rem] inset-10 p-8 pb-24 px-12 overflow-hidden flex flex-col justify-between"
      >
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.2 }}
        >
          <m.span
            initial={{ y: "-200%" }}
            animate={{ y: "0%" }}
            transition={{ type: "spring", delay: 0.8, duration: 0.5 }}
            className="text-stone-500 lg:text-xl text-lg vertical-lr absolute top-8 left-2 whitespace-nowrap overflow-hidden"
          >
            Jan 2022 - Jan 2023 | 1 year
          </m.span>
          <m.div
            initial={{ y: "200%", scaleX: "-1", scaleY: "-1" }}
            animate={{ y: "0%" }}
            transition={{ type: "spring", delay: 0.8, duration: 0.5 }}
            className="vertical-lr absolute top-8 right-2 -scale-100 text-stone-500 lg:text-xl text-lg flex gap-8"
          >
            {["Nx", "Sass", "Redux", "TypeScript", "React"].map((item) => (
              <span
                key={item}
                className="transition-all duration-300 hover:font-bold hover:text-rose-300/50 hover:tracking-wider"
              >
                {item}
              </span>
            ))}
          </m.div>
          <m.div
            initial={{ x: "-125%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 1.25, duration: 0.3 }}
          >
            <a
              href="https://business.appintheair.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-stone-400 lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase font-bold whitespace-nowrap leading-none transition-all duration-300 mb-2 group hover:text-cyan-300/50 hover:tracking-widest overflow-hidden"
            >
              App in the Air
              <span className="block max-w-0 group-hover:max-w-full transition-all delay-150 duration-300 h-0.5 bg-cyan-300/50"></span>
            </a>
            <span className="lg:mt-3 md:mt-2 block text-stone-600 sm:text-xl lg:text-lg md:text-base text-sm">
              #FrontendDeveloper #B2B
            </span>
            <p className="lg:mt-7 md:mt-4 text-stone-400 lg:text-2xl md:text-xl sm:text-lg text-base md:leading-relaxed leading-normal w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              quas laboriosam aspernatur ducimus itaque perferendis alias
              quisquam nesciunt eius, facilis natus exercitationem ad doloribus,
              ullam repellendus nostrum unde eum? Cupiditate.
            </p>
          </m.div>
        </m.div>
        <m.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 1.6, duration: 0.3 }}
          className="scroll-down mx-auto"
        />
      </m.div>
    </div>
  );
};
