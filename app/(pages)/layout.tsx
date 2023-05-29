"use client";
import { LazyMotion, domAnimation } from "framer-motion";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default PagesLayout;
