export interface RollResult {
  faces: number;
  result: number;
}

// interface RollsResult {
//   result: number;
//   rolls: RollResult[];
// }

export function die(faces: number): RollResult {
  return {
    faces,
    result: Math.floor(Math.random() * faces) + 1,
  };
}
