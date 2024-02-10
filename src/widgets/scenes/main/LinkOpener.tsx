import { MainGLTFProps } from "../../../pages/Main";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { UserDataType } from "../../../shared/types/data";

export const LinkOpener = ({ nodes, materials }: MainGLTFProps) => {
  return (
    <>
      <CuboidCollider
        position={[-8.893, 1, 4.769]}
        args={[0.4, 0.1, 0.4]}
        onCollisionEnter={(payload) => {
          payload.rigidBody?.setTranslation(new THREE.Vector3(0, 0, 0), true);
          const data = payload.rigidBody?.userData as UserDataType;
          if (confirm("Do you want to open an external link?")) {
            window.open(
              data?.link || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            );
          }
        }}
      />
    </>
  );
};
