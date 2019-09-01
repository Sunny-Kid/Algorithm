/**
 * 选择排序
 * @param {Array} arr
 * O(n^2)
 */
function selectionSort(arr) {
	let indexMin
	for (let i = 0; i < arr.length - 1; i++) {
		indexMin = i
		for (let j = i; j < arr.length; j++) {
			if (arr[indexMin] > arr[j]) {
				indexMin = j
			}
		}
		if (i !== indexMin) {
			[arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
		}
	}
	return arr
}