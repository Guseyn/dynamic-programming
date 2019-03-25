// flattenArray

const assert = require('assert')

function flattenArray (nestedArray, resArray = []) {
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      flattenArray(nestedArray[i], resArray)
    } else {
      resArray.push(nestedArray[i])
    }
  }
  return resArray
}

assert.deepStrictEqual(flattenArray([[1,2,[3]],4]), [1,2,3,4])
