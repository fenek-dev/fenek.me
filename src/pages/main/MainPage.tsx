/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MainPage(props: any) {
  const { nodes, materials } = useGLTF("/scene.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall.geometry}
        material={materials.texture}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_corner.geometry}
        material={materials["texture.001"]}
        position={[10, 0, -10]}
      />
      <group rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_corner_1.geometry}
          material={materials["texture.001"]}
          position={[10, 0, -10]}
        />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_corner_2.geometry}
          material={materials["texture.001"]}
          position={[10, 0, -10]}
        />
      </group>
      <group rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_corner_3.geometry}
          material={materials["texture.001"]}
          position={[10, 0, -10]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large.geometry}
        material={materials["texture.002"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_doorway.geometry}
        material={materials["texture.003"]}
        visible={false}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_doorway_door.geometry}
          material={materials["texture.003"]}
          position={[-0.82, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_1.geometry}
        material={materials.texture}
        position={[6, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_2.geometry}
        material={materials.texture}
        position={[2, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_3.geometry}
        material={materials.texture}
        position={[-2, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_4.geometry}
        material={materials.texture}
        position={[-6, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_5.geometry}
        material={materials.texture}
        position={[-10, 0, 6]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_6.geometry}
        material={materials.texture}
        position={[-10, 0, 2]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_7.geometry}
        material={materials.texture}
        position={[-10, 0, -2]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_8.geometry}
        material={materials.texture}
        position={[-10, 0, -6]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_9.geometry}
        material={materials.texture}
        position={[10, 0, 6]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_10.geometry}
        material={materials.texture}
        position={[10, 0, 2]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_11.geometry}
        material={materials.texture}
        position={[10, 0, -2]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_12.geometry}
        material={materials.texture}
        position={[10, 0, -6]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_1.geometry}
        material={materials["texture.002"]}
        position={[-2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_2.geometry}
        material={materials["texture.002"]}
        position={[-6, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_3.geometry}
        material={materials["texture.002"]}
        position={[-10, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_4.geometry}
        material={materials["texture.002"]}
        position={[-2, 0, -6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_5.geometry}
        material={materials["texture.002"]}
        position={[-6, 0, -6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_6.geometry}
        material={materials["texture.002"]}
        position={[-10, 0, -6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_7.geometry}
        material={materials["texture.002"]}
        position={[-2, 0, -10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_8.geometry}
        material={materials["texture.002"]}
        position={[-6, 0, -10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_9.geometry}
        material={materials["texture.002"]}
        position={[-10, 0, -10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_10.geometry}
        material={materials["texture.002"]}
        position={[-2, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_11.geometry}
        material={materials["texture.002"]}
        position={[-6, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_12.geometry}
        material={materials["texture.002"]}
        position={[-10, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_13.geometry}
        material={materials["texture.002"]}
        position={[-2, 0, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_14.geometry}
        material={materials["texture.002"]}
        position={[-6, 0, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_15.geometry}
        material={materials["texture.002"]}
        position={[-10, 0, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_16.geometry}
        material={materials["texture.002"]}
        position={[-2, 0, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_17.geometry}
        material={materials["texture.002"]}
        position={[-6, 0, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_18.geometry}
        material={materials["texture.002"]}
        position={[-10, 0, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_19.geometry}
        material={materials["texture.002"]}
        position={[10, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_20.geometry}
        material={materials["texture.002"]}
        position={[6, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_21.geometry}
        material={materials["texture.002"]}
        position={[2, 0, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_22.geometry}
        material={materials["texture.002"]}
        position={[10, 0, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_23.geometry}
        material={materials["texture.002"]}
        position={[6, 0, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_24.geometry}
        material={materials["texture.002"]}
        position={[2, 0, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_25.geometry}
        material={materials["texture.002"]}
        position={[10, 0, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_26.geometry}
        material={materials["texture.002"]}
        position={[6, 0, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_27.geometry}
        material={materials["texture.002"]}
        position={[2, 0, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_28.geometry}
        material={materials["texture.002"]}
        position={[10, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_29.geometry}
        material={materials["texture.002"]}
        position={[6, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_30.geometry}
        material={materials["texture.002"]}
        position={[2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_31.geometry}
        material={materials["texture.002"]}
        position={[10, 0, -6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_32.geometry}
        material={materials["texture.002"]}
        position={[6, 0, -6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_33.geometry}
        material={materials["texture.002"]}
        position={[2, 0, -6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_34.geometry}
        material={materials["texture.002"]}
        position={[10, 0, -10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_35.geometry}
        material={materials["texture.002"]}
        position={[6, 0, -10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_wood_large_36.geometry}
        material={materials["texture.002"]}
        position={[2, 0, -10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_doorway_1.geometry}
        material={materials["texture.003"]}
        position={[6, 0, -10]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_doorway_door_1.geometry}
          material={materials["texture.003"]}
          position={[-0.82, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_doorway_2.geometry}
        material={materials["texture.003"]}
        position={[2, 0, -10]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_doorway_door_2.geometry}
          material={materials["texture.003"]}
          position={[-0.82, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_doorway_3.geometry}
        material={materials["texture.003"]}
        position={[-2, 0, -10]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_doorway_door_3.geometry}
          material={materials["texture.003"]}
          position={[-0.82, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_doorway_4.geometry}
        material={materials["texture.003"]}
        position={[-6, 0, -10]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_doorway_door_4.geometry}
          material={materials["texture.003"]}
          position={[-0.82, 0, 0]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/scene.glb");
