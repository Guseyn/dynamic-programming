// The Levenshtein distance (Edit distance) problem

const assert = require('assert')

function ldp (fromStr, toStr, fl = fromStr.length, tl = toStr.length) {
  if (fl === 0) {
    return tl
  }
  if (tl === 0) {
    return fl
  }
  let cost
  if (fromStr[fl - 1] === toStr[tl - 1]) {
    cost = 0
  } else {
    cost = 1
  }
  return Math.min(
    ldp(fromStr, toStr, fl - 1, tl) + 1,
    ldp(fromStr, toStr, fl, tl - 1) + 1,
    ldp(fromStr, toStr, fl - 1, tl - 1) + cost
  )
}

assert.strictEqual(ldp('kitten', 'sitting'), 3)
