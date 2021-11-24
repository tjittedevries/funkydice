import { die, fateDie } from "./dice";
import { expectBetween } from "./testUtils";

describe("Dice", () => {
  test("Default die", () => {
    const result = die(6)();
    expectBetween(result, 6);
  });

  test("Fate die", () => {
    const result = fateDie()();
    expectBetween(result, 4, -4);
  });
});
