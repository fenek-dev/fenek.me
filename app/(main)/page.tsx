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
      <h1 className="text-7xl text-stone-400 leading-normal font-bold absolute top-1/2 -translate-y-1/2">
        <Code className="leading-none text-base -m-4">{"<h1>"}</Code>
        Hi, <br />
        I'm Arthur, <br />
        Frontend Developer
        <Code className="leading-none text-base -m-4">{"</h1>"}</Code>
      </h1>
    </section>
  );
};

export default Main;
