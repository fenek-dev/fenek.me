import React, { useRef } from "react";
import { Instance, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export function Static(props: GroupProps) {
  const ref = useRef();

  return (
    <group {...props}>
      <Instance ref={ref} />
    </group>
  );
}
