import * as THREE from "three";
import React from "react";
import { Instance, Instances, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    wall_window_closed_scaffold: THREE.Mesh;
    wall_endcap001: THREE.Mesh;
    wall_cracked: THREE.Mesh;
    wall_cracked001: THREE.Mesh;
    wall_cracked002: THREE.Mesh;
    wall_Tsplit: THREE.Mesh;
    wall_Tsplit001: THREE.Mesh;
    wall_window_closed_scaffold001: THREE.Mesh;
    wall_doorway: THREE.Mesh;
    wall_doorway_door: THREE.Mesh;
    wall_shelves: THREE.Mesh;
    wall_archedwindow_gated: THREE.Mesh;
    wall_doorway001: THREE.Mesh;
    wall_window_closed_scaffold002: THREE.Mesh;
    wall_corner_scaffold: THREE.Mesh;
    wall_endcap002: THREE.Mesh;
    wall_open_scaffold: THREE.Mesh;
    wall_arched: THREE.Mesh;
    wall_corner_small: THREE.Mesh;
    wall: THREE.Mesh;
    wall_arched002: THREE.Mesh;
    wall_arched003: THREE.Mesh;
    wall_arched004: THREE.Mesh;
    wall001: THREE.Mesh;
    wall_corner_small001: THREE.Mesh;
    wall_corner_small002: THREE.Mesh;
    wall_corner_small003: THREE.Mesh;
    wall_corner_small004: THREE.Mesh;
    wall_corner_small005: THREE.Mesh;
    wall_corner_small006: THREE.Mesh;
    wall_corner_small007: THREE.Mesh;
    wall_doorway002: THREE.Mesh;
    wall_doorway_door001: THREE.Mesh;
    table_long: THREE.Mesh;
    chair: THREE.Mesh;
    barrel_small: THREE.Mesh;
    barrel_small001: THREE.Mesh;
    shelves: THREE.Mesh;
    shelves001: THREE.Mesh;
    keg: THREE.Mesh;
    box_small: THREE.Mesh;
    box_small001: THREE.Mesh;
    box_small002: THREE.Mesh;
    box_small003: THREE.Mesh;
    bed_floor: THREE.Mesh;
    chair001: THREE.Mesh;
    candle_triple: THREE.Mesh;
    table_small: THREE.Mesh;
    shelves002: THREE.Mesh;
    torch: THREE.Mesh;
    lantern_hanging: THREE.Mesh;
    lantern_hanging001: THREE.Mesh;
    lantern_hanging002: THREE.Mesh;
    lantern_hanging003: THREE.Mesh;
    coffin_decorated: THREE.Mesh;
    bone_A: THREE.Mesh;
    candle: THREE.Mesh;
    floor_wood_large_dark: THREE.Mesh;
  };
  materials: {
    ["texture.055"]: THREE.MeshStandardMaterial;
    ["texture.058"]: THREE.MeshStandardMaterial;
    ["texture.060"]: THREE.MeshStandardMaterial;
    ["texture.061"]: THREE.MeshStandardMaterial;
    ["texture.063"]: THREE.MeshStandardMaterial;
    ["texture.064"]: THREE.MeshStandardMaterial;
    ["texture.066"]: THREE.MeshStandardMaterial;
    ["texture.067"]: THREE.MeshStandardMaterial;
    ["texture.070"]: THREE.MeshStandardMaterial;
    ["texture.071"]: THREE.MeshStandardMaterial;
    ["texture.072"]: THREE.MeshStandardMaterial;
    ["texture.056"]: THREE.MeshStandardMaterial;
    ["texture.054"]: THREE.MeshStandardMaterial;
    ["texture.053"]: THREE.MeshStandardMaterial;
    ["texture.073"]: THREE.MeshStandardMaterial;
    ["texture.075"]: THREE.MeshStandardMaterial;
    ["texture.078"]: THREE.MeshStandardMaterial;
    ["texture.079"]: THREE.MeshStandardMaterial;
    ["texture.080"]: THREE.MeshStandardMaterial;
    ["texture.081"]: THREE.MeshStandardMaterial;
    ["texture.082"]: THREE.MeshStandardMaterial;
    ["texture.084"]: THREE.MeshStandardMaterial;
    ["texture.085"]: THREE.MeshStandardMaterial;
    ["texture.089"]: THREE.MeshStandardMaterial;
    ["texture.090"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.004"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.005"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.011"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.013"]: THREE.MeshStandardMaterial;
    ["texture.092"]: THREE.MeshStandardMaterial;
  };
};

