import expectation from "./3_to_be_or_not_to_be";

describe("expectation with a value argument", () => {
  describe("to-be function with a value argument", () => {
    it("should return true when both arguments are equal", () => {
      expect(expectation(10).toBe(10)).toEqual(true);
    });
    it("should throw an exception with the message 'Not Equal' \
        when arguments are not equal", () => {
      expect(() => {
        expectation(10).toBe(11);
      }).toThrow("Not Equal");
    });
  });
  describe("not-to-be function with a value argument", () => {
    it("should return true when the arguments are not equal", () => {
      expect(expectation(10).notToBe(11)).toEqual(true);
    });
    it("should throw and exception with the message 'Equal' \
        when arguments are equal", () => {
      expect(() => {
        expectation(10).notToBe(10);
      }).toThrow("Equal");
    });
  });
});
