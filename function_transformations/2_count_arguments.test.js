import argumentsLength from "./2_count_arguments";

describe("count arguments", () => {
  it("should return length of numbers passed", () => {
    expect(argumentsLength(1, 2, 3)).toBe(3);
  });
  it("should return length of any arguments passed", () => {
    expect(argumentsLength({}, null, "3")).toBe(3);
  });
});
