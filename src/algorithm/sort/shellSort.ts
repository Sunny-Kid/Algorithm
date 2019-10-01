/**
 * 希尔排序
 * 希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列
 * 希尔排序，也称增量递减排序算法，是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。
 * @param {Array} arr
 * O(nlogn)
 */

function shellSort(arr: number[]): number[] {
  const len = arr.length;
  let temp: number;
  let gap = 1;
  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      // 选择排序
      let j: number;
      temp = arr[i];
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(shellSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
