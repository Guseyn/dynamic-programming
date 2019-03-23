// Longest Increasing Subsequence problem

const assert = require('assert')

function lisLength (arr, i = 0, l = arr.length, prev = 0) {
  if (i === l) {
    return 0
  }
  let excl = lisLength(arr, i + 1, l, prev)
  let incl = 0
  if (arr[i] >= prev) {
    incl = lisLength(arr, i + 1, l, arr[i]) + 1
  }
  return Math.max(excl, incl)
}

assert.strictEqual(lisLength([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]), 6)
