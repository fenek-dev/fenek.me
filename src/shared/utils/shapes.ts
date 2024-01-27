export const makeSquare = (size: number, gap: number) => {
  const arr = new Array(size).fill(0).map((_, i) => i * gap);

  return arr.map((x) => arr.map((y) => [x, y]));
};

export const makeLine = (size: number, gap: number) => {
  const arr = new Array(size).fill(0).map((_, i) => i * gap);

  return arr.map((x) => x);
};
