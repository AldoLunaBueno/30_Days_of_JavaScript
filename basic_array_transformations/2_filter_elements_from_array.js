// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
var filter = function(arr, fn) {
    let currentIndex = 0;
   
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        arr[currentIndex] = arr[i];
        currentIndex++;
      }
    }
   
    arr.length = currentIndex;
    return arr;
}

// function filter(arr, fn) {
//     let currIndex = 0
//     let returnedArray = []

//     arr.forEach((a, i) => {
//         if (fn(a, i)) {
//             returnedArray[currIndex] = arr[i]
//             currIndex++
//         }
//     })

//     returnedArray.length = currIndex
//     return returnedArray    
// }

// var filter = function(arr, fn) {
//     let returnedArray = new Array
//     arr.forEach((a, i) => {
//         if (fn(a, i)) {
//             returnedArray.push(a)
//         }
//     })
//     return returnedArray
// };

// testing the function
let arr
let fn
arr = [0,10,20,30]
fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr, fn))

arr = [-2,-1,0,1,2]
fn = function plusOne(n) { return n + 1 }
console.log(filter(arr, fn))