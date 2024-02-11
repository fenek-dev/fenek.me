import { MainGLTFProps } from "../Main";
import { CuboidCollider, MeshCollider, RigidBody } from "@react-three/rapier";

export const Room = ({ nodes, materials }: MainGLTFProps) => {
  console.log(nodes);

  return (
    <>
      <CuboidCollider position={[10, -1, 10]} args={[100, 1, 100]} />
      <CuboidCollider position={[10, 4, 10]} args={[100, 0.1, 100]} />
      <RigidBody type="fixed">
        <group position={[-3, 0, -7]} rotation={[0, 1.571, 0]}>
          <MeshCollider type="trimesh">
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010.geometry}
              material={materials["texture.034"]}
            />
          </MeshCollider>
          <MeshCollider type="trimesh">
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_1.geometry}
              material={materials["Material.002"]}
            />
          </MeshCollider>
          <MeshCollider type="trimesh">
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_2.geometry}
              material={materials["PaletteMaterial001.004"]}
            />
          </MeshCollider>
          <MeshCollider type="trimesh">
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_3.geometry}
              material={materials["texture.035"]}
            />
          </MeshCollider>
          <MeshCollider type="trimesh">
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_4.geometry}
              material={materials.Cobweb}
            />
          </MeshCollider>
          <MeshCollider type="trimesh">
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_5.geometry}
              material={materials["PaletteMaterial001.002"]}
            />
          </MeshCollider>
        </group>
      </RigidBody>

      <RigidBody type="fixed">
        <mesh
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["texture.035"]}
          position={[11.115, 0, 5.228]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["texture.035"]}
          position={[3.18, 0, -7]}
        />
      </RigidBody>

      <group position={[-8, 0, 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["texture.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["texture.050"]}
        />
      </group>
    </>
  );
};
