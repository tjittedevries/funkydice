"use strict";

var _dice = require("./dice");

var _testUtils = require("./testUtils");

describe("dice", () => {
  test("6d20", () => {
    const rolls = (0, _dice.dice)(6, 20);
    expect(rolls.length).toBe(6);
    (0, _testUtils.expectBetween)(rolls[0].result, 20);
  });
  test("1d8", () => {
    const rolls = (0, _dice.dice)(1, 8);
    expect(rolls.length).toBe(1);
    (0, _testUtils.expectBetween)(rolls[0].result, 8);
  });
});