import map from "./1_apply_transform";

describe("map", () => {
  describe("given a array and a constant function with no arguments", () => {
    it("should return an array of the same constant value \
        for each value of the given array", () => {
      // arrange
      let arr = [1, 2, 3];
      function constant() {
        return 42;
      }
      // act
      let result = map(arr, constant);
      // assert
      expect(result).toEqual([42, 42, 42]);
    });
  });
  describe("given a array and a function of one argument", () => {
    it("should return an array of function evaluated values \
        for each value of the given array", () => {
      // arrange
      let arr = [1, 2, 3];
      function plusone(n) {
        return n + 1;
      }
      // act
      let result = map(arr, plusone);
      // assert
      expect(result).toEqual([2, 3, 4]);
    });
  });
  describe("given a array and a function of two arguments", () => {
    it("should return an array of function evaluated values \
        for each value of the given array \
        considering the second argument like the index", () => {
      // arrange
      let arr = [10, 20, 30];
      function plusI(n, i) {
        return n + i;
      }
      // act
      let result = map(arr, plusI);
      // assert
      expect(result).toEqual([10, 21, 32]);
    });
  });
});
