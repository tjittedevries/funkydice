import {
  extractCommandFromString,
} from "./extractCommandFromString";

describe("convertStringToCommands", () => {
  
  describe("extractCommandFromString", () => {
    test("valid", () => {
      const result = extractCommandFromString("2d4+1");
      expect(result!.amount).toBe(2);
      expect(result!.faces).toBe(4);
      expect(result!.modifier).toBe(1);
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
});
