/*
 * @Author       : Zhelin Cheng
 * @Date         : 2020-07-22 14:52:21
 * @LastEditors  : Zhelin Cheng
 * @LastEditTime : 2020-07-22 15:14:38
 * @FilePath     : /leetcode/154.寻找旋转排序数组中的最小值-ii.js
 * @Description  : 未添加文件描述
 */ 
/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const len = nums.length
    let low = 0
    let higt = len - 1

    for (let index = 0; index < len; index++) {
        if (low === higt) {
            return nums[low]
        }

        const mid = Math.floor((low + higt) / 2)
        const lastVal = nums[higt]
        const midVal = nums[mid]

        // console.log('--', low, higt, mid)
        if (midVal > lastVal) {
            low = mid + 1
        } else if (midVal < lastVal) {
            higt = mid
        } else {
            higt--
        }

        // console.log('>>', low, higt, mid)
    }
};


// console.log(findMin([3,4,0,1,2]))
// console.log(findMin([3,3,1,3]))
// @lc code=end

