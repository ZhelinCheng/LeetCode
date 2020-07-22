/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */


var max = Math.pow(2, 31) - 1;
var min = -Math.pow(2, 31);

var reverse = function (x) {
  let revertedNumber = 0

  const isNegative = x < 0
  if (isNegative) {
    x = Math.abs(x)
  }

  while (x > 0) {
    const pop = x % 10
    revertedNumber = revertedNumber * 10 + pop
    x = Math.floor(x / 10)
  }

  if (revertedNumber > max || revertedNumber < min) {
      return 0
  }
  
  return isNegative ? -revertedNumber : revertedNumber
}

// console.log(reverse(1534236469))
// @lc code=end
