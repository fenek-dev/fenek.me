/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AnimatedPage from "../../_modules/app/routes/AnimatedPage";
import { Preview } from "@/app/_modules/shared/molecules/Preview";

const Main = () => {
  return (
    <AnimatedPage>
      <section className="container p-10 px-40 main">
        <header className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-8xl text-stone-400 leading-normal font-bold text-center">
            <Preview />
          </h1>
        </header>
      </section>
    </AnimatedPage>
  );
};

export default Main;
