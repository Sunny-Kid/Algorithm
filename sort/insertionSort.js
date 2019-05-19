function insertionSort(arr) {
	let j
	let temp
	for (let i = 1;i < arr.length;i++) {
		j = i
		temp = arr[i]
		while (j > 0 && arr[j-1] > temp) {
			arr[j] = arr[j-1]
			j--
		}
		// 到达索引位置0，插入最小值
		arr[j] = temp
	}
}
