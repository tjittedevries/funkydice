import { expect } from "@jest/globals";
export function expectBetween(value, max, min) {
    if (min === void 0) { min = 1; }
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
}
