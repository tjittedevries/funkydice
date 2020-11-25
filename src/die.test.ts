import { die } from "./die";
import { expectBetween } from "./testUtils";

describe("die", () => {
  test("d6", () => {
    const roll = die(6);
    expect(roll.faces).toBe(6);
    expectBetween(roll.result, 6);
  });

  test("d100", () => {
    const roll = die(100);
    expect(roll.faces).toBe(100);
    expectBetween(roll.result, 100);
  });
});
