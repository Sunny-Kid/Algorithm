/**
 * 堆排序
 * @param {Array} arr
 * O(nlogn)
 */

// 交换两个节点
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 最大堆调整（Max Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
function maxHeapify (arr, start, end) {
  //建立父节点指标和子节点指标
  let dad = start
  let son = dad * 2 + 1
  //若子节点指标在范围内才做比较
  while (son <= end) {
    //先比较两个子节点大小，选择最大的
    if (son + 1 <= end && arr[son] < arr[son + 1]) son++
    //如果父节点大於子节点代表调整完毕，直接跳出函数
    if (arr[dad] > arr[son]) break
    //否则交换父子内容再继续子节点和孙节点比较
    swap(arr, dad, son)
    dad = son
    son = dad * 2 + 1
  }
}

// 堆排序
function heapSort(arr) {
  // 初始化大顶堆，i 从第一个非叶子结点开始
  for (let i = Math.floor(arr.length / 2 - 1);i >= 0;i--) {
    maxHeapify(arr, i, arr.length - 1)
  }
  //先将第一个元素和已排好元素前一位做交换，再重新调整，直到排序完毕
  for (let i = arr.length - 1;i > 0;i--) {
    swap(arr, 0, i);
    maxHeapify(arr, 0, i - 1);
  }
}

let arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
heapSort(arr);
