
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

import compose from "./1_function_composition"

describe("function composition", () => {
    it("should return the identity function given an empty array of functions", () => {
        // arrange
        let functions = []
        let x = 42
        // act
        let composeFn = compose(functions) // identity function
        let result = composeFn(x)
        // assert
        expect(result).toBe(42)        
    })
    it("should return the compose function of the given array of functions", () => {
        // arrange
        let functions = [x => x + 1, x => x * x, x => 2 * x]
        let x = 4
        // act
        let composeFn = compose(functions)
        let result = composeFn(x)
        // assert
        expect(result).toBe(65)
    })
    it("same, but more difficult", () => {
        // arrange
        let functions = [x => 10 * x, x => 10 * x, x => 10 * x]
        let x = 1
        // act
        let composeFn = compose(functions)
        let result = composeFn(x)
        // assert
        expect(result).toBe(1000)
    })
})