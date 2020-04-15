/**
 * 冒泡排序
 * @param {Array} arr
 * O(n^2)
 */
import { swap } from './utils';

export default function bubbleSort(arr: number[]): number[] {
  if (arr.length <= 1) return;
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false; // 表示有无数据交换
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = true;
      }
    }
    if (!flag) break; // 没有数据交换，提前退出
  }
  return arr;
}
