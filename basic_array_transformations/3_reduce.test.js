import reduce from "./3_reduce";

describe("array reduce function", () => {
  it("should return initial value given an empty array", () => {
    // arrange
    let arr = [];
    function sum(accum, curr) {
      return accum + curr;
    }
    let init = 25;
    // act
    let result = reduce(arr, sum, init);
    // assert
    expect(result).toBe(25);
  });
  it("should return the final result of applying the function \
        to each last partial result and current array value together", () => {
    // arrange
    let arr = [1, 2, 3, 4];
    function sum(accum, curr) {
      return accum + curr;
    }
    let init = 0;
    // act
    let result = reduce(arr, sum, init);
    // assert
    expect(result).toBe(10);
  });
  it("the same, but more dificult", () => {
    // arrange
    let arr = [1, 2, 3, 4];
    function squareSum(accum, curr) {
      return accum + curr * curr;
    }
    let init = 100;
    // act
    let result = reduce(arr, squareSum, init);
    // assert
    expect(result).toBe(130);
  });
});
