import { MainGLTFProps } from "../../../pages/Main";
import { Draggable } from "../../../shared/components/Draggable";
import { RigidBody } from "@react-three/rapier";

export const Objects = ({ nodes, materials }: MainGLTFProps) => {
  return (
    <>
      <Draggable
        receiveShadow
        geometry={nodes.barrel_small.geometry}
        material={materials["texture.011"]}
        position={[-8.957, 0, 1.043]}
      />
      <Draggable
        receiveShadow
        geometry={nodes.bone_A.geometry}
        material={materials["HalloweenBits.001"]}
        position={[3.424, 1.421, 0.38]}
        rotation={[0, 1.229, 0]}
      />
      <Draggable
        receiveShadow
        geometry={nodes.box_small.geometry}
        material={materials["texture.016"]}
        position={[-8.622, 0, 8.596]}
      />
      <Draggable
        receiveShadow
        geometry={nodes.candle.geometry}
        material={materials["HalloweenBits.002"]}
        position={[3.535, 1.23, 1.139]}
      />
      <Draggable
        receiveShadow
        geometry={nodes.candle_triple.geometry}
        material={materials["texture.017"]}
        position={[9.658, 1.117, 8.597]}
      />
      <Draggable
        receiveShadow
        geometry={nodes.chair.geometry}
        material={materials["texture.018"]}
        position={[-8.144, 0, 3.45]}
        rotation={[-Math.PI, 0.436, -Math.PI]}
      />
      <Draggable
        receiveShadow
        geometry={nodes.coffin_decorated.geometry}
        material={materials["HalloweenBits.003"]}
        position={[9.239, 0, -3.954]}
        rotation={[Math.PI, -Math.PI / 9, Math.PI]}
      />
      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.keg.geometry}
          material={materials["texture.019"]}
          position={[2.305, 0, 7.97]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.table_long.geometry}
          material={materials["texture.020"]}
          position={[-5.699, 0.112, 1.744]}
          rotation={[0, -1.484, 0]}
        />
      </RigidBody>
      <Draggable
        receiveShadow
        geometry={nodes.table_small.geometry}
        material={materials["texture.021"]}
        position={[9.818, 0, 8.74]}
      />
      <Draggable
        receiveShadow
        geometry={nodes.food_ingredient_steak.geometry}
        material={materials["restaurant.002"]}
        position={[4.781, 1.192, -2.698]}
      />
      <Draggable
        receiveShadow
        geometry={nodes.food_stew.geometry}
        material={materials["restaurant.003"]}
        position={[3.724, 1.197, -2.345]}
      />
      <Draggable
        receiveShadow
        geometry={nodes.FoodIngredient_Octopus.geometry}
        material={materials["Atlas.001"]}
        position={[5.663, 1.88, 7.302]}
        scale={100}
      />
      <Draggable
        receiveShadow
        geometry={nodes.Skeleton_Axe.geometry}
        material={materials["skeleton.002"]}
        position={[2.581, 0.778, 3.132]}
        scale={150}
      />
      <Draggable
        receiveShadow
        geometry={nodes.Skeleton_Staff.geometry}
        material={materials["skeleton.003"]}
        position={[5.977, 1.106, -2.109]}
        scale={100}
      />
      <Draggable
        receiveShadow
        geometry={nodes.skull.geometry}
        material={materials["HalloweenBits.004"]}
        position={[5.76, 0.459, 4.107]}
        rotation={[2.577, 1.533, -Math.PI]}
        scale={0.75}
      />

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.table_medium_tablecloth.geometry}
          material={materials["texture.022"]}
          position={[4.115, 0, -2.411]}
        />
      </RigidBody>
    </>
  );
};
