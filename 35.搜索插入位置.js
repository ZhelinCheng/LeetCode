/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
   // 保存最小与最大位置
   let min = 0
   let max = nums.length - 1

   // 最小位置是否小与等于最大位置
   while (min <= max) {
     let index = ~~((min + max) / 2)
     let val = nums[index]

     if (val === target) {
       return index
     } else if (val > target) {
       max = --index
     } else {
       min = ++index
     }
   }

   return min
}

/* console.log(searchInsert(
    [1,3,5,6],
    5
))
console.log(searchInsert(
    [1,3,5,6],
    2
))
console.log(searchInsert(
    [1,3,5,6],
    7
)) 
console.log(searchInsert(
    [1,3,5,6],
    0
)) */
// @lc code=end
