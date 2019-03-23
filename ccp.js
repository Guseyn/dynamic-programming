// Coin change problem

const assert = require('assert')

function ccp (coins, change) {
  if (change === 0) {
    return 0
  }
  if (change < 0) {
    return Number.MAX_SAFE_INTEGER
  }
  let minCoins = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < coins.length; i++) {
    let res = ccp(coins, change - coins[i])
    if (res !==  Number.MAX_SAFE_INTEGER) {
      minCoins = Math.min(minCoins, res + 1)
    }
  }
  return minCoins
}

assert.strictEqual(ccp([1, 3, 5, 7], 15), 3)
