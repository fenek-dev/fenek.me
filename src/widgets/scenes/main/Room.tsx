import { Instances, useGLTF } from "@react-three/drei";
import React from "react";
import { Static } from "../../../entities/instances/Static";
import { makeLine, makeSquare } from "../../../shared/utils/shapes";

export const Room = () => {
  const [wall, wall_corner, floor] = useGLTF([
    "/models/wall.glb",
    "/models/wall-corner.glb",
    "/models/floor.glb",
  ]);
  return (
    <>
      <Instances
        material={wall.materials.texture}
        geometry={wall.nodes.wall.geometry}
      >
        {makeLine(4, 4).map((x) => (
          <Static position={[x + 4, 0, 0]} scale={[1, 1.25, 1]} />
        ))}
        {makeLine(4, 4).map((x) => (
          <Static position={[x + 4, 0, 20]} scale={[1, 1.25, 1]} />
        ))}
        {makeLine(4, 4).map((y) => (
          <Static
            position={[0, 0, y + 4]}
            scale={[1, 1.25, 1]}
            rotation={[0, 0.5 * Math.PI, 0]}
          />
        ))}
        {makeLine(4, 4).map((y) => (
          <Static
            position={[20, 0, y + 4]}
            scale={[1, 1.25, 1]}
            rotation={[0, 0.5 * Math.PI, 0]}
          />
        ))}
      </Instances>

      <Instances
        material={wall_corner.materials.texture}
        geometry={wall_corner.nodes.wall_corner_scaffold.geometry}
      >
        <Static
          position={[0, 0, 0]}
          scale={[1, 1.25, 1]}
          rotation={[0, 0.5 * Math.PI, 0]}
        />
        <Static
          position={[20, 0, 20]}
          rotation={[0, -0.5 * Math.PI, 0]}
          scale={[1, 1.25, 1]}
        />
        <Static
          position={[0, 0, 20]}
          rotation={[0, 1 * Math.PI, 0]}
          scale={[1, 1.25, 1]}
        />
        <Static
          position={[20, 0, 0]}
          rotation={[0, 2 * Math.PI, 0]}
          scale={[1, 1.25, 1]}
        />
      </Instances>
      <Instances
        material={floor.materials.texture}
        geometry={floor.nodes.floor_tile_large.geometry}
      >
        {makeSquare(6, 4).map((layer) =>
          layer.map(([x, y]) => <Static position={[x, 0, y]} />)
        )}
      </Instances>
    </>
  );
};

useGLTF.preload([
  "/models/wall.glb",
  "/models/wall-corner.glb",
  "/models/floor-wood.glb",
]);

console.log(makeSquare(8, 2));
