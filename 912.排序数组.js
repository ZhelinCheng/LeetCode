/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) {
    // 基线条件
    return nums
  } else {
    // 递归条件

    // 基准值
    let base = nums.shift()

    // 小于基准值的子数组
    let less = nums.filter((curr) => curr <= base)

    // 大于基准值的子数组
    let greater = nums.filter((curr) => curr > base)

    // 合并数组，并将不符合基准值的子数组再次进行递归分区
    return sortArray(less).concat([base], sortArray(greater))
  }
}
// @lc code=end
