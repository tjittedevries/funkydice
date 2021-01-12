import { modify, Modifier } from "./modify";

describe("modify", () => {
  test("with minus modifier", () => {
    const modifier: Modifier = {
      type: "-",
      value: 5,
    };

    expect(modify(20, modifier)).toBe(15);
  });

  test("with plus modifier", () => {
    const modifier: Modifier = {
      type: "+",
      value: 5,
    };

    expect(modify(20, modifier)).toBe(25);
  });
});
