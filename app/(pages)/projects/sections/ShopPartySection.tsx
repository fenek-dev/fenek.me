"use client";
import React, { useRef } from "react";
import { m, useInView } from "framer-motion";
import SectionSvg from "../../../_modules/app/assets/sections/section2.svg";

export const ShopPartySection = () => {
  const container = useRef<HTMLDivElement>(null);
  const visible = useInView(container, { once: true });
  return (
    <div
      className="min-h-screen snap-start md:p-20 p-10 relative overflow-hidden"
      ref={container}
    >
      <m.span
        className="inline-block absolute sm:scale-100 scale-75 top-1/2 md:left-1/4 md:-translate-y-1/2 lg:translate-x-1/4 md:translate-x-1/2 -translate-y-1/4 right-1/2"
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ type: "spring", delay: 0.9, duration: 1 }}
      >
        <SectionSvg className="lg:scale-150 sm:scale-100 scale-75 absolute top-1/2 md:right-1/4 md:-translate-y-1/2 lg:translate-x-1/4 md:translate-x-1/2 hover:fill-stone-400 fill-red-600/50 transition-all duration-300 -translate-y-1/4 translate-x-1/2 right-1/2" />
      </m.span>
      <m.div
        animate={
          visible
            ? { height: "100%", marginTop: "0rem" }
            : { height: "0%", marginTop: "-8rem" }
        }
        transition={{ duration: 0.3, delay: 0.3 }}
        className="absolute top-0 bottom-0 md:right-20 md:left-auto right-10 left-10 bg-stone-900/80 lg:w-[36rem] md:w-[30rem]  p-8 pb-24 px-12 overflow-hidden flex flex-col justify-between"
      >
        <m.div
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.2 }}
        >
          <m.span
            animate={visible ? { y: "0%" } : { y: "200%" }}
            transition={{ type: "spring", delay: 0.8, duration: 0.5 }}
            className="text-stone-500 lg:text-xl text-lg vertical-lr absolute top-8 left-2 whitespace-nowrap overflow-hidden"
          >
            Oct 2021 - Jan 2022 | 4 months
          </m.span>
          <m.div
            animate={
              visible
                ? { y: "0%", scaleX: "-1", scaleY: "-1" }
                : { y: "-200%", scaleX: "-1", scaleY: "-1" }
            }
            transition={{ type: "spring", delay: 0.8, duration: 0.5 }}
            className="vertical-lr absolute top-8 right-2 -scale-100 text-stone-500 lg:text-xl text-lg flex gap-8"
          >
            {["Storybook", "Sass", "Redux", "TypeScript", "React"].map(
              (item) => (
                <span
                  key={item}
                  className="transition-all duration-300 hover:font-bold hover:text-rose-300/50 hover:tracking-wider"
                >
                  {item}
                </span>
              )
            )}
          </m.div>
          <m.div
            animate={visible ? { x: "0%" } : { x: "125%" }}
            transition={{ delay: 1.25, duration: 0.3 }}
          >
            <a
              href="https://shop.shopparty.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-stone-400 lg:text-5xl md:text-4xl sm:text-3xl text-2xl uppercase font-bold whitespace-nowrap leading-none transition-all duration-300 mb-2 group hover:text-cyan-300/50 hover:tracking-widest overflow-hidden"
            >
              ShopParty
              <span className="block max-w-0 group-hover:max-w-full transition-all delay-150 duration-300 h-0.5 bg-cyan-300/50"></span>
            </a>
            <span className="lg:mt-3 md:mt-2 block text-stone-600 sm:text-xl lg:text-lg md:text-base text-sm">
              #FrontendDeveloper #B2C
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
          animate={visible ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", delay: 1.6, duration: 0.3 }}
          className="scroll-down mx-auto"
        />
      </m.div>
    </div>
  );
};
