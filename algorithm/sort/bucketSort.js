/**
 * 通过排序
 * @param {Array} arr
 * O(n + k)
 * 桶排序适合在海量数据中应用，桶排序对数据的条件有特殊要求，有其局限性，适合元素值集合并不大的情况。
 */

import insertionSort from './insertionSort';
import { findMaxValue, findMinValue } from './utils';

function createBuckets(array, bucketSize) {
  const minValue = findMinValue(array);
  const maxValue = findMaxValue(array);
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - min) / bucketCount);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}

function sortBuckets() {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] !== null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}

export default function bucketSort(array, bucketSize = 5) {
  if (!Array.isArray(array) || array.length <= 1) return array;
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}

var arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.log(bucketSort(arr,4))//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
