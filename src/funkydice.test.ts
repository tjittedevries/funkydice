import { funkydice } from "./funkydice";

describe("Funkydice", () => {
  test("with one correct command", () => {
    expect(funkydice("1d4").length).toBe(1);
  });

  test("with two correct commands", () => {
    expect(funkydice("1d4,2d8").length).toBe(2);
  });

  test("with one correct and one incorrenc command", () => {
    expect(funkydice("1d4,3d").length).toBe(1);
  });

  test("one incorrect command", () => {
    expect(funkydice("1").length).toBe(0);
  });
});
