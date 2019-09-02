/**
 * 归并排序
 * 先递归划分数组，然后再把有序的数组合并未一个
 * O(nlogn)
 * @param {Array} arr 
 * @return {Array}
 */
export default function mergeSort(array) {
	const { length } = array;
	if (length < 2) return array;
	const middle = Math.floor(length / 2);
	const left = mergeSort(array.slice(0, middle));
	const right = mergeSort(array.slice(middle, length));
	return merge(left, right);
}

function merge(left, right) {
	let i = 0;
	let j = 0;
	const result = [];
	while (i < left.length && j < right.length) {
		result.push(left[i] < right[j] ? left[i++] : right[j++]);
	}
	return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
