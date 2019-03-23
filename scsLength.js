// Longest Common Subsequence Length

const assert = require('assert')

function scsLength (str1, str2, i1 = str1.length - 1, i2 = str2.length - 1) {
  if (i1 === 0 || i2 === 0) {
    return Math.max(i1, i2)
  }
  if (str1[i1] === str2[i2]) {
    return scsLength(str1, str2, i1 - 1, i2 - 1) + 1
  }
  return Math.min(
    scsLength(str1, str2, i1 - 1, i2),
    scsLength(str1, str2, i1, i2 - 1)
  ) + 1 
}

assert.strictEqual(scsLength('abbcasd', 'bbacasd'), 7)
