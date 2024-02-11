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
    Cube010_4: THREE.Mesh;
    Cube010_5: THREE.Mesh;
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
    chair: THREE.Mesh;
    coffin_decorated: THREE.Mesh;
    keg: THREE.Mesh;
    table_long: THREE.Mesh;
    food_ingredient_steak: THREE.Mesh;
    food_stew: THREE.Mesh;
    FoodIngredient_Octopus: THREE.Mesh;
    Skeleton_Axe: THREE.Mesh;
    Skeleton_Staff: THREE.Mesh;
    skull: THREE.Mesh;
    table_medium_tablecloth: THREE.Mesh;
    FruitCrate2: THREE.Mesh;
    group804261949: THREE.Mesh;
    chair001: THREE.Mesh;
    barrel_small001: THREE.Mesh;
    box_small002: THREE.Mesh;
    keg001: THREE.Mesh;
    chest: THREE.Mesh;
    box_small001: THREE.Mesh;
    barrel_small002: THREE.Mesh;
    FruitCrate2001: THREE.Mesh;
    chest001: THREE.Mesh;
    trunk_medium_B: THREE.Mesh;
    trunk_medium_B001: THREE.Mesh;
    trunk_large_A: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube009_1: THREE.Mesh;
    food_ingredient_potato: THREE.Mesh;
  };
  materials: {
    ["PaletteMaterial001.003"]: THREE.MeshStandardMaterial;
    ["texture.034"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["PaletteMaterial001.004"]: THREE.MeshStandardMaterial;
    ["texture.035"]: THREE.MeshStandardMaterial;
    Cobweb: THREE.MeshStandardMaterial;
    ["PaletteMaterial001.002"]: THREE.MeshStandardMaterial;
    ["texture.036"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.006"]: THREE.MeshStandardMaterial;
    ["texture.037"]: THREE.MeshStandardMaterial;
    ["texture.038"]: THREE.MeshStandardMaterial;
    ["texture.039"]: THREE.MeshStandardMaterial;
    ["texture.040"]: THREE.MeshStandardMaterial;
    ["texture.041"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.007"]: THREE.MeshStandardMaterial;
    ["texture.042"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.008"]: THREE.MeshStandardMaterial;
    ["texture.043"]: THREE.MeshStandardMaterial;
    ["texture.044"]: THREE.MeshStandardMaterial;
    ["restaurant.004"]: THREE.MeshStandardMaterial;
    ["restaurant.005"]: THREE.MeshStandardMaterial;
    ["Atlas.002"]: THREE.MeshStandardMaterial;
    ["skeleton.004"]: THREE.MeshStandardMaterial;
    ["skeleton.005"]: THREE.MeshStandardMaterial;
    ["HalloweenBits.009"]: THREE.MeshStandardMaterial;
    ["texture.045"]: THREE.MeshStandardMaterial;
    ["PaletteMaterial001.005"]: THREE.MeshStandardMaterial;
    mat20: THREE.MeshStandardMaterial;
    ["texture.046"]: THREE.MeshStandardMaterial;
    ["texture.047"]: THREE.MeshStandardMaterial;
    ["texture.048"]: THREE.MeshStandardMaterial;
    ["texture.049"]: THREE.MeshStandardMaterial;
    ["texture.050"]: THREE.MeshStandardMaterial;
    ["restaurant.006"]: THREE.MeshStandardMaterial;
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
