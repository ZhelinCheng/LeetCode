/*
 * @Author       : Zhelin Cheng
 * @Date         : 2020-07-17 17:10:47
 * @LastEditors  : Zhelin Cheng
 * @LastEditTime : 2020-07-20 15:28:41
 * @FilePath     : /leetcode/26.删除排序数组中的重复项.js
 * @Description  : 未添加文件描述
 */ 
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const memo = {}
    const len = nums.length
    let index = 0

    for (let i = 0; i < len; i++) {
        const val = nums[i]

        if (!memo.has(val)) {
            nums[index] = val
            index++
        }

        memo.add(val)
    }

    // console.log(index)
    return index
};

/* console.log(
    removeDuplicates([1,1,2])
) */
// @lc code=end

