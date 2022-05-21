/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    let newIndex= 0;

    for (let index = 0; index < len; index++) {
        const oldItem = nums[index]
        if (oldItem !== val) {
            nums[newIndex] = oldItem
            newIndex++
        }
    }
    nums.length = newIndex

    return newIndex
};

// removeElement([3,2,2,3], 3)

// @lc code=end

