import { dice } from "./dice";
import { expectBetween } from "./testUtils";

describe("dice", () => {
  test("6d20", () => {
    const rolls = dice(6, 20);

    expect(rolls.length).toBe(6);

    expectBetween(rolls[0].result, 20);
  });

  test("1d8", () => {
    const rolls = dice(1, 8);

    expect(rolls.length).toBe(1);

    expectBetween(rolls[0].result, 8);
  });
});
