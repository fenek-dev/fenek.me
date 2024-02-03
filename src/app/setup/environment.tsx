import { Environment } from "@react-three/drei";

export const EnvironmentSetup = () => {
  return (
    <>
      <fog attach="fog" args={["#888", 3, 55]} />
      <color attach="background" args={["#999"]} />
      <ambientLight intensity={0.8} />
      <Environment preset="night" />
      {/* <directionalLight intensity={2} color={"#fff"} position={[10, 10, 20]} /> */}
    </>
  );
};
