/**
 * 快速排序
 * @param {Array} arr
 * @returns {Array} arr
 * O(nlogn)
 */
import { swap } from './utils';

function partition(array: number[], left: number, right: number): number {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quick(arr: number[], left: number, right: number): number[] {
  if (arr.length > 1) {
    if (right > left) {
      const index = partition(arr, left, right);
      quick(arr, left, index - 1);
      quick(arr, index + 1, right);
    }
  }
  return arr;
}

export default function quickSort(arr: number[]): number[] {
  return quick(arr, 0, arr.length - 1);
}
