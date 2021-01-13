import {
  extractModifierFromString,
  extractCommandsFromString,
  extractCommandFromString,
  convertStringToCommands,
} from "./convertStringToCommands";

describe("convertStringToCommands", () => {
  test("extractCommandsFromString", () => {
    expect(extractCommandsFromString("one,two").length).toBe(2);
  });

  test("extractCommandFromString", () => {
    const result = extractCommandFromString("2d4+1");
    expect(result!.amount).toBe(2);
    expect(result!.faces).toBe(4);
    expect(result!.modifier!.type).toBe("+");
    expect(result!.modifier!.value).toBe(1);
  });

  test("extractCommandFromString invalid", () => {
    const result = extractCommandFromString("2d");
    expect(result).toBe(undefined);
  });

  test("extractModifierFromString", () => {
    const result = extractModifierFromString("+1");
    expect(result!.type).toBe("+");
    expect(result!.value).toBe(1);
  });

  test("extractModifierFromString", () => {
    const result = extractModifierFromString("-");
    expect(result).toBe(undefined);
  });
  test("convertStringToCommands", () => {
    const result = convertStringToCommands("1d4");
    expect(result.length).toBe(1);
  });

  test("limits of regex inextractCommandFromString", () => {
    const result0 = convertStringToCommands("999d999+999");
    expect(result0.length).toBe(1);

    const result1 = convertStringToCommands("9999d6");
    expect(result1.length).toBe(0);

    const result2 = convertStringToCommands("1d9999");
    expect(result2.length).toBe(0);

    const result3 = convertStringToCommands("1d6+9999");
    expect(result3.length).toBe(0);

    const result4 = convertStringToCommands("9999d9999+9999");
    expect(result4.length).toBe(0);
  });
});
