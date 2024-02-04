import * as THREE from "three";
import { Instance, Instances, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CuboidCollider, MeshCollider, RigidBody } from "@react-three/rapier";
import { Draggable } from "../../../shared/components/Draggable";

type GLTFResult = GLTF & {
  nodes: {
    wall_window_closed_scaffold: THREE.Mesh;
    wall_cracked: THREE.Mesh;
    wall_Tsplit: THREE.Mesh;
    wall_doorway: THREE.Mesh;
    wall_doorway_door: THREE.Mesh;
    wall_shelves: THREE.Mesh;
    wall_archedwindow_gated: THREE.Mesh;
    wall_corner_scaffold: THREE.Mesh;
    wall_open_scaffold: THREE.Mesh;
    wall_arched: THREE.Mesh;
    wall_corner_small: THREE.Mesh;
    wall: THREE.Mesh;
    table_long: THREE.Mesh;
    chair: THREE.Mesh;
    barrel_small: THREE.Mesh;
    shelves: THREE.Mesh;
    keg: THREE.Mesh;
    box_small: THREE.Mesh;
    bed_floor: THREE.Mesh;
    candle_triple: THREE.Mesh;
    table_small: THREE.Mesh;
    torch: THREE.Mesh;
    coffin_decorated: THREE.Mesh;
    bone_A: THREE.Mesh;
    candle: THREE.Mesh;
    floor_wood_large_dark: THREE.Mesh;
    ["Node-Mesh"]: THREE.Mesh;
    ["Node-Mesh_1"]: THREE.Mesh;
    ["Node-Mesh_2"]: THREE.Mesh;
    ["Node-Mesh_3"]: THREE.Mesh;
    vue: THREE.Mesh;
    Caldron: THREE.Mesh;
    Arrow_Side: THREE.Mesh;
    Arrow_Side_1: THREE.Mesh;
    Sign_1: THREE.Mesh;
    Sign_2: THREE.Mesh;
    bottle_A_labeled_brown: THREE.Mesh;
    bottle_A_labeled_green: THREE.Mesh;
    bottle_C_green: THREE.Mesh;
    bottle_B_brown: THREE.Mesh;
    wall_endcap: THREE.Mesh;
    floor_tile_big_grate_open: THREE.Mesh;
    floor_tile_large: THREE.Mesh;
  };
  materials: {
    ["texture.055"]: THREE.MeshStandardMaterial;
    ["texture.060"]: THREE.MeshStandardMaterial;
    ["texture.061"]: THREE.MeshStandardMaterial;
    ["texture.063"]: THREE.MeshStandardMaterial;
    ["texture.064"]: THREE.MeshStandardMaterial;
    ["texture.066"]: THREE.MeshStandardMaterial;
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
    ["texture.085"]: THREE.MeshStandardMaterial;
    ["texture.089"]: THREE.MeshStandardMaterial;
    ["texture.090"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.005"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.011"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.013"]: THREE.MeshStandardMaterial;
    ["texture.092"]: THREE.MeshStandardMaterial;
    initialShadingGroup: THREE.MeshStandardMaterial;
    lambert13SG: THREE.MeshStandardMaterial;
    lambert12SG: THREE.MeshStandardMaterial;
    lambert14SG: THREE.MeshStandardMaterial;
    vue: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    Wood: THREE.MeshStandardMaterial;
    Main_Dark: THREE.MeshStandardMaterial;
    Yellow: THREE.MeshStandardMaterial;
    Brown: THREE.MeshStandardMaterial;
    texture: THREE.MeshStandardMaterial;
    ["texture.001"]: THREE.MeshStandardMaterial;
    ["texture.002"]: THREE.MeshStandardMaterial;
    ["texture.003"]: THREE.MeshStandardMaterial;
    ["texture.058"]: THREE.MeshStandardMaterial;
    ["texture.093"]: THREE.MeshStandardMaterial;
    ["texture.094"]: THREE.MeshStandardMaterial;
  };
};
// const prev = new THREE.Vector3(0, 0, 0);
// const log = (e) => {
//   const value = e.value as THREE.Vector3
//   value.

// };
export function Room(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/one.glb", true) as GLTFResult;

  materials["texture.092"].roughness = 5;
  materials["texture.053"].roughness = 5;
  materials["texture.055"].roughness = 5;
  materials["texture.060"].roughness = 5;
  materials["texture.061"].roughness = 5;
  return (
    <group {...props} dispose={null}>
      <CuboidCollider position={[10, -1, 10]} args={[100, 1, 100]} />
      <CuboidCollider position={[10, 4, 10]} args={[100, 0.1, 100]} />
      <RigidBody type="fixed" colliders="hull">
        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_window_closed_scaffold.geometry}
            material={materials["texture.055"]}
            position={[-10, 0, 7]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>
        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_endcap.geometry}
            material={materials["texture.058"]}
            position={[-3, 0, 2]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_cracked.geometry}
            material={materials["texture.060"]}
            position={[-7, 0, 10]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_cracked.geometry}
            material={materials["texture.060"]}
            position={[4, 0, 7]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_cracked.geometry}
            material={materials["texture.060"]}
            position={[-10, 0, 3]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            geometry={nodes.wall_Tsplit.geometry}
            material={materials["texture.061"]}
            position={[-3, 0, 0]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            geometry={nodes.wall_Tsplit.geometry}
            material={materials["texture.061"]}
            position={[4, 0, -1]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_window_closed_scaffold.geometry}
            material={materials["texture.055"]}
            position={[0, 0, -7]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_doorway.geometry}
            material={materials["texture.063"]}
            position={[4, 0, -7]}
          >
            <mesh
              geometry={nodes.wall_doorway_door.geometry}
              material={materials["texture.063"]}
              position={[-0.82, 0, 0]}
            />
          </mesh>
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_shelves.geometry}
            material={materials["texture.064"]}
            position={[8, 0, -7]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_archedwindow_gated.geometry}
            material={materials["texture.066"]}
            position={[4, 0, 3]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            geometry={nodes.wall_doorway.geometry}
            material={materials["texture.063"]}
            position={[8, 0, -1]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_window_closed_scaffold.geometry}
            material={materials["texture.063"]}
            position={[11, 0, 2]}
            rotation={[0, 1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            geometry={nodes.wall_corner_scaffold.geometry}
            material={materials["texture.071"]}
            position={[11, 0, 10]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_endcap.geometry}
            material={materials["texture.058"]}
            position={[-2, 0, -1]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_open_scaffold.geometry}
            material={materials["texture.072"]}
            position={[0, 0, -1]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_arched.geometry}
            material={materials["texture.056"]}
            position={[-3, 0, 10]}
          />
        </MeshCollider>
        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[-10, 0, 10]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall.geometry}
            material={materials["texture.053"]}
            position={[1, 0, 10]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_arched.geometry}
            material={materials["texture.056"]}
            position={[-3, 0, -4]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_arched.geometry}
            material={materials["texture.056"]}
            position={[-7, 0, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_arched.geometry}
            material={materials["texture.056"]}
            position={[11, 0, -4]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall.geometry}
            material={materials["texture.053"]}
            position={[7, 0, 10]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[4, 0, 10]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[-10, 0, 0]}
            rotation={[0, 1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[-3, 0, -7]}
            rotation={[0, 1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[11, 0, -7]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[11, 0, -1]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[4, 0, 10]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[11, 0, -1]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_doorway.geometry}
            material={materials["texture.063"]}
            position={[11, 0, 6]}
            rotation={[0, -1.571, 0]}
          >
            <mesh
              receiveShadow
              geometry={nodes.wall_doorway_door.geometry}
              material={materials["texture.063"]}
              position={[-0.82, 0, 0]}
            />
          </mesh>
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.shelves.geometry}
            material={materials["texture.079"]}
            position={[0, 0, 10]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>
        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.shelves.geometry}
            material={materials["texture.079"]}
            position={[4.015, 0, 0.758]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>
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

      <RigidBody type="dynamic">
        <mesh
          receiveShadow
          geometry={nodes.bed_floor.geometry}
          material={materials["texture.082"]}
          position={[6.213, 0.236, 8.46]}
          rotation={[0, 1.571, 0]}
        />
      </RigidBody>

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
      <mesh
        receiveShadow
        geometry={nodes.shelves.geometry}
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

      <Draggable
        receiveShadow
        geometry={nodes.coffin_decorated.geometry}
        material={materials["HalloweenBits.005"]}
        position={[9.239, 0, -3.954]}
        rotation={[Math.PI, -Math.PI / 9, Math.PI]}
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
      <group position={[10, 0, 0]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh"].geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh_1"].geometry}
          material={materials.lambert13SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh_2"].geometry}
          material={materials.lambert12SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh_3"].geometry}
          material={materials.lambert14SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vue.geometry}
          material={materials.vue}
          position={[-0.016, 1.835, 1.087]}
          rotation={[1.622, 0, -Math.PI]}
          scale={[1, 2, 1]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Caldron.geometry}
        material={materials.Material}
        position={[-8.893, 0, 4.769]}
        scale={[400, 300, 400]}
      />
      <group
        position={[-9.248, 0, 6.457]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={75}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arrow_Side.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arrow_Side_1.geometry}
          material={materials.Main_Dark}
        />
      </group>
      <group
        position={[-4.466, 1.474, 2.264]}
        rotation={[-Math.PI / 2, 0, 0.287]}
        scale={[50, 2.404, 20]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign_1.geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign_2.geometry}
          material={materials.Brown}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottle_A_labeled_brown.geometry}
        material={materials.texture}
        position={[-6.615, 1.381, 2.053]}
        scale={0.75}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottle_A_labeled_green.geometry}
        material={materials["texture.001"]}
        position={[-5.531, 1.628, 2.354]}
        scale={[0.6, 0.59, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottle_C_green.geometry}
        material={materials["texture.002"]}
        position={[-6.094, 1.495, 2.254]}
        scale={0.75}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottle_B_brown.geometry}
        material={materials["texture.003"]}
        position={[-7.169, 1.454, 2.045]}
        scale={0.5}
      />

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

      <Instances
        castShadow
        geometry={nodes.floor_tile_big_grate_open.geometry}
        material={materials["texture.093"]}
      >
        <Instance position={[-1, 4, 6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, 4]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, -4]} rotation={[0, 0, -Math.PI]} />
      </Instances>

      <Instances
        geometry={nodes.floor_tile_large.geometry}
        material={materials["texture.094"]}
      >
        <Instance position={[-5, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-5, 4, 6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-1, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, 6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, 10]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-1, 4, 10]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-5, 4, 10]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-9, 4, 6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-9, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-9, 4, 10]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, 0]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, 0]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, 4]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, 8]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, 8]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-1, 4, -2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-1, 4, -6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, -2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, -6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, -8]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, -4]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, -8]} rotation={[0, 0, -Math.PI]} />
      </Instances>
    </group>
  );
}

useGLTF.preload("/models/one.glb");
