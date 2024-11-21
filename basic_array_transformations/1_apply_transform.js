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

// Slower solution (enough)
// var map = function(arr, fn) {
//     return arr.map((a, i) => fn(a, i))
// }


// Testing code

let arr = null
let fn = null

arr = [1,2,3]
fn = function plusone(n) { return n + 1; }
console.log(map(arr, fn))

arr = [1,2,3]
fn = function plusI(n, i) { return n + i; }
console.log(map(arr, fn))

arr = [10,20,30]
fn = function constant() { return 42; }
console.log(map(arr, fn))