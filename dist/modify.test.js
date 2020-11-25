"use strict";

var _modify = require("./modify");

describe("modify", () => {
  test("with modifier", () => {
    const modifier = {
      type: "-",
      value: 5
    };
    expect((0, _modify.modify)(20, modifier)).toBe(15);
  });
  test("without modifier", () => {
    const modifier = {
      type: undefined,
      value: 5
    };
    expect((0, _modify.modify)(20, modifier)).toBe(20);
  });
});