import { roll } from "./roll";
import { expectBetween } from "./testUtils";

import { Command } from "./convertStringToCommands";
import { Modifier } from "./modify";

describe("roll", () => {
  const command: Command = {
    amount: 1,
    faces: 20,
  };

  const modifier: Modifier = {
    type: "-",
    value: 5,
  };

  const commandModifed: Command = {
    amount: 1,
    faces: 20,
    modifier,
  };

  const commandFate: Command = {
    amount: 4,
    faces: "f",
  };

  test("one command", () => {
    const rollResult = roll(command);
    expect(rollResult.rolls.length).toBe(1);
  });

  test("result in range", () => {
    const rollResult = roll(command);
    expectBetween(rollResult.totalUnmodified, 20); // @todo add rollResult.maximum because faces is not the maximum, modifer needs to be added
  });

  test("result with modifiers in range", () => {
    const rollResult = roll(commandModifed);
    expect(rollResult.total).toBe(rollResult.totalUnmodified - modifier.value);
  });

  test("fate command", () => {
    const rollResult = roll(commandFate);
    expect(rollResult.rolls.length).toBe(4);
    expectBetween(rollResult.totalUnmodified, 4, -4);
  });
});
