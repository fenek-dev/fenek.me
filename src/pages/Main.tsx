import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Room } from "../widgets/scenes/main/Room";
import { Objects } from "../widgets/scenes/main/Objects";
import { Links } from "../widgets/scenes/main/Links";
import { LinkOpener } from "../widgets/scenes/main/LinkOpener";

type MainGLTFResult = GLTF & {
  nodes: {
    torture_device_006: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube008: THREE.Mesh;
    barrel_small: THREE.Mesh;
    bone_A: THREE.Mesh;
    bottle_A_labeled_brown: THREE.Mesh;
    bottle_A_labeled_green: THREE.Mesh;
    bottle_B_brown: THREE.Mesh;
    bottle_C_green: THREE.Mesh;
    box_small: THREE.Mesh;
    candle: THREE.Mesh;
    candle_triple: THREE.Mesh;
    chair: THREE.Mesh;
    coffin_decorated: THREE.Mesh;
    keg: THREE.Mesh;
    table_long: THREE.Mesh;
    table_small: THREE.Mesh;
    food_ingredient_steak: THREE.Mesh;
    food_stew: THREE.Mesh;
    FoodIngredient_Octopus: THREE.Mesh;
    Skeleton_Axe: THREE.Mesh;
    Skeleton_Staff: THREE.Mesh;
    skull: THREE.Mesh;
    table_medium_tablecloth: THREE.Mesh;
  };
  materials: {
    ["PaletteMaterial001.003"]: THREE.MeshStandardMaterial;
    ["texture.010"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["PaletteMaterial001.004"]: THREE.MeshStandardMaterial;
    ["texture.009"]: THREE.MeshStandardMaterial;
    ["texture.011"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.001"]: THREE.MeshStandardMaterial;
    ["texture.012"]: THREE.MeshStandardMaterial;
    ["texture.013"]: THREE.MeshStandardMaterial;
    ["texture.014"]: THREE.MeshStandardMaterial;
    ["texture.015"]: THREE.MeshStandardMaterial;
    ["texture.016"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.002"]: THREE.MeshStandardMaterial;
    ["texture.017"]: THREE.MeshStandardMaterial;
    ["texture.018"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.003"]: THREE.MeshStandardMaterial;
    ["texture.019"]: THREE.MeshStandardMaterial;
    ["texture.020"]: THREE.MeshStandardMaterial;
    ["texture.021"]: THREE.MeshStandardMaterial;
    ["restaurant.002"]: THREE.MeshStandardMaterial;
    ["restaurant.003"]: THREE.MeshStandardMaterial;
    ["Atlas.001"]: THREE.MeshStandardMaterial;
    ["skeleton.002"]: THREE.MeshStandardMaterial;
    ["skeleton.003"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.004"]: THREE.MeshStandardMaterial;
    ["texture.022"]: THREE.MeshStandardMaterial;
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
      <LinkOpener nodes={nodes} materials={materials} />
    </group>
  );
}

useGLTF.preload("/models/one.glb");
