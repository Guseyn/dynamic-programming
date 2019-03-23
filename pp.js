// Partition problem

const assert = require('assert')

function pp (arr, sum, l = arr.length - 1) {
  if (sum === 0) {
    return true
  }
  if (sum < 0 || l < 0) {
    return false
  }
  return pp(arr, sum - arr[l], l - 1) || pp(arr, sum, l - 1)
}

let arr = [1, 2, 3, 7, 5]
let sum = arr.reduce((sum, a) => {return sum + a})

assert(sum % 2 === 0 && pp([1, 2, 3, 4, 5], sum / 2))
