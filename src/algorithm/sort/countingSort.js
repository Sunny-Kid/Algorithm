/**
 * 计数排序
 * @param {Array} arr
 * O(n + k) k 为计数器的长度
 */

import { findMaxValue } from './utils';

export default function countingSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr;
  // 创建长度max的数组，填充0
  const maxValue = findMaxValue(arr);
  const counts = new Array(maxValue + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]]++;
  }
  let sortedIndex = 0;
  counts.forEach((count, index) => {
    while (count > 0) {
      arr[sortedIndex++] = index;
      count--;
    }
  });
  return arr;
}

let arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]
