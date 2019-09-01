/**
 * 计数排序
 * @param {Array} arr
 * O(n + k)
 */

function countingSort(Arr) {
  if (!Array.isArray(Arr) || Arr.length < 2) return Arr;
  let res = [];
  // 创建长度max的数组，填充0
  let counts = new Array(Math.max.apply(this, Arr)).fill(0);
  for (let i = 0;i < Arr.length;i++) {
    counts[Arr[i]] += 1;
  }
  for (let j = 0;j < counts.length;j++) {
    while(counts[j]-- > 0){
      res.push(j);
    }
  }
  return res;
}

let arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]
