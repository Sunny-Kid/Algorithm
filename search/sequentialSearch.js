/**
 * 顺序搜索
 * @param {Array} arr
 * @param {Objec} item 
 * O(n)
 */
function sequentialSearch(arr, item) {
  for (let i = 0;i < arr.length;i++) {
		if (item === arr[i]) return i
	}
	return -1
}
