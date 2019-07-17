/**
 * 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums == undefined) return 0
  let res = nums[0]
  let curMin = nums[0]
  let curMax = nums[0]
  for (let i = 1;i < nums.length;i++) {
    let num = nums[i]
    curMin_tmp = curMin * num
    curMax_tmp = curMax * num
    curMin = Math.min(curMin_tmp, curMax_tmp, num)
    curMax = Math.max(curMax_tmp, curMin_tmp, num)
    res = (curMax > res) ? curMax : res
  }
  return res
};
