/**
 * 插入排序
 * @param {Array} arr
 * O(n^2) 
 */
export default function insertionSort(arr) {
	let key
	for (let i = 1; i < arr.length; i++) {
		key = arr[i]
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] > key) {
				arr[j + 1] = arr[j]
			}
		}
		// 到达索引位置，插入最小值
		arr[j + 1] = key
	}
	return arr
}

const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.log(insertionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
