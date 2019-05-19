function insertionSort(arr) {
	let j
	let temp
	for (let i = 1;i < arr.length;i++) {
		j = i
		temp = arr[i]
		while(j > 0 && arr[j-1] > arr[j]) {
			arr[j] = arr[j-1]
			j--
		}
		arr[j] = temp
	}
}
