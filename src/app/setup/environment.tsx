import { Environment, useHelper } from "@react-three/drei";
import { useRef } from "react";
import {
  DirectionalLight,
  DirectionalLightHelper,
  PointLight,
  PointLightHelper,
} from "three";

export const EnvironmentSetup = () => {
  const dirLight = useRef<PointLight>(null);
  useHelper(dirLight, PointLightHelper, 5, "red");
  return (
    <>
      <fog attach="fog" args={["#000", 1, 25]} />
      <color attach="background" args={["#222"]} />
      <ambientLight intensity={0.6} />
      <Environment preset="night" />
      {/* <pointLight
        ref={dirLight}
        intensity={20}
        power={500}
        color={"#03c"}
        position={[0, 2, 0]}
        distance={5}
        castShadow
        
      /> */}
    </>
  );
};
