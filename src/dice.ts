import { die, RollResult } from "./die";

export function dice(amount: number, faces: number): RollResult[] {
  const results: RollResult[] = [];

  for (let i = 0; i < amount; i++) {
    results.push(die(faces));
  }

  return results;
}
