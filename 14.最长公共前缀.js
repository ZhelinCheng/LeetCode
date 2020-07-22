/*
 * @Author       : Zhelin Cheng
 * @Date         : 2020-07-15 15:38:29
 * @LastEditors  : Zhelin Cheng
 * @LastEditTime : 2020-07-15 16:15:21
 * @FilePath     : /leetcode/14.最长公共前缀.js
 * @Description  : 未添加文件描述
 */

/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const firstStr = strs[0]

  if (firstStr === undefined) {
    return ''
  }

  const strLen = firstStr.length
  const wordLen = strs.length

  let prefix = ''
  let next = true

  for (let x = 0; x < strLen; x++) {
    const memo = {}
    const prefixKey = firstStr[x]
    memo[prefixKey] = true

    for (let y = 1; y < wordLen; y++) {
      const str = strs[y]
      const key = str[x]
      if (!memo[key]) {
        next = false
        break
      }
    }

    if (next) {
      prefix += prefixKey
    } else {
      break
    }
  }

  return prefix
}
// @lc code=end
