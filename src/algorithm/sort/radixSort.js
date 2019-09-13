/**
 * 基数排序适用于：
 *  (1)数据范围较小，建议在小于1000
 *  (2)每个数值都要大于等于0
 * @param  arr 待排序数组
 * @param  maxDigit 最大位数
 */
//LSD Radix Sort
import { findMinValue, findMaxValue } from './utils';

function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }
  const minValue = findMinValue(array);
  const maxValue = findMaxValue(array);

  let significantDigit = 1; // {1}
  while ((maxValue - minValue) / significantDigit >= 1) {
    // {2}
    array = countingSortForRadix(array, radixBase, significantDigit, minValue); // {3}
    significantDigit *= radixBase; // {4}
  }
  return array;
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) {
    // {5}
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    // {6}
    bucketsIndex = Math.floor(
      ((array[i] - minValue) / significantDigit) % radixBase
    ); // {7}
    buckets[bucketsIndex]++; // {8}
  }
  for (let i = 1; i < radixBase; i++) {
    // {9}
    buckets[i] += buckets[i - 1];
  }
  for (let i = array.length - 1; i >= 0; i--) {
    // {10}
    bucketsIndex = Math.floor(
      ((array[i] - minValue) / significantDigit) % radixBase
    ); // {11}
    aux[--buckets[bucketsIndex]] = array[i]; // {12}
  }
  for (let i = 0; i < array.length; i++) {
    // {13}
    array[i] = aux[i];
  }
  return array;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(radixSort(arr, 10)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
