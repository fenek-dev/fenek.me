import React from "react";
import { MainGLTFProps } from "../../../pages/Main";
import { Draggable } from "../../../shared/components/Draggable";

export const Links = ({ nodes, materials }: MainGLTFProps) => {
  return (
    <>
      <Draggable
        geometry={nodes.bottle_A_labeled_brown.geometry}
        material={materials.texture}
        position={[-6.615, 1.381, 2.053]}
        scale={0.75}
      />
      <Draggable
        geometry={nodes.bottle_A_labeled_green.geometry}
        material={materials["texture.001"]}
        position={[-5.531, 1.628, 2.354]}
        scale={[0.6, 0.59, 0.6]}
      />
      <Draggable
        geometry={nodes.bottle_C_green.geometry}
        material={materials["texture.002"]}
        position={[-6.094, 1.495, 2.254]}
        scale={0.75}
      />
      <Draggable
        geometry={nodes.bottle_B_brown.geometry}
        material={materials["texture.003"]}
        position={[-7.169, 1.454, 2.045]}
        scale={0.5}
      />
    </>
  );
};
