export const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

export const clamp = (x: number, min: number, max: number) =>
  Math.min(Math.max(x, min), max);

interface IMapRange {
  (
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number,
  ): number;
}

export const mapRange: IMapRange = (inMax, inMin, outMax, outMin, value) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
