/*
 * @Author       : Zhelin Cheng
 * @Date         : 2020-07-15 15:41:54
 * @LastEditors  : Zhelin Cheng
 * @LastEditTime : 2020-07-15 16:12:15
 * @FilePath     : /leetcode/14.最长公共前缀.ts
 * @Description  : 未添加文件描述
 */ 
/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

 type MemoType = {
     [key: string]: boolean
 }

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    const firstStr = strs[0]

    if (firstStr === undefined) {
        return ''
    }

    const strLen = firstStr.length
    const wordLen = strs.length

    let prefix = ''
    let next = true

    for (let x = 0; x < strLen; x++) {
        const memo: {
            [key: string]: boolean
        } = {}
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
};
// @lc code=end

longestCommonPrefix([])
// longestCommonPrefix(["dog","racecar","car"])