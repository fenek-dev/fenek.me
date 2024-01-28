import { Environment } from "@react-three/drei";
import React from "react";

export const EnvironmentSetup = () => {
  return (
    <>
      <fog attach="fog" args={["#121212", 2, 25]} />
      <color attach="background" args={["#17171b"]} />
      <ambientLight intensity={0.6} />
      <Environment preset="night" />
    </>
  );
};
