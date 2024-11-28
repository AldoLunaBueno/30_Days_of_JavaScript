import  createCounter from "./2_counter"

describe("counter", () => {
    it("should increment count by one for each call", () => {
        const counter = createCounter(10)
        counter() // n = 10
        counter() // n+1 = 11
        expect(counter()).toEqual(12)
    })
})