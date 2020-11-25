"use strict";

var _convertStringToCommands = require("./convertStringToCommands");

describe("convertStringToCommands", () => {
  test("extractCommandsFromString", () => {
    expect((0, _convertStringToCommands.extractCommandsFromString)("one,two").length).toBe(2);
  });
  test("extractCommandFromString", () => {
    const result = (0, _convertStringToCommands.extractCommandFromString)("2d4+1");
    expect(result.amount).toBe(2);
    expect(result.faces).toBe(4);
    expect(result.modifier.type).toBe("+");
    expect(result.modifier.value).toBe(1);
  });
  test("extractCommandFromString invalid", () => {
    const result = (0, _convertStringToCommands.extractCommandFromString)("2d");
    expect(result).toBe(undefined);
  });
  test("extractModifierFromString", () => {
    const result = (0, _convertStringToCommands.extractModifierFromString)("+1");
    expect(result.type).toBe("+");
    expect(result.value).toBe(1);
  });
  test("extractModifierFromString", () => {
    const result = (0, _convertStringToCommands.extractModifierFromString)("-");
    expect(result).toBe(undefined);
  });
  test("convertStringToCommands", () => {
    const result = (0, _convertStringToCommands.convertStringToCommands)("1d4");
    expect(result.length).toBe(1);
  });
});