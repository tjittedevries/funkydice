"use strict";

var _funkydice = require("./funkydice");

describe("Funkydice", () => {
  test("with one correct command", () => {
    expect((0, _funkydice.funkydice)("1d4").length).toBe(1);
  });
  test("with two correct commands", () => {
    expect((0, _funkydice.funkydice)("1d4,2d8").length).toBe(2);
  });
  test("with one correct and one incorrenc command", () => {
    expect((0, _funkydice.funkydice)("1d4,3d").length).toBe(1);
  });
  test("one incorrect command", () => {
    expect((0, _funkydice.funkydice)("1").length).toBe(0);
  });
});