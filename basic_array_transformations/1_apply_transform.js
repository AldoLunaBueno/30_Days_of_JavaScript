// 2635. Apply Transform Over Each Element in Array

// Faster solution
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = new Array(arr.length)
    arr.forEach((a, i) => {
        returnedArray[i] = fn(a, i)
    })
    return returnedArray
}

// Fast enough solution
// var map = function(arr, fn) {
//     let returnedArray = new Array(arr.length)
//     for (let i = 0; i < arr.length; i++) {
//         returnedArray[i] = fn(arr[i], i)
//     }
//     return returnedArray
// };

// Slower solution
// var map = function(arr, fn) {
//     return arr.map((a, i) => fn(a, i))
// }

export default map