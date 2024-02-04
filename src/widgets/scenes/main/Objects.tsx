import { MainGLTFProps } from "../../../pages/Main";
import { Draggable } from "../../../shared/components/Draggable";
import { RigidBody } from "@react-three/rapier";

export const Objects = ({ nodes, materials }: MainGLTFProps) => {
  return (
    <>
      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.table_long.geometry}
          material={materials["texture.073"]}
          position={[-5.699, 0.112, 1.744]}
          rotation={[0, -1.484, 0]}
        />
      </RigidBody>

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.coffin_decorated.geometry}
          material={materials["HalloweenBits.005"]}
          position={[9.239, 0, -3.954]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI]}
        />
      </RigidBody>

      <Draggable
        receiveShadow
        geometry={nodes.chair.geometry}
        material={materials["texture.075"]}
        position={[-4, 0, 4]}
        rotation={[0, 0.611, 0]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.barrel_small.geometry}
        material={materials["texture.078"]}
        position={[-8.957, 0, 1.043]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.barrel_small.geometry}
        material={materials["texture.078"]}
        position={[-8.305, 0, 1.887]}
      />

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.keg.geometry}
          material={materials["texture.080"]}
          position={[2.305, 0, 7.97]}
        />
      </RigidBody>

      <Draggable
        receiveShadow
        geometry={nodes.box_small.geometry}
        material={materials["texture.081"]}
        position={[-8.622, 0, 8.596]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.box_small.geometry}
        material={materials["texture.081"]}
        position={[-8.259, 0, 7.56]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.box_small.geometry}
        material={materials["texture.081"]}
        position={[-7.508, 0, 8.57]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.box_small.geometry}
        material={materials["texture.081"]}
        position={[-8.155, 1, 8.181]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.chair.geometry}
        material={materials["texture.075"]}
        position={[8.462, 0, 8.838]}
        rotation={[0, -0.87, 0]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.candle_triple.geometry}
        material={materials["texture.085"]}
        position={[9.658, 1.117, 8.597]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.table_small.geometry}
        material={materials["texture.089"]}
        position={[9.818, 0, 8.74]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.bone_A.geometry}
        material={materials["HalloweenBits.011"]}
        position={[3.424, 1.421, 0.38]}
        rotation={[0, 1.229, 0]}
      />

      <Draggable
        receiveShadow
        geometry={nodes.candle.geometry}
        material={materials["HalloweenBits.013"]}
        position={[3.535, 1.23, 1.139]}
      />
    </>
  );
};
