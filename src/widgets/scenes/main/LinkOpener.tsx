import { MainGLTFProps } from "../../../pages/Main";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { UserDataType } from "../../../shared/types/data";

export const LinkOpener = ({ nodes, materials }: MainGLTFProps) => {
  return (
    <>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Caldron.geometry}
          material={materials.Material}
          position={[-8.893, 0, 4.769]}
          scale={[400, 300, 400]}
        />
      </RigidBody>
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
