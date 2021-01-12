import { expect } from "@jest/globals";

export function expectBetween(value: number, max: number): void {
  expect(value).toBeGreaterThanOrEqual(1);
  expect(value).toBeLessThanOrEqual(max);
}
