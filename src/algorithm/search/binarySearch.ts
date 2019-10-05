/**
 * 二分搜索
 * @param {Object} item
 * O(logn)
 */
export default function binarySearch(item: number, arr: number[]): number {
  arr.sort((a: number, b: number) => a - b);
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < item) {
      low = mid + 1;
    } else if (arr[mid] > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
