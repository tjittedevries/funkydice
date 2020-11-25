"use strict";

var _foo = require("./foo");

test("basic", () => {
  expect((0, _foo.sum)()).toBe(0);
});
test("basic again", () => {
  expect((0, _foo.sum)(1, 2)).toBe(3);
});