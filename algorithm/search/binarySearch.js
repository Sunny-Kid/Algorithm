/**
 * 二分搜索
 * @param {Object} item 
 * O(logn)
 */
function binarySearch(item,arr) {
  arr.sort((a, b) => a - b)
  let low = 0
  let element = null
  let mid = null
  let high = arr.length - 1

  while (low <= high) {
    mid = Math.floor((high - low) / 2)
    element = arr[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }

  return -1
}
