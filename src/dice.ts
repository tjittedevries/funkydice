import { rand } from "./rand";

export function die(faces: number): () => number {
  return () => rand(faces);
}

export function fateDie(): () => number {
  return () => {
    const result = rand(3);
    if (result === 1) return -1;
    if (result === 3) return 1;
    return 0;
  };
}
