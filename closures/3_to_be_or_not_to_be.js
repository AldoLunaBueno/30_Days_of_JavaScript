/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function (next_val) {
            if (val === next_val) {
                return true
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: function (next_val) {
            if (val !== next_val) {
                return true
            } else {
                throw new Error("Equal");
            }
        }
    }
};

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
