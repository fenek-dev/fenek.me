/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AnimatedPage from "../../_modules/app/routes/AnimatedPage";

const header = `<Fenek
    Frontend
        Developer>
`;

const Main = () => {
  return (
    <AnimatedPage>
      <section className="container p-10 px-40">
        <div className="fixed top-1 left-1 inline">{header}</div>
        <header className="absolute top-1/2 -translate-y-1/2">
          <h1 className="text-7xl text-stone-400 leading-normal font-bold ">
            Hi, <br />
            I'm Arthur <br />
          </h1>
          <h2 className="text-4xl text-stone-600">Front-end Developer</h2>
        </header>
      </section>
    </AnimatedPage>
  );
};

export default React.forwardRef(Main);
