import { TDieFn } from "./types";

export function rolls(amount: number, dieFn: TDieFn) {
  const results: number[] = [];

  for (let i = 0; i < amount; i++) {
    results.push(dieFn());
  }

  return results;
}
