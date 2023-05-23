import { Heart } from "@/app/_modules/shared/atoms/Heart";
import { SkillMap } from "@/app/_modules/shared/molecules/SkillMap";
import React from "react";

const Skills = () => {
  return (
    <div className="min-h-screen">
      <SkillMap />
      <Heart />
    </div>
  );
};

export default Skills;
