/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  // 保存最小与最大位置
  let min = 0
  let max = nums.length - 1

  // 最小位置是否小与等于最大位置
  while (min <= max) {
    let index = Math.floor((min + max) / 2)
    let val = nums[index]

    if (val === target) {
      return index
    } else if (val > target) {
      max = index - 1
    } else {
      min = index + 1
    }
  }
  return -1
}

// console.log(search([-1,0,3,5,9,12], 9))
// @lc code=end
