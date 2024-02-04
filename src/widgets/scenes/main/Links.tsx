import React from "react";
import { MainGLTFProps } from "../../../pages/Main";
import { Draggable } from "../../../shared/components/Draggable";
import { MAIN_LINKS } from "../../../app/enums/links";

export const Links = ({ nodes, materials }: MainGLTFProps) => {
  return (
    <>
      <Draggable
        geometry={nodes.bottle_A_labeled_brown.geometry}
        material={materials.texture}
        position={[-6.615, 1.221, 2.053]}
        scale={1}
        userData={{
          link: MAIN_LINKS.GITHUB.href,
        }}
        name={MAIN_LINKS.GITHUB.name}
      />
      <Draggable
        geometry={nodes.bottle_A_labeled_green.geometry}
        material={materials["texture.001"]}
        position={[-5.531, 1.228, 2.354]}
        scale={1}
        userData={{
          link: MAIN_LINKS.TELEGRAM.href,
        }}
        name={MAIN_LINKS.TELEGRAM.name}
      />
      <Draggable
        geometry={nodes.bottle_C_green.geometry}
        material={materials["texture.002"]}
        position={[-6.094, 1.495, 2.254]}
        scale={1}
        userData={{
          link: MAIN_LINKS.HHRU.href,
        }}
        name={MAIN_LINKS.HHRU.name}
      />
      <Draggable
        geometry={nodes.bottle_B_brown.geometry}
        material={materials["texture.003"]}
        position={[-7.169, 1.454, 2.045]}
        scale={1}
        userData={{
          link: MAIN_LINKS.LINKEDIN.href,
        }}
        name={MAIN_LINKS.LINKEDIN.name}
      />
    </>
  );
};
