import React from "react";
import { AppInTheAirSection } from "./sections/AppInTheAirSection";
import { ShopPartySection } from "./sections/ShopPartySection";
import { YandexSection } from "./sections/YandexSection";

const Projects = () => {
  return (
    <div className="absolute inset-0 snap-y snap-mandatory scroll-smooth overflow-y-auto overflow-x-hidden h-screen flex flex-col gap-32">
      <AppInTheAirSection />
      <ShopPartySection />
      <YandexSection />
    </div>
  );
};

export default Projects;
