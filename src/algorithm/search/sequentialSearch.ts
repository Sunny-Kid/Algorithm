/**
 * 顺序搜索
 * @param {Array} arr
 * @param {Objec} item
 * O(n)
 */
export default function sequentialSearch(arr: number[], item: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (item === arr[i]) return i;
  }
  return -1;
}
