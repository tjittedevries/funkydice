import { modify, Modifier } from "./modify";

describe("modify", () => {
  test("basic", () => {
    const modifier: Modifier = {
      type: "-",
      value: 5,
    };

    expect(modify(20, modifier)).toBe(15);
  });

  test("basic again", () => {
    const modifier: Modifier = {
      type: undefined,
      value: 5,
    };
    expect(modify(20, modifier)).toBe(20);
  });
});
