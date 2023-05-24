import { ProjectLine } from "@/app/_modules/shared/atoms/ProjectLine";
import React from "react";

const Projects = () => {
  return (
    <div className="text-white overflow-x-clip">
      <div className="md:py-36 py-16 flex flex-col md:gap-40 gap-20">
        <ProjectLine
          href="https://business.appintheair.com"
          technologies={[
            "B2B",
            "React",
            "TypeScript",
            "Redux",
            "Sass",
            "Storybook",
          ]}
          duration="Jan 2022 - Jan 2023 | 1 year"
          index={0}
        >
          App in the Air
        </ProjectLine>
        <ProjectLine
          href="https://shop.shopparty.com"
          technologies={["B2C", "React", "TypeScript", "Redux", "Sass", "Jest"]}
          duration="Oct 2021 - Jan 2022 | 4 months"
          direction={-1}
          index={1}
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
          index={2}
        >
          Yandex
        </ProjectLine>
      </div>
    </div>
  );
};

export default Projects;
