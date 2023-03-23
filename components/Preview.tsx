import React from "react";
import { Bebas_Neue } from "next/font/google";
import cn from "classnames";

const font = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const Preview = () => {
  return (
    <section className="container m-auto mt-6">
      <h1 className={cn(font.className, "text-[22vw] leading-[.9] flex")}>
        <span className="tracking-tighter">
          <span>F</span>
          <span>R</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>E</span>
          <span>N</span>
          <span>D</span>
        </span>
      </h1>
      <div className="flex justify-between">
        <span
          className={cn(
            font.className,
            "text-[22vw] tracking-tighter leading-[.9]"
          )}
        >
          Developer
        </span>
        <article>
          <h3 className="uppercase text-gray-500 text-sm">About</h3>
          <p className="">I am a developer currently based in Montenegro.</p>
        </article>
      </div>
    </section>
  );
};
