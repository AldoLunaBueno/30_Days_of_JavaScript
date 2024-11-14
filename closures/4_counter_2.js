/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    curr_value = init;
    return {
        increment: () => ++curr_value,
        decrement: () => --curr_value,
        reset: () => curr_value = init
    }
};

// code to test:

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
console.log(counter.decrement()); // 3
console.log(counter.reset()); // 5