/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Code } from "../_modules/shared/molecules/Code";

const header = `<Fenek
    Frontend
        Developer>
`;

const Main = () => {
  return (
    <section className="container p-10 px-40">
      <Code className="fixed top-1 left-1 inline">{header}</Code>
      <header className="absolute top-1/2 -translate-y-1/2">
        <h1 className="text-7xl text-stone-400 leading-normal font-bold ">
          Hi, <br />
          I'm Arthur <br />
        </h1>
        <h2 className="text-4xl text-stone-600">Front-end Developer</h2>
      </header>
    </section>
  );
};

export default Main;
