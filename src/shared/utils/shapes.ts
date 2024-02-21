import { BufferGeometry, NormalBufferAttributes } from "three";
import { Geometry } from "three-stdlib";

export const makeSquare = (size: number, gap: number) => {
  const arr = new Array(size).fill(0).map((_, i) => i * gap);

  return arr.map((x) => arr.map((y) => [x, y]));
};

export const makeLine = (size: number, gap: number) => {
  const arr = new Array(size).fill(0).map((_, i) => i * gap);

  return arr.map((x) => x);
};

export function toConvexProps(
  bufferGeometry: BufferGeometry<NormalBufferAttributes>
) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices();
  return [geo.vertices.map((v) => [v.x, v.y, v.z]), geo.faces.map((f) => [f.a, f.b, f.c]), []] as [number[][], number[][], number[]]; // prettier-ignore
}
