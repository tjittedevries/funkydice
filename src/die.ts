export type TypeFaces = number | "f";

export interface RollResult {
  faces: TypeFaces;
  result: number;
}

export function die(faces: TypeFaces): RollResult {
  if (faces === "f") {
    const randNum = rand(3);
    let fateResult = 0;

    if (randNum === 1) {
      fateResult = -1;
    }
    if (randNum === 3) {
      fateResult = 1;
    }

    return {
      faces: "f",
      result: fateResult,
    };
  }

  return {
    faces,
    result: rand(faces),
  };
}

export function rand(faces: number): number {
  return Math.floor(Math.random() * faces) + 1;
}
