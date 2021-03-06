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

  describe("extractCommandFromString", () => {
    test("valid", () => {
      const result = extractCommandFromString("2d4+1");
      expect(result!.amount).toBe(2);
      expect(result!.faces).toBe(4);
      expect(result!.modifier!.type).toBe("+");
      expect(result!.modifier!.value).toBe(1);
    });

    test("valid fate dice (4df)", () => {
      const result = extractCommandFromString("4df");
      expect(result!.amount).toBe(4);
      expect(result!.faces).toBe("f");
    });

    test("invalid", () => {
      const result = extractCommandFromString("2d");
      expect(result).toBe(undefined);
    });
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
});
