"use client";
import React, { useEffect, useState } from "react";
import { PopAnimatedText } from "../atoms/PopAnimatedText";

export const Preview = () => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: MouseEvent) => {
    let normalizedPosition = e.pageX / (window.innerWidth / 2) - 1;
    setTransform(`translate(${100 * normalizedPosition}px)`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-screen leading-none">
      <div className="">
        <div className="w-1/2 overflow-hidden inline-block -skew-y-12 text-stone-300">
          <div className="w-screen">
            <span
              className="inline-block"
              style={{
                transform,
              }}
            >
              <PopAnimatedText text="FRONTEND" />
            </span>
          </div>
        </div>
        <div className="w-1/2 overflow-hidden inline-block skew-y-12 text-stone-500">
          <div className="w-screen translate-x-[-50vw]">
            <span
              className="inline-block"
              style={{
                transform,
              }}
            >
              <PopAnimatedText text="FRONTEND" />
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-1/2 overflow-hidden inline-block -skew-y-12 text-stone-300">
          <div className="w-screen">
            <span
              className="inline-block"
              style={{
                transform,
              }}
            >
              <PopAnimatedText delay={1} text="DEVELOPER" />
            </span>
          </div>
        </div>
        <div className="w-1/2 overflow-hidden inline-block skew-y-12 text-stone-500">
          <div className="w-screen translate-x-[-50vw]">
            <span
              className="inline-block"
              style={{
                transform,
              }}
            >
              <PopAnimatedText delay={1} text="DEVELOPER" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
