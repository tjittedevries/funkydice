import { expect } from "@jest/globals";

export function expectBetween(
  value: number,
  max: number,
  min: number = 1
): void {
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThanOrEqual(max);
}
