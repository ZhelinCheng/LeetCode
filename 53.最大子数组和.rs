/*
 * @Author       : 程哲林
 * @Date         : 2022-06-17 10:29:49
 * @LastEditors  : 程哲林
 * @LastEditTime : 2022-06-17 10:29:57
 * @FilePath     : /LeetCode/53.最大子数组和.rs
 * @Description  : 未添加文件描述
 */

impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let mut max_sum = nums[0];
        let mut prev_sum = 0;

        for curr_nmb in nums {
            if prev_sum < 0 {
                prev_sum = curr_nmb;
            } else {
                prev_sum += curr_nmb;
            }

            if prev_sum > max_sum {
                max_sum = prev_sum;
            }
        }
        max_sum
    }
}