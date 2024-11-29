/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

import once from "./3_just_one_call";

describe("just-one-call function", () => {
  it("should return the function in the first call", () => {
    let sum = (a, b, c) => a + b + c;
    let onceSum = once(sum);
    let result = onceSum(1, 2, 3);
    expect(result).toEqual(6);
  });
  it("should return the function in the first call", () => {
    let sum = (a, b, c) => a + b + c;
    let onceSum = once(sum);
    onceSum(1, 2, 3);
    let result = onceSum(1, 2, 3);
    expect(result).toEqual(undefined)
  });
});
