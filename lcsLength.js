// Longest Common Subsequence Length

const assert = require('assert')

function lcsLength (str1, str2, i1 = str1.length - 1, i2 = str2.length - 1) {
  if (i1 === 0 || i2 === 0) {
    return 0
  }
  if (str1[i1] === str2[i2]) {
    return lcsLength(str1, str2, i1 - 1, i2 - 1) + 1
  }
  return Math.max(
    lcsLength(str1, str2, i1 - 1, i2),
    lcsLength(str1, str2, i1, i2 - 1)
  )
}

assert.strictEqual(lcsLength('abbcasd', 'bbacasd'), 5)
