import React from "react";
import { Project } from "./atoms/Project";

export const Projects = () => {
  return (
    <section className="container mx-auto py-10 ">
      <Project
        name="Yandex.Balance - Payment System"
        category="Any Category"
        role="Intern Frontend Developer"
        href="https://balance.yandex.ru"
      >
        <h3 className="uppercase text-sm">Featured Projects (3)</h3>
      </Project>
      <Project
        name="ShopParty - Online Cloths Marketplace"
        category="Any Category"
        role="Frontend Developer"
        href="https://shop.shopparty.com"
      />
      <Project
        name="App in the Air - Personal travel assistant"
        category="Any Category"
        role="Frontend Developer"
        href="https://business.appintheair.com"
      />
    </section>
  );
};
