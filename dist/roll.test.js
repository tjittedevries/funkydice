"use strict";

var _roll = require("./roll");

var _testUtils = require("./testUtils");

describe("roll", () => {
  const modifier = {
    type: "-",
    value: 5
  };
  const command = {
    amount: 1,
    faces: 20,
    modifier
  };
  test("one command", () => {
    const rollResult = (0, _roll.roll)(command);
    expect(rollResult.rolls.length).toBe(1);
  });
  test("result in range", () => {
    const rollResult = (0, _roll.roll)(command);
    (0, _testUtils.expectBetween)(rollResult.totalModified, command.faces);
  });
  test("result with modifiers in range", () => {
    const rollResult = (0, _roll.roll)(command);
    expect(rollResult.totalModified).toBe(rollResult.total - 5);
  });
});