"use client";
import React from "react";
import _ from "lodash";

import { Bebas_Neue } from "next/font/google";
import cn from "classnames";

const font = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const colors = [
  "#9ca3af",
  "#d1d5db",
  "#6b7280",
  "#4b5563",
  "#71717a",
  "#3f3f46",
  "#57534e",
  "#a8a29e",
  "#78716c",
  "#44403c",
  "#292524",
];

const data = [
  {
    text: "React",
    tag: "react",
    value: 100,
  },
  {
    text: "TypeScript",
    tag: "ts",
    value: 100,
  },
  {
    text: "JavaScript",
    tag: "js",
    value: 70,
  },
  {
    text: "NextJS",
    tag: "next",
    value: 70,
  },
  {
    text: "Redux",
    tag: "rdx",
    value: 80,
  },
  {
    text: "CSS / SASS",
    tag: "css",
    value: 60,
  },
  {
    text: "HTML5",
    tag: "html",
    value: 65,
  },
  {
    text: "MUI",
    tag: "mui",
    value: 40,
  },
  {
    text: "Storybook",
    tag: "story",
    value: 60,
  },
  {
    text: "Jest",
    tag: "jest",
    value: 40,
  },
  {
    text: "Nx",
    tag: "nx",
    value: 60,
  },
  {
    text: "AntDesign",
    tag: "ant",
    value: 40,
  },
  {
    text: "Redux-toolkit",
    tag: "tool",
    value: 35,
  },
  {
    text: "Git",
    tag: "git",
    value: 35,
  },
  {
    text: "Webpack",
    tag: "webp",
    value: 45,
  },
  {
    text: "Vite",
    tag: "vite",
    value: 35,
  },
  {
    text: "Node",
    tag: "node",
    value: 55,
  },
  {
    text: "Figma",
    tag: "fig",
    value: 50,
  },
  {
    text: "React-Query",
    tag: "query",
    value: 45,
  },
  {
    text: "Eslint",
    tag: "lint",
    value: 40,
  },
  {
    text: "Prettier",
    tag: "pret",
    value: 45,
  },
  {
    text: "Tailwind",
    tag: "tail",
    value: 60,
  },
  {
    text: "React Hook Forms",
    tag: "form",
    value: 30,
  },
];

export const Skills = () => {
  return (
    <section className="container mx-auto py-10">
      <h3 className="uppercase text-sm px-24">Featured Skills</h3>
      <div
        className={cn(
          font.className,
          "skill-grid grid justify-center content-center gap-0 leading-[0.8]"
        )}
      >
        {_.map(data, (item, i) => (
          <div
            id={item.tag}
            key={item.tag}
            style={{
              gridArea: item.tag,
              fontSize: `${item.value / 10}vw`,
              color: _.nth(colors, i % _.size(colors)),
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
};
