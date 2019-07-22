/**
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口 k 内的数字。滑动窗口每次只向右移动一位。

返回滑动窗口最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
注意：

你可以假设 k 总是有效的，1 ≤ k ≤ 输入数组的大小，且输入数组不为空。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow1 = function(nums, k) {
  if (!nums.length) return []
  const win = nums.splice(0, k)
  const res = []
  res.push(Math.max(...win))
  while (nums.length > 0) {
    win.shift()
    win.push(nums.shift())
    res.push(Math.max(...win))
  }
  return res
};

var maxSlidingWindow2 = function(nums, k) {
  if (!nums.length) return []
  const win = []
  const res = []
  for (let i = 0;i < nums.length;i++) {
    if (i >= k && win[0] <= i - k) {
      win.shift()
    }
    while (win.length && nums[i] >= nums[win[win.length - 1]]) {
      win.pop()
    }
    win.push(i)
    if (i >= k - 1) {
      res.push(nums[win[0]])
    }
  }
  return res
};
