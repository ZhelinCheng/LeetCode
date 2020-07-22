/*
 * @Author       : Zhelin Cheng
 * @Date         : 2020-07-20 11:06:00
 * @LastEditors  : Zhelin Cheng
 * @LastEditTime : 2020-07-20 15:13:14
 * @FilePath     : /leetcode/167.两数之和-ii-输入有序数组.js
 * @Description  : 未添加文件描述
 */ 
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len = nums.length - 1

    let lowIndex = 0
    let higtIndex = len
    
    for (let index = 0; index < len; index++) {
        const sum  = nums[lowIndex] + nums[higtIndex]

        if (sum === target) {
            return [lowIndex + 1, higtIndex + 1]
        } else if (sum > target) {
            higtIndex--
        } else {
            lowIndex++
        }
    }

    return null
};
// @lc code=end

