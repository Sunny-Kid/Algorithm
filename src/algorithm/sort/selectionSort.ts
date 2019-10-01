/**
 * 选择排序
 * @param {Array} arr
 * O(n^2)
 */
import { swap } from './utils';

export default function selectionSort(arr: number[]): number[] {
  let indexMin;
  for (let i = 0; i < arr.length - 1; i++) {
    indexMin = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(arr, i, indexMin);
    }
  }
  return arr;
}
