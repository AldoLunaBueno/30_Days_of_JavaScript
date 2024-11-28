/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let curr_value = init;
    return {
        increment: () => ++curr_value,
        decrement: () => --curr_value,
        reset: () => curr_value = init
    }
};

// Export createCounter for test files
export default createCounter