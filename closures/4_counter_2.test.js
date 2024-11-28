import createCounter from './4_counter_2';

describe("counter", () => {
    it("increment function should increment counter by 1", () => {
      const counter = createCounter(5)
      expect(counter.increment()).toEqual(6)
    })
    it("decrement function should decrement counter by 1", () => {
      const counter = createCounter(0)
      expect(counter.decrement()).toEqual(-1)
    })
    it("reset function should reset the count to the initial value", () => {
      const counter = createCounter(5)
      counter.increment()
      counter.decrement()
      counter.increment()
      expect(counter.reset()).toEqual(5)
    })
})
