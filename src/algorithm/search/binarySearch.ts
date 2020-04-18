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
    /** 
     * mid=(low+high)/2 这种写法是有问题的
     * 因为如果 low 和 high 比较大的话，两者之和就有可能会溢出
     * 改进的方法是将 mid 的计算方式写成 low+(high-low)/2
     */
    const mid = low + Math.floor((high - low) / 2);
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
