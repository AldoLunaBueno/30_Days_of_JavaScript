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

export default expect
