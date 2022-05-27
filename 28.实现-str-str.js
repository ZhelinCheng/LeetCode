/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const mLen = needle.length;
    const nLen = haystack.length;

    const maxLen = nLen - mLen;

    for (let i = 0; i <= maxLen; i++) {
        let j = 0;
        for (j = 0; j < mLen; j++) {
            if (haystack[i + j] != needle[j]) {
                break;
            }
        }
        if (j === mLen) {
            return i;
        }
    }

    return -1
};
// @lc code=end


console.log(strStr('a', 'a'));
