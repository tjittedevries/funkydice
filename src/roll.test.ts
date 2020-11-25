import { roll } from "./roll";
import { expectBetween } from "./testUtils";

import { Command } from "./convertStringToCommands";
import { Modifier } from "./modify";

describe("roll", () => {
  const modifier: Modifier = {
    type: "-",
    value: 5,
  };

  const command: Command = {
    amount: 1,
    faces: 20,
    modifier,
  };

  test("one command", () => {
    const rollResult = roll(command);
    expect(rollResult.rolls.length).toBe(1);
  });

  test("result in range", () => {
    const rollResult = roll(command);
    expectBetween(rollResult.totalModified, command.faces);
  });

  test("result with modifiers in range", () => {
    const rollResult = roll(command);
    expect(rollResult.totalModified).toBe(rollResult.total - 5);
  });
});
