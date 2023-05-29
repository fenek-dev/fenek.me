import { ProjectLine } from "@/app/_modules/shared/atoms/ProjectLine";
import React from "react";
import { AppInTheAirSection } from "./sections/AppInTheAirSection";
import { ShopPartySection } from "./sections/ShopPartySection";

const Projects = () => {
  return (
    <div className="absolute inset-0 snap-y snap-mandatory scroll-smooth overflow-y-auto overflow-x-hidden h-screen flex flex-col gap-32">
      <AppInTheAirSection />
      <ShopPartySection />

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
