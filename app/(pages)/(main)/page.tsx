import React from "react";
import Preview from "@/app/_modules/shared/molecules/Preview";

const Main = () => {
  return (
    <section className="container p-10 px-40 main z-10">
      <header className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <h1 className="lg:text-8xl text-stone-400 leading-normal font-bold text-center text-6xl ">
          <Preview />
        </h1>
      </header>
    </section>
  );
};

export default Main;
