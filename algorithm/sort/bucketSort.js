/**
 * 通过排序
 * @param {Array} arr
 * O(n + k)
 * 桶排序适合在海量数据中应用，桶排序对数据的条件有特殊要求，有其局限性，适合元素值集合并不大的情况。
 */

function bucketSort(array, num) {
  if (!Array.isArray(array) || array.length <= 1) return array
  num = num || 10
  const min = Math.min.apply(this, array)
  const max = Math.max.apply(this, array)
  const space = (max - min + 1) / num
  let result = []
  let buckets = []
  for (let i = 0; i < array.length; i++) {
    const index = Math.floor((array[i] - min) / space)
    if (buckets[index]) {
      // 非空桶，插入排序
      let j = buckets[index].length - 1
      while (j >= 0 && buckets[index][j] > array[i]) {
        buckets[index][j + 1] = buckets[index][j]
        j--
      }
      buckets[index][j + 1] = array[i]
    } else { // 空桶，初始化
      buckets[index] = []
      buckets[index].push(array[i])
    }
  }
  for (let n = 0; n < num; n++) {
    result = result.concat(buckets[n])
  }
  return result
}
var arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.log(bucketSort(arr,4))//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
