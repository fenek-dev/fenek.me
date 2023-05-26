import { ProjectLine } from "@/app/_modules/shared/atoms/ProjectLine";
import React from "react";
import { AppInTheAirSection } from "./sections/AppInTheAirSection";

const Projects = () => {
  return (
    <div className="absolute inset-0 snap-y snap-mandatory scroll-smooth overflow-y-auto overflow-x-hidden h-screen">
      <AppInTheAirSection />
      <ProjectLine
        href="https://shop.shopparty.com"
        technologies={["B2C", "React", "TypeScript", "Redux", "Sass", "Jest"]}
        duration="Oct 2021 - Jan 2022 | 4 months"
      >
        ShopParty
      </ProjectLine>
      <ProjectLine
        href="https://ya.ru"
        technologies={[
          "B2B",
          "React",
          "TypeScript",
          "Redux",
          "Sass",
          "Hermione",
        ]}
        duration="Jun 2021 - Oct 2021 | 5 months"
      >
        Yandex
      </ProjectLine>
    </div>
  );
};

export default Projects;
