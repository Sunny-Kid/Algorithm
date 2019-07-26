/**
 * 二分搜索
 * @param {Object} item 
 * O(logn)
 */
function binarySearch(item,arr) {
  arr.sort((a, b) => a - b)
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] < item) {
      low = mid + 1
    } else if (arr[mid] > item) {
      high = mid - 1
    } else {
      return mid
    }
  }

  return -1
}
