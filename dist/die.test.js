"use strict";

var _die = require("./die");

var _testUtils = require("./testUtils");

describe("die", () => {
  test("d6", () => {
    const roll = (0, _die.die)(6);
    expect(roll.faces).toBe(6);
    (0, _testUtils.expectBetween)(roll.result, 6);
  });
  test("d100", () => {
    const roll = (0, _die.die)(100);
    expect(roll.faces).toBe(100);
    (0, _testUtils.expectBetween)(roll.result, 100);
  });
});