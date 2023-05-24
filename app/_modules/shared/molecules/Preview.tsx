import React from "react";
import { PopAnimatedText } from "../atoms/PopAnimatedText";

export const Preview = () => {
  return (
    <div className="w-screen leading-none select-none">
      <div className="">
        <div className="w-1/2 overflow-hidden inline-block -skew-y-12 text-stone-300">
          <div className="w-screen">
            <span className="inline-block">
              <PopAnimatedText text="FRONTEND" />
            </span>
          </div>
        </div>
        <div className="w-1/2 overflow-hidden inline-block skew-y-12 text-stone-500">
          <div className="w-screen translate-x-[-50vw]">
            <span className="inline-block">
              <PopAnimatedText text="FRONTEND" />
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-1/2 overflow-hidden inline-block -skew-y-12 text-stone-300">
          <div className="w-screen">
            <span className="inline-block">
              <PopAnimatedText delay={1} text="DEVELOPER" />
            </span>
          </div>
        </div>
        <div className="w-1/2 overflow-hidden inline-block skew-y-12 text-stone-500">
          <div className="w-screen translate-x-[-50vw]">
            <span className="inline-block">
              <PopAnimatedText delay={1} text="DEVELOPER" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
