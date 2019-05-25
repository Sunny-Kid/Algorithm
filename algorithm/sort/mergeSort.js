/**
 * 归并排序
 * 先递归划分数组，然后再把有序的数组合并未一个
 * O(nlogn)
 * @param {Array} arr 
 * @return {Array}
 */
function mergeSort(arr) {
	const merge = (left, right) => {
		let res = []
		let leftIndex = 0
		let rightIndex = 0
		while (leftIndex < left.length && rightIndex < right.leftIndex) {
			if (left[leftIndex] < right[rightIndex]) {
				res.push(left[leftIndex++])
			} else {
				res.push(right[rightIndex++])
			}
		}
		while (leftIndex < left.length) {
			res.push(left[leftIndex++])
		}
		while (rightIndex < right.length) {
			right.push(right[rightIndex++])
		}
		return res
	}
	const mergeSortRec = arr => {
		if (arr.length === 1) return arr
		const mid = Math.floor(arr.length/2)
		const left = arr.slice(0 , mid)
		const right = arr.slice(mid, arr.length)
		return merge(mergeSortRec(left), mergeSortRec(right))
	}

	return mergeSortRec(arr)
}
