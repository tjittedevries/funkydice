import { expect } from "@jest/globals";
export function expectBetween(value, max) {
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(max);
}
