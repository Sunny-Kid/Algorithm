/**
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
// 方法1：使用排序 O(nlogn)
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};

// 方法2：摩尔投票法 O(1)
var majorityElement = function(nums) {
  let res = nums[0]
  let count = 0
  for (let i = 1;i < nums.length;i++) {
    if (res === nums[i]) {
      count++
    } else {
      count === 0 ? res = nums[i] : count--
    }
  }
  return res
};