export function Room(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/one.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <CuboidCollider position={[10, -1, 10]} args={[100, 1, 100]} />
      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_window_closed_scaffold.geometry}
          material={materials["texture.055"]}
          position={[-10, 0, 7]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_endcap001.geometry}
          material={materials["texture.058"]}
          position={[-3, 0, 2]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_cracked.geometry}
          material={materials["texture.060"]}
          position={[-7, 0, 10]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_cracked001.geometry}
          material={materials["texture.060"]}
          position={[4, 0, 7]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_cracked002.geometry}
          material={materials["texture.060"]}
          position={[-10, 0, 3]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_Tsplit.geometry}
          material={materials["texture.061"]}
          position={[-3, 0, 0]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_Tsplit001.geometry}
          material={materials["texture.061"]}
          position={[4, 0, -1]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_window_closed_scaffold001.geometry}
          material={materials["texture.055"]}
          position={[0, 0, -7]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_doorway.geometry}
          material={materials["texture.063"]}
          position={[4, 0, -7]}
        >
          <mesh
            receiveShadow
            geometry={nodes.wall_doorway_door.geometry}
            material={materials["texture.063"]}
            position={[-0.82, 0, 0]}
          />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_shelves.geometry}
          material={materials["texture.064"]}
          position={[8, 0, -7]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_archedwindow_gated.geometry}
          material={materials["texture.066"]}
          position={[4, 0, 3]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_doorway001.geometry}
          material={materials["texture.067"]}
          position={[8, 0, -1]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_window_closed_scaffold002.geometry}
          material={materials["texture.070"]}
          position={[11, 0, 2]}
          rotation={[0, 1.571, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_corner_scaffold.geometry}
          material={materials["texture.071"]}
          position={[11, 0, 10]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_endcap002.geometry}
          material={materials["texture.058"]}
          position={[-2, 0, -1]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_open_scaffold.geometry}
          material={materials["texture.072"]}
          position={[0, 0, -1]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_arched.geometry}
          material={materials["texture.056"]}
          position={[-3, 0, 10]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_corner_small.geometry}
          material={materials["texture.054"]}
          position={[-10, 0, 10]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall.geometry}
          material={materials["texture.053"]}
          position={[1, 0, 10]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_arched002.geometry}
          material={materials["texture.056"]}
          position={[-3, 0, -4]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_arched003.geometry}
          material={materials["texture.056"]}
          position={[-7, 0, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_arched004.geometry}
          material={materials["texture.056"]}
          position={[11, 0, -4]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall001.geometry}
          material={materials["texture.053"]}
          position={[7, 0, 10]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_corner_small001.geometry}
          material={materials["texture.054"]}
          position={[4, 0, 10]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_corner_small002.geometry}
          material={materials["texture.054"]}
          position={[-10, 0, 0]}
          rotation={[0, 1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_corner_small003.geometry}
          material={materials["texture.054"]}
          position={[-3, 0, -7]}
          rotation={[0, 1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_corner_small004.geometry}
          material={materials["texture.054"]}
          position={[11, 0, -7]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_corner_small005.geometry}
          material={materials["texture.054"]}
          position={[11, 0, -1]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_corner_small006.geometry}
          material={materials["texture.054"]}
          position={[4, 0, 10]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.wall_corner_small007.geometry}
          material={materials["texture.054"]}
          position={[11, 0, -1]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.wall_doorway002.geometry}
          material={materials["texture.063"]}
          position={[11, 0, 6]}
          rotation={[0, -1.571, 0]}
        >
          <mesh
            receiveShadow
            geometry={nodes.wall_doorway_door001.geometry}
            material={materials["texture.063"]}
            position={[-0.82, 0, 0]}
          />
        </mesh>
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.table_long.geometry}
          material={materials["texture.073"]}
          position={[-5.699, 0.112, 1.744]}
          rotation={[0, -1.484, 0]}
        />
      </RigidBody>
      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.chair.geometry}
          material={materials["texture.075"]}
          position={[-4, 0, 4]}
          rotation={[0, 0.611, 0]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.barrel_small.geometry}
          material={materials["texture.078"]}
          position={[-8.957, 0, 1.043]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.barrel_small001.geometry}
          material={materials["texture.078"]}
          position={[-8.305, 0, 1.887]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.shelves.geometry}
          material={materials["texture.079"]}
          position={[0, 0, 10]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.shelves001.geometry}
          material={materials["texture.079"]}
          position={[4.015, 0, 0.758]}
          rotation={[0, -1.571, 0]}
        />
      </RigidBody>
      <RigidBody type="dynamic" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.keg.geometry}
          material={materials["texture.080"]}
          position={[2.305, 0, 7.97]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.box_small.geometry}
          material={materials["texture.081"]}
          position={[-8.622, 0, 8.596]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.box_small001.geometry}
          material={materials["texture.081"]}
          position={[-8.259, 0, 7.56]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.box_small002.geometry}
          material={materials["texture.081"]}
          position={[-7.508, 0, 8.57]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.box_small003.geometry}
          material={materials["texture.081"]}
          position={[-8.155, 1, 8.181]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.bed_floor.geometry}
          material={materials["texture.082"]}
          position={[6.213, 0.236, 8.46]}
          rotation={[0, 1.571, 0]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.chair001.geometry}
          material={materials["texture.084"]}
          position={[8.462, 0, 8.838]}
          rotation={[0, -0.87, 0]}
        />
      </RigidBody>

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.candle_triple.geometry}
          material={materials["texture.085"]}
          position={[9.658, 1.117, 8.597]}
        />
      </RigidBody>
      <RigidBody type="dynamic" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.table_small.geometry}
          material={materials["texture.089"]}
          position={[9.818, 0, 8.74]}
        />
      </RigidBody>
      <mesh
        receiveShadow
        geometry={nodes.shelves002.geometry}
        material={materials["texture.079"]}
        position={[7, 0, 10]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        receiveShadow
        geometry={nodes.torch.geometry}
        material={materials["texture.090"]}
        position={[2.424, 1.87, -0.643]}
        rotation={[0.46, 0, 0]}
      />

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.coffin_decorated.geometry}
          material={materials["HalloweenBits.005"]}
          position={[9.239, 0, -3.954]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI]}
        />
      </RigidBody>

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.bone_A.geometry}
          material={materials["HalloweenBits.011"]}
          position={[3.424, 1.421, 0.38]}
          rotation={[0, 1.229, 0]}
        />
      </RigidBody>

      <RigidBody type="dynamic" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.candle.geometry}
          material={materials["HalloweenBits.013"]}
          position={[3.535, 1.23, 1.139]}
        />
      </RigidBody>
      <Instances
        receiveShadow
        geometry={nodes.floor_wood_large_dark.geometry}
        material={materials["texture.092"]}
      >
        <Instance position={[9, 0, 8]} />
        <Instance position={[9, 0, 4]} />
        <Instance position={[9, 0, 0]} />
        <Instance position={[9, 0, -4]} />
        <Instance position={[5, 0, 8]} />
        <Instance position={[5, 0, 4]} />
        <Instance position={[5, 0, 0]} />
        <Instance position={[5, 0, -4]} />
        <Instance position={[1, 0, -3]} />
        <Instance position={[1, 0, 1]} />
        <Instance position={[1, 0, 5]} />
        <Instance position={[1, 0, 9]} />
        <Instance position={[-3, 0, 8]} />
        <Instance position={[-3, 0, 4]} />
        <Instance position={[-3, 0, 0]} />
        <Instance position={[-3, 0, -4]} />
        <Instance position={[-7, 0, 1]} />
        <Instance position={[-7, 0, 5]} />
        <Instance position={[-7, 0, 9]} />
        <Instance position={[1, 0, -7]} />
        <Instance position={[-3, 0, -8]} />
        <Instance position={[-11, 0, 1]} />
        <Instance position={[-11, 0, 5]} />
        <Instance position={[-11, 0, 9]} />
        <Instance position={[5, 0, -8]} />
        <Instance position={[9, 0, -8]} />
      </Instances>
    </group>
  );
}

useGLTF.preload("/models/one.glb");
