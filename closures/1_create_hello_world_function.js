/**
 * hoisting
 * block scope
 * lexical scope
 * closures
 * different ways to define a function
 * rest arguement
 * higher order functions
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

// Just to test the returned function

const f = createHelloWorld();
console.log(f()); // "Hello World"