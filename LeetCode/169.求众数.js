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
var majorityElement = function(nums) {
  if (Array.isArray(nums)) return []
  if (nums.length === 1) return nums[0]
  const mid = Math.floor(arr.length / 2)
  const left = majorityElement(arr.slice(0 , mid))
  const right = majorityElement(arr.slice(mid, arr.length))
  if (left === right) return left
  countOccurences(nums, left) > mid ? left : right
};

const countOccurences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
