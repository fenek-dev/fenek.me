import { MainGLTFProps } from "../Main";
import { Draggable } from "../../../shared/components/Draggable";
import { RigidBody } from "@react-three/rapier";

export const Objects = ({ nodes, materials }: MainGLTFProps) => {
  return (
    <>
      <RigidBody type="dynamic" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.torture_device_006.geometry}
          material={materials["PaletteMaterial001.003"]}
          position={[5.498, 0, 0.142]}
          scale={100}
        />
      </RigidBody>

      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.barrel_small.geometry}
        material={materials["texture.036"]}
        position={[-4.134, 0, 2.73]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.bone_A.geometry}
        material={materials["HalloweenBits.006"]}
        position={[3.424, 1.421, 0.38]}
        rotation={[0, 1.229, 0]}
      />

      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.box_small.geometry}
        material={materials["texture.041"]}
        position={[-8.622, 0, 8.596]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.candle.geometry}
        material={materials["HalloweenBits.007"]}
        position={[3.535, 1.23, 1.139]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.chair.geometry}
        material={materials["texture.042"]}
        position={[-6.914, 0, 3.773]}
        rotation={[-Math.PI, 0.436, -Math.PI]}
      />

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coffin_decorated.geometry}
          material={materials["HalloweenBits.008"]}
          position={[8.427, 0, -5.302]}
          rotation={[0, -1.547, 0]}
        />
      </RigidBody>

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keg.geometry}
          material={materials["texture.043"]}
          position={[2.033, 0, 8.242]}
          rotation={[0, 1.383, 0]}
        />
      </RigidBody>

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.table_long.geometry}
          material={materials["texture.044"]}
          position={[-7.163, 0.112, 2.023]}
          rotation={[0, -1.484, 0]}
        />
      </RigidBody>
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.food_ingredient_steak.geometry}
        material={materials["restaurant.004"]}
        position={[4.781, 1.192, -2.698]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.food_stew.geometry}
        material={materials["restaurant.005"]}
        position={[3.724, 1.197, -2.345]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.FoodIngredient_Octopus.geometry}
        material={materials["Atlas.002"]}
        position={[7.814, 1.88, 8.525]}
        rotation={[Math.PI, -1.207, Math.PI]}
        scale={100}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.Skeleton_Axe.geometry}
        material={materials["skeleton.004"]}
        position={[2.581, 0.778, 3.132]}
        rotation={[-1.695, -1.154, -1.685]}
        scale={150}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.Skeleton_Staff.geometry}
        material={materials["skeleton.005"]}
        position={[5.977, 1.106, -2.109]}
        scale={100}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.skull.geometry}
        material={materials["HalloweenBits.009"]}
        position={[5.76, 0.459, 4.107]}
        rotation={[2.577, 1.533, Math.PI]}
        scale={0.75}
      />

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.table_medium_tablecloth.geometry}
          material={materials["texture.045"]}
          position={[4.115, 0, -2.411]}
        />
      </RigidBody>
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.FruitCrate2.geometry}
        material={materials["PaletteMaterial001.005"]}
        position={[-8.697, 1.611, 8.429]}
        rotation={[-Math.PI / 2, 0, 0.367]}
        scale={[50, 40, 30]}
      />

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group804261949.geometry}
          material={materials.mat20}
          position={[-2.126, 1.467, -3.071]}
          scale={2}
        />
      </RigidBody>
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.chair001.geometry}
        material={materials["texture.042"]}
        position={[-4.18, 0.116, 1.453]}
        rotation={[0, -0.012, 0]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.barrel_small001.geometry}
        material={materials["texture.036"]}
        position={[-7.569, 0, 8.959]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.box_small002.geometry}
        material={materials["texture.041"]}
        position={[-8.939, 0, 7.531]}
      />

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keg001.geometry}
          material={materials["texture.043"]}
          position={[2.192, 0, 6.294]}
          rotation={[-Math.PI, 1.538, -Math.PI]}
        />
      </RigidBody>
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.chest.geometry}
        material={materials["texture.046"]}
        position={[-2.866, 0, 8.512]}
        rotation={[Math.PI, -0.114, Math.PI]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.box_small001.geometry}
        material={materials["texture.041"]}
        position={[9.677, 0, 0.216]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.barrel_small002.geometry}
        material={materials["texture.036"]}
        position={[9.915, 0, 1.372]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.FruitCrate2001.geometry}
        material={materials["PaletteMaterial001.005"]}
        position={[9.828, 1.611, 0.955]}
        rotation={[-Math.PI / 2, 0, -1.551]}
        scale={[50, 40, 30]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.chest001.geometry}
        material={materials["texture.046"]}
        position={[9.431, 0, 8.285]}
        rotation={[Math.PI, -0.793, Math.PI]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.trunk_medium_B.geometry}
        material={materials["texture.047"]}
        position={[-8.893, 1.142, 7.528]}
        rotation={[0, -0.406, 0]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.trunk_medium_B001.geometry}
        material={materials["texture.047"]}
        position={[-1.33, 0.777, -5.885]}
        rotation={[Math.PI, -0.736, Math.PI]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.trunk_large_A.geometry}
        material={materials["texture.048"]}
        position={[9.816, 0, -2.215]}
        rotation={[Math.PI, -1.063, Math.PI]}
      />
      <Draggable
        castShadow
        receiveShadow
        geometry={nodes.food_ingredient_potato.geometry}
        material={materials["restaurant.006"]}
        position={[-8.691, 1.757, 8.531]}
        scale={0.5}
      />
    </>
  );
};
