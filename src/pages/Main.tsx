import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Room } from "../widgets/scenes/main/Room";
import { Objects } from "../widgets/scenes/main/Objects";
import { Links } from "../widgets/scenes/main/Links";

export type MainGLTFResult = GLTF & {
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

export interface MainGLTFProps {
  nodes: MainGLTFResult["nodes"];
  materials: MainGLTFResult["materials"];
}

export function Main(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/one.glb",
    true
  ) as MainGLTFResult;

  return (
    <group {...props} dispose={null}>
      <Room nodes={nodes} materials={materials} />
      <Objects nodes={nodes} materials={materials} />
      <Links nodes={nodes} materials={materials} />

      <mesh
        position={[-9.248, 0, 6.457]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={75}
        geometry={nodes.Arrow_Side_1.geometry}
        material={materials.Main_Dark}
      />
    </group>
  );
}

useGLTF.preload("/models/one.glb");
